import React from 'react'

type ContactProps = {}

const Contact = (props: ContactProps) => {
    return (
        <div>
            <div className="w-full flex items-center justify-center my-12">
                <div className="top-40 bg-white dark:bg-gray-800 shadow rounded py-12 lg:px-28 px-8">
                    <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700 dark:text-white">THÔNG TIN LIÊN HỆ</p>
                    <div className="md:flex items-center mt-12">
                        <div className="md:w-72 flex flex-col">
                            <label className="text-base font-semibold leading-none text-gray-800 dark:text-white">Họ và tên</label>
                            <input tabIndex={0} arial-label="Please input name" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input  name" />
                        </div>
                        <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                            <label className="text-base font-semibold leading-none text-gray-800 dark:text-white">Email</label>
                            <input tabIndex={0} arial-label="Please input email address" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input email address" />
                        </div>
                    </div>
                    <div className="md:flex items-center mt-8">
                        <div className="md:w-72 flex flex-col">
                            <label className="text-base font-semibold leading-none text-gray-800 dark:text-white">Số điện thoại</label>
                            <input tabIndex={0} role="input" arial-label="Please input phone number" type="number" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input company name" />
                        </div>
                        <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                            <label className="text-base font-semibold leading-none text-gray-800 dark:text-white">Địa chỉ</label>
                            <input tabIndex={0} arial-label="Please input country name" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input country name" />
                        </div>
                    </div>
                    <div>
                        <div className="w-full flex flex-col mt-8">
                            <label className="text-base font-semibold leading-none text-gray-800 dark:text-white">Nội dung</label>
                            <textarea tabIndex={0} aria-label="leave a message" role="textbox" className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none" defaultValue={""} />
                        </div>
                    </div>
                    <p className="text-xs leading-3 text-gray-600 dark:text-gray-200 mt-4">Để liên hệ và nhận các thông tin khuyến mãi sớm nhất, Chúng tôi sẽ liên lạc với bạn trong thời gian sớm nhất</p>
                    <div className="flex items-center justify-center w-full">
                        <button className="mt-9 text-base font-semibold leading-none text-white py-3 px-8 bg-amber-600 rounded hover:bg-amber-500 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none">GỬI LIÊN HỆ</button>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Contact