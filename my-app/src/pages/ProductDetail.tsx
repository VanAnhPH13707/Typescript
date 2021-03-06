import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { read } from '../api/product';
import { ProductType } from '../types/product';
import toastr from 'toastr';
import "toastr/build/toastr.min.css";

const ProductDetail = () => {
  const { id } = useParams();
  const [products, setProducts] = useState<ProductType[]>([]);
  useEffect(() => {
    const getProduct = async () => {
      const { data } = await read(id);
      setProducts(data);
    }
    getProduct();
  }, []);
  
  return (
    <div>
      <div className="max-w-5xl mx-auto">
        <h2 className="font-semibold text-2xl uppercase my-4">Chi tiết sản phẩm</h2>
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
          <div className="flex justify-center items-center lg:flex-row flex-col gap-8">
            <div className="w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center">
              <h2 className="font-semibold lg:text-2xl text-xl lg:leading-9 leading-7 text-gray-800 dark:text-white mt-2">{products.name}</h2>
              <p className="font-normal text-base leading-6 text-gray-600  mt-7">{products.desc}</p>
              <p className="font-semibold lg:text-xl text-xl lg:leading-6 leading-5 mt-2 text-orange-700 dark:text-white py-4">{products.price}đ</p>
              <span>Số lượng</span><br />
              <input type="number" id="inputValue" className="border border-black" />
              <button className="focus:outline-none focus:ring-2 hover:bg-black focus:ring-offset-2 focus:ring-gray-800 font-medium text-base leading-4 text-white bg-gray-800 w-full py-2 lg:mt-12 mt-6 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100" >Add to cart</button>
            </div>
            <div className="w-full sm:w-96 md:w-8/12 lg:w-6/12 flex lg:flex-row flex-col lg:gap-8 sm:gap-6 gap-4">
              <div className="w-full lg:w-8/12 bg-gray-100 flex justify-center items-center">
                <img src={products.image} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ProductDetail