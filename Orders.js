import React from 'react'
import Navbar from './Navbar.js'

export default function Orders() {

  const myStyle =
 {
  margin:"100px",
  backgroundColor:"#90EE90",
  padding:"25px",
  color:"#000"
 

 };
 function fun()
 {
  alert("previous orders");
 }
  return (
    <div>
      <Navbar/>
    <button style={myStyle} onClick={fun}>Orders</button>
    </div>
  )
}
