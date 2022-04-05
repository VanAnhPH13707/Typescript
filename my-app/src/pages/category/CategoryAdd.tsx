import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';
import { CategoryType } from '../../types/category';
import Dashboard from '../Dashboard';

type CategoryAddProps = {
    cateAdd: (category: CategoryType) => void

}
type FormValues = {
    name: string
};

const CategoryAdd = (props: CategoryAddProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>()
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<FormValues> = (data) => {
        props.cateAdd(data);
        navigate('/admin/category');

    }
    return (
        <div>
            <div className="min-h-full">
                <Dashboard />
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold text-gray-900">
                            Thêm mới danh mục
                        </h1>
                    </div>
                </header>
                <main>
                    <div className="max-w-5xl mx-auto py-6 sm:px-6 lg:px-8">
                        <form className="mt-8 space-y-6" id="formEditProduct" action="" onSubmit={handleSubmit(onSubmit)}>
                            <input type="hidden" name="remember" defaultValue="true" />
                            <div className="rounded-md shadow-sm -space-y-px">
                                <div>
                                    <label className="font-bold">Tên danh mục</label>
                                    <input type="text" className="mt-3 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder='Tên danh mục' {...register('name')} />
                                </div>
                            </div>
                            <div className="max-w-5xl mx-auto flex gap-x-1 grid grid-cols-2  ">
                                <div>
                                    <NavLink to="/admin/category" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Hủy</NavLink>
                                </div>
                                <div>
                                    <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Thêm mới
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </main>

            </div>
        </div>
    )
}

export default CategoryAdd