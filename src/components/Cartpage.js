import {React, useState} from 'react';
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {REMOVEFROMCART} from './removeaction'
import {ADDTOCART} from './cart-action'
import {DELETEALL} from './deleteall-action'
import {Link} from 'react-router-dom'

export default function Cartpage(){
const prod=useSelector(state=>state.items)
const dispatch=useDispatch();

function handleCart(item){
dispatch({type:ADDTOCART, payload:item})
    };
     
function handleCartRemove(item){
dispatch({type:REMOVEFROMCART, payload:item})
     
     };
     const [checktotal, setChecktotal]=useState(prod)

    function checksum(){
    return checktotal.reduce((total, item)=>{
    return total+item.price*item.quantity}, 0)
    }
const sum=checksum()

     function handleDeleteAll(item){
        dispatch({type:DELETEALL, payload:item})
             
             }
 

    return(


        <div className='cart-page'>
<p className="cart-sum">GrandTotal:KSH {sum}.00</p>
            {prod.map(item=>{
   return(
    

< div className="cartItems">
<button className="remove" onClick={()=>handleCartRemove(item)}>-</button>
<img src={item.image} alt="" className="cartItems" />
<button className="add" onClick={()=>handleCart(item)}>+</button>
<p className="cart-name">{item.FullName} <span className="cart-text">[{item.quantity}]</span> </p>
<p className="check-span">KSH {item.price*item.quantity}.00</p>
</div>
   )})}
   <button className="clear-cart" onClick={()=>handleDeleteAll(prod)}>clear cart</button>
        <Link to={'/category/cart/checkout'}>
            <button className="checkout" >Checkout</button>
        </Link>
        </div>
    )
}

    
