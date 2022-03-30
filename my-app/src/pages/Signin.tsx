import React from 'react'
import {SubmitHandler, useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import {UserType} from '../types/user';

type SigninProps = {}
type FormValues ={
    email:string,
    password: number,
}

const Signin = (props: SigninProps) => {
    const {register, handleSubmit, formState:{errors}} = useForm<FormValues>();
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<FormValues>=()=>{
      

    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <input type="email" placeholder='Nhập email' {...register('email',{required:true})} />
            <input type="password" placeholder='Nhập pass' {...register('password', {required:true})} />
            <button>Đăng nhập</button>
        </form>
    </div>
  )
}

export default Signin