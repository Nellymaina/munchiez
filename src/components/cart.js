import React from "react";
import {Link} from 'react-router-dom'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import  {useSelector} from 'react-redux'
export default function Cart(){
const totalItems=useSelector(state=>state.totalItems)

    return(
        <div className="cart-fill">
           <Link to ={"/cart"}>
            <ShoppingBagIcon style={{fill: "aqua", fontSize:"30px"}}/>
            <span className="cart-badge" >{totalItems}</span>
            </Link>
            
        </div>
    )
}