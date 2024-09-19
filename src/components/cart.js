import React from "react";
import {Link} from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import  {useSelector} from 'react-redux'
export default function Cart(){
const totalItems=useSelector(state=>state.totalItems)

    return(
        <div className="cart-fill">
           <Link to ={"/category/cart"}>
            <ShoppingCartIcon style={{fill: "darkgreen"}}/>
            <span className="cart-badge" >{totalItems}</span>
            </Link>
            
        </div>
    )
}