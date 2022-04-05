import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CategoryType } from '../../types/category'
import Dashboard from '../Dashboard'

type ManagerCategoryProps = {
  data: CategoryType[],
  cateRemove: (id: number) => void
}

const ManagerCategory = (props: ManagerCategoryProps) => {
  return (

    <div>
      <div className="min-h-full">
        <Dashboard />
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div className="lg:flex lg:items-center lg:justify-between">
              <div className="flex-1 min-w-0">
                <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                  Quản lý danh mục
                </h2>
              </div>
              <div className="mt-5 flex lg:mt-0 lg:ml-4">
                <NavLink to="/admin/products/add" className="no-underline sm:ml-3">
                  <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    + Thêm mới
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </header>
      </div>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">STT</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ảnh</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tên sản phẩm</th>
                    <th scope="col" className="relative px-6 py-3">
                    </th>
                  </tr>
                </thead>

                <tbody className="bg-white divide-y divide-gray-200">
                  {props.data && props.data.map((item, index) => {
                    return <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                      <td className="px-6 py-4 whitespace-nowrap"></td>
                      <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <Link to={`/admin/category/${item.id}/edit`} className="no-underline focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-2.5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Edit</Link>
                        <button onClick={() => props.cateRemove(item._id) } className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-2 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Remove</button>
                      </td>
                    </tr>
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ManagerCategory