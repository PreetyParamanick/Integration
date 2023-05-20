
import Home from './Home.js'
import { BrowserRouter as Router, Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import FetchData from './FetchData';
import Orders from './Orders';
import Cart from './Cart';
import { CartProvider } from './ContextReducer.js';

const router = createBrowserRouter([
  {path:'/',element:<Home/>},
  {path:'/Items',element:<FetchData/>},
  {path:'/Orders',element:<Orders/>},
  {path:'/Cart',element:<Cart/>},
])
function App() {
 
  return (
    <CartProvider>
    <div className="App">
      <RouterProvider router={router}/>
      
     
      
      
    </div>
    </CartProvider>
  );
}

export default App;
