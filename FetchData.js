import {useState} from 'react';
import Display from './Display.js';
import Navbar from './Navbar.js'

const FetchData = () => {
  const [data, setData] = useState({data: []});
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState('');
  const myStyle={
    margin:"100px",
    backgroundColor:"#90EE90",
    padding:"25px",
    color:"#000"

}
 
  const handleClick = async () => {
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:4000/api/getinventory', {
        method: 'GET',
        
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();

      //console.log('result is: ', JSON.stringify(result, null, 4));

      console.log(result)
      setData(result);
      
    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  let inventories;
   
  if(data.length!=undefined)
   {inventories= data.map((group, i) => (
    <Display
        key = {i}
        item = {group.item}
        qty = {group.qty}
        price = {group.price}
        shop = {group.shopName}
        location = {group.location}
       
    />
  )
)};
  
  

  return (
    <div >
      {err && <h2>{err}</h2>}
  <Navbar/>
      <button onClick={handleClick} style={myStyle}>Items</button>

      {isLoading && <h2>Loading...</h2>}
     <div>{inventories}</div>
     

    </div>
  );
};

export default FetchData;