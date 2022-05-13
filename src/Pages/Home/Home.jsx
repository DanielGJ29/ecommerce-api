import { useState,useContext, useReducer } from "react";

//Component
import Products from '../Product/Product';

//Context
// import CartContext from '../../Context/CartContext';

const initialState = {
    item:[
        {
        id:1,
        name:"item 1",
        price:"250"
    },
    {
        id:2,
        name:"item 2",
        price:"350"
    },
    {
        id:3,
        name:"item 3",
        price: "400"
    }
],
    cart:[],
    total:0
};

const reducer = (state, action)=>{
    switch (action.type) {
        case "add":
            return { 
                ...state,
                cart:[...state.cart, action.payload],
                total:action.payload.price
             };
        case "subs":
           return{
               counter: state.counter - 1
           };
        default:
            return state;
    }
}

const Home =()=>{
    // const {add,subtract,counter} = useContext(Cart);
    // const [counter, setcounter] = useState(0);
    const [state, dispatch] = useReducer(reducer, initialState);

    const add =(item)=>{
       dispatch({type:"add", payload:item});
    }

    const subtract =()=>{
        dispatch({type:"subs"});
    }

    return(
        <>
        <Products/>
        {/* {state?.item?.map(({id,name,price})=>(
            <div key={id}>
                <p>{name}</p>
                <p>{price}</p>
                <button onClick={add} className ="bg-slate-600 p-1" >add</button>
            </div>
        ))
        } */}

        {/* <button onClick={add} className ="bg-slate-600 p-1" >Add</button>
        <button onClick={subtract}>subtract</button> */}

        
        </>
    );
}

export default Home;