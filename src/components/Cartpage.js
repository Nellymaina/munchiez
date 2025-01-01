import {React, useState} from 'react';
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {REMOVEFROMCART} from './removeaction'
import {ADDTOCART} from './cart-action'
import {DELETEALL} from './deleteall-action'
import {Link} from 'react-router-dom'

export default function Cartpage(){
const totalItems=useSelector(state=>state.totalItems)
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
 const cart=prod.map(item=>{
            return(
   
< div className="cart-div">
<div className='cart-image'>
<img src={item.image} alt="" className="cartItems" />
<p className="cart-name">{item.FullName}</p>
</div>
<div className='cart-des'>

<ul className='cart-ul'>price<li className="check-span">KSH {item.price}.00</li></ul>
   <ul className='cart-ul'>Quantity<div className='cart-quantity'><li className="remove" onClick={()=>handleCartRemove(item)}>-</li><li className="cart-text">{item.quantity}</li><li className="add" onClick={()=>handleCart(item)}>+</li></div></ul>
   <ul className='cart-ul'>Total<li className="check-span">KSH {item.price*item.quantity}.00</li></ul>
</div>
</div>
   )})

    return(


        <div className='cart-page'>
            <h2 className='hero-title'>What's in Your Cart?</h2>

           {cart}

   <div className="cart-sum">SUBTOTAL KSH {sum}.00</div>
   <div className='checkout-div'>
        <Link to={'/category/cart/checkout'}>
            <button className="checkout" >Checkout</button>
        </Link>
</div>
        </div>
    )
}

    
