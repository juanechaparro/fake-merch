import { useState } from "react";
import initialState from '../initialState';
const useInitialState =()=>{
const [state, setState] = useState(initialState);
const addToCart = payLoad => {
    setState({
        ...state,
        cart:[...state.cart, payLoad]
    });
}


const removeFromCart= payLoad =>{
    setState({
        ...state,
        cart: state.cart.filter(items => items.id != payLoad.id ) 
    });
}
const addToBuyer = payLoad =>{
    setState({
        ...state,
        buyer:[...state.buyer, payLoad]
    })

}
const addNewOrder = payLoad =>{
    setState({
        ...state,
        orders:[...state.orders, payLoad]
    })
}
return {
    addToCart,
    removeFromCart,
    addToBuyer,
    addNewOrder,
    state,

};
}
export default useInitialState;