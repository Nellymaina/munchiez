import React from 'react';
import {useParams} from 'react-router-dom';
import crisp from './crispy-data2'
import {useDispatch, useSelector} from 'react-redux'
import {ADDTOCART} from './cart-action'
import {REMOVEFROMCART} from "./removeaction"

import { AddShoppingCart} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import ReactImageMagnify from 'react-image-magnify'

export default function CrunchyCategoryPage({query}){
    const dispatch=useDispatch()
    const {crunchiesName}=useParams()
    const stater=useSelector(state=>state.items)

    const feature={
      position:'relative',
      bottom:'20vh',
      left:'45%',
      color:'lime',
      backgroundColor:'black'
      }

    const crunchies=crisp.filter(item=>(
      query===""? item: item.FullName.toLowerCase().includes(query.toLowerCase())
    )).map(item=>{
      return( 
         <div className="container">
            <Link key={item.FullName} to={`/category6/${item.FullName}`}>
    
         {item.amount >=1? <img className="drinksimage" src={item.image} alt=""/> : <img className="drinksimage2" src={item.image} alt="" />}
    
         {item.amount >=1? <img className="drinksimage" src={item.image} alt=""/> : <img className="drinksimage2" src={item.image} alt="" />}
   <p className="item-price">KES {item.price}.00 </p>
   <h5 className="Item-name">{item.namey}&nbsp;<span className="span-flex">{item.subname}</span>&nbsp;<span className="span-flex2">{item.subname2}</span>&nbsp;<span className='span-flex3'>{item.subname3}</span></h5>
</Link>
   {item.amount<1 && <p className='top-right'>out of stock</p>}
   {item.amount>0 && item.amount <=10 && <p className='top-right'>few units left</p>} 


   <AddShoppingCart style={feature} onClick={()=> handleCart(item, item.FullName)}/>
   </div>)
})
      

    const crunchydata=crisp.find(item=>item.FullName===crunchiesName)
    const pro=stater.find(item=>item.FullName===crunchydata.FullName)



function handleCart(){
    dispatch({type:ADDTOCART, payload:crunchydata})
}

function handleCartRemove(){
  dispatch({type:REMOVEFROMCART, payload:crunchydata})
       
       }

    return(
        <div className="description-page">
    {query!==""? <div className="grid-div">{crunchies}</div>: <><div className="description-image">
    <ReactImageMagnify{...{
      smallImage:{
        alt:"hey", 
        isFluidWidth:true, 
        src:crunchydata.image
      }, 
      largeImage:{
        src:crunchydata.image, 
        width:1129, 
        height:750
      }
      }}
  />
  <p>{crunchydata.FullName}</p>
  <button className="cart-button2" onClick={handleCartRemove}>-</button>
  {pro? pro.quantity:1}
<button className="cart-button" onClick={handleCart}>AddToCart</button>
<p>KSH {crunchydata.price}.00</p>
</div>
  <div>
<h3 className="description-header">Ingredients </h3><p className="description-clause">{crunchydata.description1}</p>
<h3 className="description-header">Description</h3><p className="description-clause">{crunchydata.description2}</p>
  </div>
     </>}
        </div>

    )

}
