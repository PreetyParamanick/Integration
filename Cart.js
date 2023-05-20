import React from 'react'
import Navbar from './Navbar';

export default function Cart() {
  const myStyle =
  {
    margin:"100px",
    backgroundColor:"#90EE90",
    padding:"25px",
    color:"#000"
 
  };

  return (
    <div>
      <Navbar/>
    <button style={myStyle}>Cart</button>
    </div>
  )
}
