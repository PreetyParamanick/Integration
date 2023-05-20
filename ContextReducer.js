import React, { createContext,useContext,useReducer } from 'react'


const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state,action)=>{
switch(action.type){
    case "ADD":
        return [...state,{item:action.item,qty:action.quty,price:action.price,size:action.size}]
        default:
            console.log("Error in Reducer");
}
}
export const  CartProvider=({children})=> {

    const[state,dispatch]=useReducer(reducer,[])
  return (
    <CartDispatchContext.Provider value={dispatch}>
        <CartStateContext.Provider value={state}>
             {children}
            </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  )
}


export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);