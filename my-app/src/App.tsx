import { useEffect, useState } from 'react'
import axios from 'axios';
import logo from './logo.svg'
import './App.css'
import ShowInfo from './components/ShowInfo'
import type { ProductType } from './types/product';
import { add, list, remove, update } from './api/product';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Dashboard from './pages/Dashboard';
import ManagerProduct from './pages/product/ManagerProduct';
import WebsiteLayout from './pages/layouts/WebsiteLayout';
import AdminLayout from './pages/layouts/AdminLayout';

import "bootstrap/dist/css/bootstrap.min.css"
<<<<<<< HEAD
import ProductAdd from './pages/ProductAdd';
import ProductEdit from './pages/ProductEdit';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
=======
import ProductAdd from './pages/product/ProductAdd';
import ProductEdit from './pages/product/ProductEdit';
import PrivateRouter from './components/PrivateRouter';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import ProductList from './components/ProductList';
import ManagerCategory from './pages/category/ManagerCategory';
import { CategoryType } from './types/category';
import CategoryAdd from './pages/category/CategoryAdd';
import CategoryEdit from './pages/category/CategoryEdit';
import { addCate, listCate, removeCate, updateCate } from './api/category';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Contact from './pages/Contact';
>>>>>>> Assignment
function App() {
  const [products, setProducts] = useState<ProductType[]>([]); // 1
  // const [count, setCount] = useState<number>(0);
  const [category, setCategory]= useState<CategoryType[]>([]);
  useEffect(() => { // 3
    const getProducts = async () => {
      const { data } = await list();
      setProducts(data);
    }
    getProducts();
  }, [])
  useEffect(()=>{
    const getCategory = async () =>{
      const {data} = await listCate();
      setCategory(data);
    }
    getCategory();
  }, [])

  const onHandleRemove = async (_id: string) => {
    await remove(_id);
    setProducts(products.filter(item => item._id !== _id));
  }
  const onHandleRemoveCate = async (_id: string) => {
    await removeCate(_id);
    setCategory(category.filter(item => item._id !== _id));
  }

  const onHandleAdd = async (product: ProductType) => {
    const { data } = await add(product);
    setProducts([...products, data])
  }
  const onHandleAddCate = async (category: CategoryType) => {
    const { data } = await addCate(category);
    setCategory([...category, data])
  }
  const onHandleUpdate = async (product: ProductType) => {
    console.log(product);
    const { data } = await update(product)
    setProducts(products.map(item => item._id == data.id ? data : item));
  }
  const onHandleUpdateCate = async (category: CategoryType) => {
    console.log(category);
    const { data } = await updateCate(category)
    setCategory(category.map(item => item._id == data.id ? data : item));
  }
  return (
    <Routes>
      <Route path="/" element={<WebsiteLayout />}>
<<<<<<< HEAD
          <Route index element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="signup" element={<Signup />}/>
          <Route path="signin" element={<Signin />}/>
=======
        <Route index element={<Home data={products}/>} />
        <Route path="product" element={<Product data={products}  />} />
        <Route path="/product/:id" element={<ProductDetail data={products} />} />
        <Route path="about" element={<About  />} />
        <Route path="contact" element={<Contact  />} />
        <Route path="signup" element={<Signup />} />
        <Route path="signin" element={<Signin />} />
>>>>>>> Assignment
      </Route>
      <Route path="admin" element={<PrivateRouter><AdminLayout /></PrivateRouter>}>
        <Route index element={<Navigate to="dashboard" />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="products">
          <Route index element={<ManagerProduct data={products} onRemove={onHandleRemove} />} />
          <Route path="add" element={<ProductAdd onAdd={onHandleAdd} />} />
          <Route path=":id/edit" element={<ProductEdit onUpdate={onHandleUpdate} />} />
        </Route>
        <Route path="category">
          <Route index element={<ManagerCategory data={category} cateRemove={onHandleRemoveCate} />} />
          <Route path="add" element={<CategoryAdd cateAdd={onHandleAddCate} />} />
          <Route path=":id/edit" element={<CategoryEdit cateUpdate={onHandleUpdateCate} />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App