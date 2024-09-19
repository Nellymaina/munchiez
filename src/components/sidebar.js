import React from 'react';
import {Outlet, NavLink} from 'react-router-dom'


export default function Pages(){

return(
  <div>
  <nav>
    <ul>
      <li><NavLink className={({isActive})=>(isActive? "link-active": "link")} to="/">Home</NavLink></li>
      <li><NavLink className={({isActive})=>(isActive? "link-active": "link")} to="category">Category</NavLink></li>
      <li><NavLink className={({isActive})=>(isActive? "link-active": "link")} to="/category/cart/checkout">Cart and Checkout</NavLink></li>
     <li><NavLink className={({isActive})=>(isActive? "link-active": "link")} to="payment and shipping">Payment and Shipping</NavLink></li>
      <li><NavLink className={({isActive})=>(isActive? "link-active": "link")} to="about">About</NavLink></li>
    </ul>

  </nav>
  <Outlet />
  </div>
)
}




