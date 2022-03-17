import { useEffect, useState } from 'react'
import axios from 'axios'
import logo from './logo.svg'
import './App.css'
import ShowInfo from './components/ShowInfo'
import type { ProductType } from './types/product';
import { list, remove } from './api/product';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import Dashboard from './pages/Dashboard'
import ManagerProduct from './pages/ManagerProduct'
import WebsiteLayout from './pages/layouts/WebsiteLayout'
import AdminLayout from './pages/layouts/AdminLayout'



function App() {

  const [products, setProducts] = useState<ProductType[]>([]);
  // const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const getProducts = async () =>{
      const {data} = await list();
      setProducts(data);
    }
    getProducts();

  }, [])
  
  const removeItem = async (id: number) => {
    // xoa tren API
    const { data } = await remove(id);
    // reRender
    data && setProducts(products.filter(item => item.id !== data.id));
  }
  return (
    <div className="App">
        {/* <hr />
        <table>
        <thead>
          <th>#</th>
          <th>Name</th>
          <th></th>
        </thead>
        <tbody>
          {products.map((item, index) => {
            return <tr>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>
                      <button onClick={() => removeItem(item.id)}>Remove</button>
                    </td>
                  </tr>
          })}
          
        </tbody>
      </table> */}
      <header>
        <ul>
          <li><NavLink to ="/">Home page</NavLink></li>
          <li><NavLink to ="/products">Product page</NavLink></li>
          <li><NavLink to ="/admin/dashboard">Admin Dashboard</NavLink></li>
        </ul>
      </header>
      <main>
        <Routes>
          {/* <Route path="/" element={<Home />}/>
          <Route path="products" element={<Product />}/>
          <Route path="about" element={<Dashboard />}/>
          <Route path="about" element={<ManagerProduct />}/> */}

        <Route path="/" element={<WebsiteLayout />}>
            <Route index element={<Home />}/>
            <Route path="products" element={<Product />}/>

        </Route>
        <Route path="admin" element={<AdminLayout />}>
            <Route index element={<Navigate to="dashboard"/>}/>
            <Route path="dashboard" element={<Dashboard />}/>
            <Route path="products" element={<ManagerProduct />}/>

        </Route>

        </Routes>
      </main>
    </div>
  )
}

export default App