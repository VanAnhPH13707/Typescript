import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { read } from '../../api/product';
import { listCate } from '../../api/category';
import { ProductType } from '../../types/product';
import { CategoryType } from '../../types/category';
import Dashboard from '../Dashboard';

type ProductEditProps = {
    onUpdate: (product: ProductType) => void
}
type FormInputs = {
    name: string,
    price: number,
    image: string,
    desc:string,
    category: string
}

const ProductEdit = (props: ProductEditProps) => {
    const { id } = useParams();
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInputs>();
    const navigate = useNavigate();

    useEffect(() => {
        const getProduct = async () => {
            const { data } = await read(id);
            reset(data);
        }
        getProduct();
    }, []);
    const [cate, setCate] = useState<CategoryType[]>([])
    useEffect(() => {
        const getCate = async () => {
            const { data } = await listCate();
            setCate(data);
        }
        getCate()
    }, [])
    console.log(cate);

    const [image, setImage] = useState("")

    const onSubmit: SubmitHandler<FormInputs> = async data => {
        const CLOUDINARY_PRESET = "jkbdphzy";
        const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/ecommercer2021/image/upload";
        if (image) {
            const formData = new FormData();
            formData.append('file', image);
            formData.append('upload_preset', CLOUDINARY_PRESET);
            const img = await axios.post(CLOUDINARY_API_URL, formData, {
                headers: {
                    "Content-Type": "application/form-data"
                },
            });
            data.image = img.data.url;
        }
        props.onUpdate(data);
        navigate('/admin/products');
        window.location.reload();
    }

    return (
        <div className="min-h-full">
            <Dashboard />
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900">
                        Cập nhật sản phẩm
                    </h1>
                </div>
            </header>
            <main>
                <div className="max-w-5xl mx-auto py-6 sm:px-6 lg:px-8">
                    <form className="mt-8 space-y-6" id="formEditProduct" action="" onSubmit={handleSubmit(onSubmit)}>
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label className="font-bold">Danh mục</label>
                                <select {...register('category')} className="mt-3 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm">
                                    {/* <option>Chọn danh mục</option> */}
                                    {cate && cate.map((item) => {
                                        return <option value={item._id}>{item.name}</option>
                                    })}
                                </select>
                            </div>
                            <div>
                                <label className="font-bold">Tên sản phẩm</label>
                                <input type="text" className="mt-3 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder='Tên sản phẩm' {...register('name')} />
                            </div>
                            <div>
                                <label className="font-bold mt-3">Giá</label>
                                <input type="text" className="mt-3 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder='Giá sản phẩm' {...register('price')} />
                            </div>
                            <div>
                                <label className="font-bold">Mô tả</label>
                                <textarea className="mt-5 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" {...register('desc')} />
                            </div>
                            <div>
                                <img className="mt-5" src="" />
                                <input onChange={(e) => { setImage(e.target.files[0]) }} type="file" className="mt-3 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder='Ảnh' />
                            </div>

                            <div className="max-w-5xl mx-auto flex gap-x-1 grid grid-cols-2  ">
                                <div>
                                    <NavLink to="/admin/products" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Hủy</NavLink>
                                </div>
                                <div>
                                    <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Cập nhật
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </main>

        </div>
    )
}

export default ProductEdit