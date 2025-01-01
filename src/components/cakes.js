import React from 'react';
import crisps from './crunchy-data'
import {Link} from 'react-router-dom';
import {ADDTOCART} from './cart-action';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch } from 'react-redux'


export default function Cakes(){

    

           const dispatch=useDispatch()

function handleCart(item){
   dispatch({type:ADDTOCART, payload:item})
   alert("ITEM ADDED TO CART!")
}

    const newCrisps=crisps.find(item=>item.name==="Cakes")
    const crisp=newCrisps.images.map(item=>{
           return( 
           <div className='container'>
        <Link to={`/category3/Cakes/${item.FullName}`}>
        {item.amount >=1? <img className="drinksimage" src={item.image} alt=""/> : <img className="drinksimage2" src={item.image} alt="" />}
           <p className="item-price">KES {item.price}.00 </p>
           <h5 className="Item-name">{item.namey}&nbsp;<span className="span-flex">{item.subname}</span>&nbsp;<span className="span-flex2">{item.subname2}</span>&nbsp;<span className='span-flex3'>{item.subname3}</span></h5>
        </Link>
           {item.amount<1 && <p className='top-right'>out of stock</p>}
           {item.amount>0 && item.amount <=10 && <p className='top-right'>few units left</p>} 
           <ShoppingCartIcon className="shopping-cart" onClick={()=> handleCart(item, item.FullName)}/>
           </div>)
        })
return(

    <div className='grid-div'>
        {crisp}
    </div>

)
}