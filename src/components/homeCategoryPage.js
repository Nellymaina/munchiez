import React from 'react'
import { useParams } from 'react-router-dom'
import images from './crispy-data2'
import {useDispatch, useSelector} from 'react-redux'
import {ADDTOCART} from './cart-action'
import {REMOVEFROMCART} from "./removeaction"
import ReactImageMagnify from 'react-image-magnify'


 export default function HomeCategoryPage(){
  const { homeId }= useParams()
  const dispatch=useDispatch();
const stater=useSelector(state=>state.items)

const homeImages=images.find(product=>product.FullName===homeId)

const pro=stater.find(item=>item.FullName===homeImages.FullName)


function handleCart(){
  dispatch({type:ADDTOCART, payload:homeImages})
  alert("ITEM ADDED TO CART!") 
}

function handleCartRemove(){
  dispatch({type:REMOVEFROMCART, payload:homeImages})
       
       }

    return (
      <div className="description-page">
       <><div className="description-image">
        <ReactImageMagnify{...{
          smallImage:{
            alt:"", 
            isFluidWidth:true, 
            src:homeImages.image2
            
          }, 
          largeImage:{
            src:homeImages.image2, 
            width:1129, 
            height:750
          }
          }}
      /><h4 className="des-fullname">{homeImages.FullName}</h4>
      <button className="cart-button2" onClick={handleCartRemove}>-</button>
      {pro? pro.quantity:1}
    <button className="cart-button" onClick={handleCart}>Add To Cart</button>
    <p className='des-price'>KSH {homeImages.price}.00</p>
    </div>
      
      <div className='des'>
      
    <h3 className="description-header">Ingredients </h3><p className="description-clause">{homeImages.description1}</p>
    <h3 className="description-header">Description</h3><p className="description-clause">{homeImages.description2}</p>
     
     </div>
     </>
       </div>
      )
    }



