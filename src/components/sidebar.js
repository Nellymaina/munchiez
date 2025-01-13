import {React, useState, useContext, useEffect} from 'react';
import { NavLink, Link } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {AuthContext} from './auth'
import Switch from 'react-switch'
import LogoutIcon from '@mui/icons-material/Logout';


export default function Pages(){
 
const {toggle, auth, logout} =useContext(AuthContext)
const [theme, setTheme] = useState(true); 

const toggleTheme = () => {
      setTheme(prevTheme=>!prevTheme);
    };
  
    useEffect(() => {
      document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);


  




return(
  <div>
  <div className='quit-div'>
   <ArrowBackIcon className='quit-menu' onClick={toggle} /></div>
   <div className='menu'>
   <NavLink className={({ isActive }) => (isActive ? 'link' : 'link-active')} onClick={toggle} to="/">Home</NavLink>
   <NavLink className={({ isActive }) => (isActive ? 'link' : 'link-active')}onClick={toggle} to="/category"> Categories</NavLink>
   <NavLink className={({ isActive }) => (isActive ? 'link' : 'link-active')} onClick={toggle} to="/cart"> Cart</NavLink>
   <NavLink className={({ isActive }) => (isActive ? 'link' : 'link-active')}  onClick={toggle} to="/payment"> Checkout and Payment </NavLink>
  {auth? <div className='log-out'> <LogoutIcon/><p className='custom-link' onClick={logout}>Log out</p></div> :<div className='log-out'> <LogoutIcon/><Link className='custom-link' onClick={toggle} to='signin' >Log in</Link></div>}

<div className='custom-div'>
<Switch checked={theme}  onChange={toggleTheme} onColor="#121212"
      offColor=""
      checkedIcon={true} 
      uncheckedIcon={false}
      height={18} 
      width={48} 
      handleDiameter={14} 
      className='custom-switch'
      /><p className='custom-link'>Theme</p></div>
 

  </div>
  </div>
)
}