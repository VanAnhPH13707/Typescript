import { useForm, SubmitHandler } from "react-hook-form";
import { NavLink, useNavigate } from 'react-router-dom';
import { signup } from "../api/auth";

type FormValues = {
  name: string,
  email: string,
  password: string
};
const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    signup(data);
    navigate("/signin");
  }
  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            ĐĂNG KÝ TÀI KHOẢN
          </h2>
        </div>
        <form className="mt-8 space-y-6" id="formSignup" onSubmit={handleSubmit(onSubmit)}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="fullname">Họ Và Tên</label>
              <input type="text" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Nhập tên" {...register('name', { required: true, minLength: 5 })} />
              {errors.name && errors.name.type === "required" && <span>Required</span>}
              {errors.name && errors.name.type === "minLength" && <span>Min length</span>}
            </div>
            <div>
              <label htmlFor="email-address">Email</label>
              <input type="email" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Nhập email" {...register('email', { required: true })} />
            </div>
            <div>
              <label htmlFor="password" >Mật khẩu</label>
              <input type="password" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Mật khẩu" {...register('password')} />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <span className="text-slate-400">Bạn đã có tài khoản&gt; </span>
              <NavLink to="/signin" className="font-medium text-amber-500 hover:text-amber-400">
                Đăng nhập
              </NavLink>
            </div>
          </div>
          <div>
            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-amber-500 hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Đăng ký
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup