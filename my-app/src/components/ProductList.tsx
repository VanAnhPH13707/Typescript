import React from 'react'
import { ProductType } from '../types/product'
type ProductListProps = {
    data: ProductType[]
}

const ProductList = (props: ProductListProps) => {
    return (
        <div className="xl:mx-auto xl:container lg:py-16 lg:px-40 xl:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-4xl font-semibold leading-9 text-amber-500 dark:text-gray-50">DEAL HÔM NAY</h1>
                <p className="text-base leading-6 text-center text-gray-600 dark:text-white sm:w-96 md:w-9/12 lg:w-5/12 mt-4">Sản phẩm thời trang cực hot</p>
            </div>
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12 mt-10">
                {props.data && props.data.map((item, index) => {
                    return <div key={index}>
                        <div className="relative">
                            <div className="absolute top-0 left-0 py-2 px-4 bg-white bg-opacity-50"><p className="text-xs leading-3 text-gray-800">New</p></div>
                            <div className="relative group">
                                <div className="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full" />
                                <img className="w-full" src={item.image} />
                                <div className="absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                                    <button className="dark:bg-gray-800 dark:text-gray-300 font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">Add to bag</button>
                                    <button className="bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">Quick View</button>
                                </div>
                            </div>
                            <p className="font-normal dark:text-white text-xl leading-5 text-gray-800 md:mt-6 mt-4">{item.name}</p>
                            <p className="font-semibold dark:text-gray-300 text-xl leading-5 text-gray-800 mt-4">{item.price}</p>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default ProductList