import React, { useState } from 'react';
import logo from './Rice1.jpg';
import { useDispatchCart,useCart } from './ContextReducer';
import e from 'cors'; 

export default function Display(props) {
    const item = props.item;
    const qty = props.qty;
    const price = props.price;
    const shopName = props.shop;
    const [quty, setQty] =useState(1);
    const [size, setSize]= useState("100gms");
    let dispatch= useDispatchCart();
    let data=useCart();
    const handleAddToCart =async() =>{
      await dispatch({type:"ADD",item:item,quty:quty,price:price,size:size})
      //console.log(data)
    }
    const mystyle = {
        
      display: "grid",
      backgroundColor: "#b2b3b1",
      padding: "10px",
      margin:"70px",
      float:"left",
      flex:"1",
      gridgap: "10px",
      };

 const st={
backgroundColor:"#fff",
color:"#000",
margin:"5px"
 };

 let ind = -1;
 let si=-1,se=-1;

 
 for(let i=0;i<size.length;i++)
 {
     if(size[i]=='g')
     {
      ind = i;
      break;
     }
 } 

 for(let i=0;i<price.length;i++)
 {
     if((price[i]=='1'||price[i]=='2'||price[i]=='3'||price[i]=='4'||price[i]=='5'||price[i]=='6'||price[i]=='7'||price[i]=='8'||price[i]=='9') && si==-1)
     {
      si = i;
  
     }
      if (price[i]=='1'||price[i]=='2'||price[i]=='3'||price[i]=='4'||price[i]=='5'||price[i]=='6'||price[i]=='7'||price[i]=='8'||price[i]=='9'||price[i]=='0')
     {
      se = i;
     }
 } 



 let s = size.substring(0,ind);
 let s1 = price.substring(si,se+1)
 let finalPrice = (parseInt(s) / 1000) * (parseInt(s1)) *quty;
 
 
 console.log(parseInt(s1));
  return (
    <span style={mystyle} >
      <div class="card" >
  
  <div class="card-body">
   <img src={logo} alt="Logo" />
    <h3 class="card-title" style={{backgroundColor:"#fff", color:"#000"}}>{item}</h3>
    
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item" style={{backgroundColor:""}}><h5>Item Quantity: </h5><div >{qty}</div></li>
    <li class="list-group-item"><h5>Item Price: </h5><div >{price}</div></li>
    <li class="list-group-item"><h5>Shop Name: </h5><div >{shopName}</div></li>
    <li class="list-group-item"><label><h5>Number of Packets : </h5></label>
    <select onChange={(e)=>setQty(e.target.value)}>
  <option >1</option>
  <option >2</option>
  <option >3</option>
  <option >4</option>
  <option >5</option>
 
</select>
    </li>


    <li class="list-group-item"><label ><h5>Choose a quantity: </h5></label>

<select onChange={(e)=>setSize(e.target.value)}>
  <option >100 gms</option>
  <option >500 gms</option>
  <option >1000 gms</option>
 
</select></li>
<li class="list-group-item"><h5>Total Price :   Rs {finalPrice}/-</h5></li>
<li class="list-group-item" style={st}><button onClick={handleAddToCart}>Add to Cart</button></li>
</ul>
</div>  
</span>
)
}