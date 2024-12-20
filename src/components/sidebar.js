import {React, useState} from 'react';
import {Outlet, NavLink} from 'react-router-dom'


export default function Pages(){
 const [sidebar, setsidebar]=useState(false);

function toggle(){
   setsidebar(prevState=>!prevState)
}

return(
  <div>
  {sidebar===false &&
  <nav>
  
   <ul className='menu'>
      <li><NavLink className={({isActive})=>(isActive? "link-active": "link")} onClick={toggle} to="/">Home</NavLink></li>
      <li><NavLink className={({isActive})=>(isActive? "link-active": "link")} onClick={toggle} to="/category">Category</NavLink></li>
      <li><NavLink className={({isActive})=>(isActive? "link-active": "link")} onClick={toggle} to="/category/cart/checkout">Cart and Checkout</NavLink></li>
     <li><NavLink className={({isActive})=>(isActive? "link-active": "link")}  onClick={toggle} to="/payment and shipping">Payment and Shipping</NavLink></li>
       <li><NavLink className={({isActive})=>(isActive? "link-active": "link")} onClick={toggle} to="/about">About</NavLink></li>
    </ul>

  </nav>
}
  <Outlet />
  </div>
)
}




