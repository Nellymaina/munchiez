import React from 'react'
import { useParams } from 'react-router-dom'
import crisp from './crispy-data2';
import {useDispatch, useSelector} from 'react-redux'
import {ADDTOCART} from './cart-action'
import {REMOVEFROMCART} from "./removeaction"
import { AddShoppingCart} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import ReactImageMagnify from 'react-image-magnify'

export default function OverallCategoryPage({query}){
    const dispatch=useDispatch()
    const {overallName}=useParams()
    const stater=useSelector(state=>state.items)

    
    const crunchies=crisp.filter(item=>(
        query===""? item: item.FullName.toLowerCase().includes(query.toLowerCase())
      )).map(item=>{
        return( 
           <div>
              <Link key={item.FullName} to={`/category6/${item.FullName}`}>
      
           <img className="crisps-image" src={item.image} alt=""/>
           </Link>
         <AddShoppingCart onClick={()=>handleCart(item)}/> 
          <p>{item.FullName}</p>
          
          </div>
       )
      })
      
      
    
    const crunchydata=crisp.find(item=>item.FullName===overallName)
    const pro=stater.find(item=>item.FullName===crunchydata.FullName)



function handleCart(){
    dispatch({type:ADDTOCART, payload:crunchydata})
}

function handleCartRemove(){
    dispatch({type:REMOVEFROMCART, payload:crunchydata})
         
         }


    return(
        <div className="description-page">
    <div className="description-image">
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
<p>KSH {crunchydata.price}.00000</p>
</div>
  <div>
<h3 className="description-header">Ingredients </h3><p className="description-clause">{crunchydata.description1}</p>
<h3 className="description-header">Description</h3><p className="description-clause">{crunchydata.description2}</p>
</div>
</div>
    )

}



