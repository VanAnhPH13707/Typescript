import React from 'react'
import { ProductType } from '../types/product'

type ProductProps = {
  data: ProductType[]
}

const Product = (props: ProductProps) => {
  return (
    <div>
      <div className="2xl:container 2xl:mx-auto">
        <div className="bg-gray-50 dark:bg-gray-900 text-center lg:py-10 md:py-8 py-6">
          <p className="w-10/12 mx-auto md:w-full font-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 dark:text-white leading-9 text-center text-gray-800">Summer Collection Vol-1</p>
        </div>
        <div className="xl:container xl:mx-auto py-6 lg:px-20 md:px-6 px-4">
          <div className="flex justify-between items-center">
            <div className="flex space-x-3 justify-center items-center text-gray-800 dark:text-white">
              <img className="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/product-grid-5-svg1.svg" alt="toggler" />
              <img className="hidden dark:block" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/product-grid-5-svg1dark.svg" alt="toggler" />
              <p className="font-normal text-base leading-4 text-gray-800 dark:text-white">Filter</p>
            </div>

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
                            <p className="font-semibold dark:text-gray-300 text-xl leading-5 text-gray-800 mt-4">{item.price}đ</p>
                        </div>
                    </div>
                })}
            </div>
          <div className="flex justify-center items-center">
            <button className="hover:bg-gray-700 dark:text-gray-300 focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-gray-800 py-2 md:px-16 md:w-auto w-full lg:mt-28 md:mt-12 mt-10 text-white font-medium text-base leading-4">Xem thêm</button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Product