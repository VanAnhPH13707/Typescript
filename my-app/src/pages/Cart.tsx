import React, { useEffect, useState } from 'react'

type CartProps = {}

const Cart = (props: CartProps) => {

    return (
        <div>
            <div className="py-12">
                <div className="hidden sm:flex flex-col justify-start items-start">
                    <div className="pl-4 lg:px-10 2xl:px-20 flex flex-row justify-center items-end space-x-4">
                        <h1 className="text-4xl font-semibold leading-9 text-gray-800  dark:text-white">Giỏ hàng</h1>
                    </div>
                    <table className="w-full mt-16 whitespace-nowrap">
                        <thead aria-label="table heading" className="w-full h-16 text-left py-6 bg-gray-50 border-gray-200 dark:bg-gray-800 border-b">
                            <tr>
                                <th className="text-base font-medium leading-4 text-gray-600 dark:text-white 2xl:pl-20 pl-4 lg:pl-10">Ảnh</th>
                                <th className="text-base font-medium leading-4 text-gray-600 dark:text-white pl-6 lg:pl-20 2xl:pl-52">Tên sản phẩm</th>
                                <th className="text-base font-medium leading-4 text-gray-600 dark:text-white pl-6 lg:pl-20 2xl:pl-52">Giá sản phẩm</th>
                                <th className="text-base font-medium leading-4 text-gray-600 dark:text-white pl-6 lg:pl-20 2xl:pl-52">Số lượng</th>
                                <th className="text-base font-medium leading-4 text-gray-600 dark:text-white pl-6 lg:pl-20 2xl:pl-52" />
                                <th className="text-base font-medium leading-4 text-gray-600 dark:text-white pl-6 lg:pl-20 2xl:pl-52">Tổng</th>
                                <th className="text-base font-medium leading-4 text-gray-600 dark:text-white 2xl:pl-28 2xl:pr-20 pr-4 lg:pr-10" />
                            </tr>
                        </thead>
                        <tbody className="w-full text-left">

                            <tr className="border-gray-200 border-b">
                                <th><img className="my-10 pl-4 lg:pl-10 2xl:pl-20 h-20 w-30" src="" alt="shoe" /></th>
                                <th className="mt-10 text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">
                                    <p className="text-base leading-4 text-gray-800 dark:text-white"></p>
                                </th>
                                <th className="my-10 pl-6 lg:pl-20 2xl:pl-52">
                                    <p className="dark:text-white"></p>
                                </th>
                                <th className="my-10 pl-6 lg:pl-20 2xl:pl-52">
                                    <p className="dark:text-white"></p>
                                </th>
                                <th className="my-10 text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">
                                    <button data-id="" className="btn btn-increase">+</button>
                                    <button data-id="" className="btn btn-decrease">-</button>
                                </th>
                                <th className="my-10 pl-6 lg:pl-20 2xl:pl-52">
                                    <p className="dark:text-white"></p>
                                </th>
                                <th className="my-10 pl-4 lg:pl-12 2xl:pl-28 pr-4 2xl:pr-20">
                                    <button data-id="" className="btn btn-remove focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-800 text-base leading-none text-red-600 hover:text-red-800"><p>Remove Item</p></button>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Cart