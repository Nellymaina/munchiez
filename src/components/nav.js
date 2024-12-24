import {React, useState, useEffect, useRef} from 'react';
import Cart from './cart'
import Sidebar from "./sidebar"
import {Link} from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

export default function Navbar({mode, theme}){
    const [sidebar, setsidebar]=useState(false);
    const sidebarRef=useRef(null)

function toggle(){
   setsidebar(prevState=>!prevState)
}

useEffect(()=>{
  function handleClickOutside(event){
if (sidebarRef.current && !sidebarRef.current.contains(event.target)){
  setsidebar(false)
}}
if (sidebar){
  document.addEventListener('click', handleClickOutside)
}

return()=>{
  document.removeEventListener('click', handleClickOutside)
}

},[sidebar])

let startX;
let currentX;
function handleDragStart(event){
  startX=event.clientX;
}

function handleDrag(event){
  currentX=event.clientX;
}

const color={
  color:"white",
  fontSize:'30px'
  
}

function handleDragEnd(event){
  const threshold=100;
  if(startX-currentX>threshold){
    setsidebar(false)
  }
}

    return(
    <div className='navbar-contents'>
        <button onClick={toggle} className='ham-button'>&#9776;</button>

{sidebar===true && <div>
   <div ref={sidebarRef} className='sidebar'  draggable="true" onDragStart={handleDragStart} onDrag={handleDrag} onDragEnd={handleDragEnd}><Sidebar mode={mode} theme={theme}/></div></div>} <Link to="/" className="nav">MUNCH<span className='nav2'>ie</span><span className='nav3'>Z</span></Link> 
   
   <div className="cart-icon">
      
      <Link to="/signin">
    <AccountCircleIcon  className="account-sign"/>
    </Link>
    <Cart/>
    </div>

    </div>
)
}