import React from "react";
import { NavLink } from "react-router-dom";

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
        <div className="w-full flex bg-zinc-900 justify-around absolute opacity-90 h-14">
          <ul className="flex pl-20 py-3">
            <li><a href="/" className="no-underline px-4 text-white hover:text-amber-500">Trang chủ</a></li>
            <li><a href="/product" className="no-underline px-4 text-white hover:text-amber-500">Sản phẩm</a></li>
            <li><a href="/about" className="no-underline px-4 text-white hover:text-amber-500">Tin tức</a></li>
            <li><a href="/admin" className="no-underline px-4 text-white hover:text-amber-500">dashboard</a></li>
          </ul>
          <div className="flex justify-between">
            <div className="pl-16 py-2">
              <div className="hidden relative mr-3 md:mr-0 md:block">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
                </div>
                <input type="text" id="email-adress-icon" className="block py-1.5 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
              </div>
              <button data-collapse-toggle="mobile-menu-3" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-3" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
                <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
              </button>
            </div>

            <div className="flex justify-center md:block">
              <NavLink className="relative text-amber-500 hover:text-amber-500" to="/cart">
                <svg className="h-8 w-8 mt-3 ml-2 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="absolute top-1 left-2 rounded-full bg-indigo-500 text-white p-1 text-xs" />
              </NavLink>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full">
            <img className="object-cover w-full h-96" src="https://bizweb.dktcdn.net/thumb/grande/100/419/519/themes/844270/assets/slider_1.jpg?1640331271710" />
          </div>
        </div>

      </div>
    </div>


  );
};

export default Header;