import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ShowInfo from './components/ShowInfo'
import Item from './components/item'

function App() {
  const [count, setCount] = useState(0)
  const products =[
    {id:1, name: "Product A"},
    {id:2, name: "Product B"},
    {id:3, name: "Product C"}
  ]

  return (
    <div className="App">
      Count: {count}<button onClick={() => setCount(count +1)}>Click</button>
      {products.map((item, index) => <Item key={index} data={item}/>)}
      <ShowInfo name="Anh" age={20}/>
    </div>
  )
}

export default App
