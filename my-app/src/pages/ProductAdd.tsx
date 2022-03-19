import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ProductType } from '../types/product';

type ProductAddProps = {
    onAdd: (product: ProductType) => void

    
}
type FormValues = {
    name: string,
    price: number,
};

const ProductAdd = (props: ProductAddProps) => {
    const {register, handleSubmit, formState: {errors}} = useForm<FormValues>()
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<FormValues> = (data)=>{
        props.onAdd(data);
        navigate('/admin/product');
        
    }
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register('name', {required:true, minLength:5})} />
            {errors.name && errors.name.type === 'required' && <span>required</span>}
            {errors.name && errors.name.type === 'minLength' && <span>minLength</span>}
            <input type="number" {...register('price')} />
            <button>Add</button>
        </form>
    </div>
  )
}

export default ProductAdd