import {React, useState} from 'react';
import {Outlet, NavLink} from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded'

export default function Pages(prop){
 const [sidebar, setsidebar]=useState(false);

function toggle(){
   setsidebar(prevState=>!prevState)
}

return(
  <div>
  {sidebar===false &&
  <nav>
    <li className="link-tive" onClick={prop.mode}> {prop.theme === "light" ? "Dark" : "Light"} Mode
    </li>
  <ArrowBackIcon className='quit-menu' onClick={toggle} />
  
   <ul className='menu'>
   
      <li><NavLink className={({isActive})=>(isActive? "link-active": "link")} onClick={toggle} to="/">Home</NavLink></li>
      <li><NavLink className={({isActive})=>(isActive? "link-active": "link")} onClick={toggle} to="/category">Category</NavLink></li>
     <li><NavLink className={({isActive})=>(isActive? "link-active": "link")}  onClick={toggle} to="/payment">Payment and Shipping</NavLink></li>
       <li><NavLink className={({isActive})=>(isActive? "link-active": "link")} onClick={toggle} to="/about">About</NavLink></li>
    </ul>

  </nav>
}
  <Outlet />
  </div>
)
}




