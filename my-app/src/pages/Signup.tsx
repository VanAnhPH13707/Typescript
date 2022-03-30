import React from 'react'
import {SubmitHandler, useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import {UserType} from '../types/user';

type SignupProps = {
    data: UserType[]
}
type FormValues ={
    name:string,
    email:string,
    password: number,
}

const Signup = (props: SignupProps) => {
    const {register, handleSubmit, formState:{errors}} = useForm<FormValues>();
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<FormValues>=()=>{
      

    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register('name', {required: true})}/>
        <input type="text" {...register('email', {required: true})}/>
        <input type="number"{...register('password', {required: true})} />
        <button>Đăng ký</button>
        </form>
    </div>
  )
}

export default Signup