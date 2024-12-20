import React from "react";
import {Link} from 'react-router-dom'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import  {useSelector} from 'react-redux'
export default function Cart(){
const totalItems=useSelector(state=>state.totalItems)

    return(
        <div className="cart-fill">
           <Link to ={"/category/cart"}>
            <ShoppingBasketIcon style={{fill: "lightGreen", fontSize:"30px"}}/>
            <span className="cart-badge" >{totalItems}</span>
            </Link>
            
        </div>
    )
}