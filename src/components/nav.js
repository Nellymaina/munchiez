import {React, useContext} from 'react';
import Cart from './cart'
import Sidebar from "./sidebar"
import {Link} from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { AuthContext } from './auth';
import {motion, AnimatePresence} from 'framer-motion';
export default function Navbar(){
    const { sidebar, toggle} =useContext(AuthContext)





    return(
    <div className='navbar-contents'>
        <button onClick={toggle} className='ham-button'>&#9776;</button>

        <AnimatePresence>{sidebar===true && <motion.div className="menu-container" initial={{x:'-100%'}} animate={{x:0}} exit={{x:'-100%'}} transition={{duration:0.3}}><Sidebar/>  </motion.div>
}</AnimatePresence> <Link to="/" className="nav">MUNCH<span className='nav2'>ie</span><span className='nav3'>Z</span></Link> 
   
   <div className="cart-icon">
      
      <Link to="/signin">
    <AccountCircleIcon  className="account-sign"/>
    </Link>
    <Cart/>
    </div>

    </div>
)
}