import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

const myName = "Nguyễn Vân Anh";
const myAge = 20;
const myStatus = true;
const person = {
  name: "Vân Anh",
  age: 20
}
const showInfo = (props) =>{
  console.log(props);
  return <p>Thông tin user {props.name}</p>
}

ReactDOM.render(
  <App/>,
  
  document.getElementById('root')
)
