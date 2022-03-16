import { useEffect, useState } from 'react'
import axios from 'axios'
import logo from './logo.svg'
import './App.css'
import ShowInfo from './components/ShowInfo'
import type { ProductType } from './types/product';
import { list, remove } from './api/product';



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
        <hr />
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
      </table>
    </div>
  )
}

export default App