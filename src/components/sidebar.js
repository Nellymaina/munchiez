import {React, useState, useContext} from 'react';
import { NavLink, Link } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded'
import {AuthContext} from './auth'
import Switch from 'react-switch'
import LogoutIcon from '@mui/icons-material/Logout';


export default function Pages(){
 const [sidebar, setsidebar]=useState(false);
const {toggleTheme, auth, logout, theme} =useContext(AuthContext)




  

function toggle(){
   setsidebar(prevState=>!prevState)
}


return(
  <div>
  {sidebar===false &&
  <div className='menu-container'>
   <ArrowBackIcon className='quit-menu' onClick={toggle} />
   <NavLink className={({ isActive }) => (isActive ? 'link' : 'link-active')} onClick={toggle} to="/">Home</NavLink>
   <NavLink className={({ isActive }) => (isActive ? 'link' : 'link-active')}onClick={toggle} to='./category'>Categories</NavLink>
   <NavLink className={({ isActive }) => (isActive ? 'link' : 'link-active')} onClick={toggle} to="/cart">Cart</NavLink>
   <NavLink className={({ isActive }) => (isActive ? 'link' : 'link-active')}  onClick={toggle} to="/payment">Checkout and Payment</NavLink>
  {auth? <div className='log-out'> <LogoutIcon/><p onClick={logout(toggle)}>Log out</p></div> :<div className='log-out'> <LogoutIcon/><Link className='link-active' onClick={toggle} to='signin' >Log in</Link></div>}
<Switch checked={theme} onChange={toggleTheme} onColor="#4caf50"
      offColor="#f44336"
      checkedIcon={true} 
      uncheckedIcon={false}
      height={20} 
      width={48} 
      handleDiameter={18} 
      className='custom-switch'
      />

  </div>
}
  </div>
)
}