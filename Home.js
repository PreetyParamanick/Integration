import React from 'react';
import Navbar from './Navbar';

export default function () {
    const myStyle={
        margin:"100px",
        backgroundColor:"#90EE90",
        padding:"25px",
        color:"#000"

    }
   
  return (
    <div >
        <Navbar/>
        <button style ={myStyle}><a href="/Items"><h5>Go to Inventory</h5></a></button> 
        <button style={myStyle}><a href="/Orders"><h5>Go To Your Orders</h5></a></button>
        <button style={myStyle}><a href="/Cart"><h5>Go To Your Cart</h5></a></button>
    </div>
  )
}
