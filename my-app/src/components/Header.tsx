import React from "react";
import { NavLink } from "react-router-dom";
import Menu from "./Menu";
import Search from "./Search";

const Header = () => {
  return (
    <div>
      <div className=" bg-amber-400 ">
        <nav className="2xl:container 2xl:mx-auto sm:py-6 sm:px-7 py-3 px-4">
          <div className="flex justify-between ">
            <div className="hidden sm:flex flex-row items-center space-x-6">
              <img className="dark:bg-white  p-1 rounded  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-3-svg1.svg" alt="twitter" />
              <img className="dark:bg-white  p-1 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-3-svg2.svg" alt="facebook" />
              <img className="dark:bg-white  p-1 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-3-svg3.svg" alt="linkdin" />
              <img className="dark:bg-white  p-1 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-3-svg4.svg" alt="instagram" />
            </div>
            <div className=" flex space-x-3 items-center">
              <img className=" font-normal text-2xl leading-6 text-gray-800 dark:text-white " src="https://bizweb.dktcdn.net/100/419/519/themes/844270/assets/logo.png?1640331271710" />
            </div>
            <div className="hidden sm:flex flex-row space-x-4">
              <NavLink to="/signup" className="no-underline"><button className="rounded-md flex space-x-2 w-24 h-10 font-normal text-sm leading-3 text-amber-600 bg-white border border-amber-600 focus:outline-none focus:bg-amber-600 hover:bg-gray-200 duration-150 justify-center items-center">Đăng ký</button></NavLink>
              <NavLink to="/signin" className="no-underline"><button className="rounded-md flex space-x-2 w-24 h-10 font-normal text-sm leading-3 text-white bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-gray-200 hover:bg-neutral-800 duration-150 justify-center items-center hover:text-amber-400">Đăng nhập</button></NavLink>
            </div>
          </div>
        </nav>
      </div>

      <div className=" ">
        <div className="w-full flex bg-zinc-900 justify-center absolute opacity-90 h-14">
          <ul className="flex pl-20 py-4 ">
            <li><NavLink to="/" className="px-4 text-white hover:text-amber-500">Trang chủ</NavLink></li>
            <li><NavLink to="/products" className="px-4 text-white hover:text-amber-500">Sản phẩm</NavLink></li>
            <li><NavLink to="/about" className="px-4 text-white hover:text-amber-500">Tin tức</NavLink></li>
            <li><NavLink to="/admin/dashboard" className="px-4 text-white hover:text-amber-500">dashboard</NavLink></li>
          </ul>
          <div className="hidden sm:flex flex-row py-4 pl-12 pr-24">
            <input type="text" className="mr-1 p-0.25 h-6 border border-amber-600" />
            <input type="submit" defaultValue="Tìm kiếm" className="rounded-md flex space-x-2 w-20 h-6 font-normal text-sm leading-3 text-amber-600 bg-white border border-amber-600 focus:outline-none focus:bg-amber-600 hover:bg-gray-200 duration-150 justify-center items-center" />
          </div>
          <div className="flex justify-center md:block">
            <a className="relative text-gray-700 hover:text-amber-500" href="/cart">
              <svg className="h-8 w-8 mt-2 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="absolute top-0 left-0 rounded-full bg-indigo-500 text-white p-1 text-xs" />
            </a>
          </div>
        </div>
        <div>
          <div className="w-full">
            <img className="object-cover w-full h-96" src="https://bizweb.dktcdn.net/thumb/grande/100/419/519/themes/844270/assets/slider_1.jpg?1640331271710" alt />
          </div>;
        </div>

      </div>
    </div>


  );
};

export default Header;