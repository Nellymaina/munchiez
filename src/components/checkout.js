import {useSelector} from 'react-redux';
import {React, useState} from 'react';
 
export default function CheckoutPage(){
    const cartItems=useSelector(state=>state.items)
    const [checktotal, setChecktotal]=useState(cartItems)

    function checksum(){
    return checktotal.reduce((total, item)=>{
    return total+item.price*item.quantity}, 0)
    }
const sum=checksum()
    
return(
<div>
    {cartItems.map(item=>(
        <div className="checkout-page">
            <p>{item.FullName}</p>
            <p className="check-span">({item.quantity})</p>
<p>Total:{item.price*item.quantity}</p>
        </div>
    ))}
    {sum}
</div>
)
}