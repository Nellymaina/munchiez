import React from 'react'
import { useParams } from 'react-router-dom'
import crisp from './crispy-data2'
import {useDispatch, useSelector} from 'react-redux'
import {ADDTOCART} from './cart-action'
import {REMOVEFROMCART} from "./removeaction"

import ReactImageMagnify from 'react-image-magnify'


export default function DrinkscategoryPage(){

const {drinksName} = useParams();
const dispatch=useDispatch()
const stater=useSelector(state=>state.items)

  

const pop=crisp.find(item=>item.FullName===drinksName)
const pro=stater.find(item=>item.FullName===pop.FullName)

function handleCart(){
  dispatch({type:ADDTOCART, payload:pop})
  alert("ITEM ADDED TO CART!") 

}

function handleCartRemove(){
  dispatch({type:REMOVEFROMCART, payload:pop})
       
       }
  return (
    
    <div className="description-page">
    <><div className="description-image">
      <ReactImageMagnify{...{
        smallImage:{
          alt:"hey", 
          isFluidWidth:true, 
          src:pop.image
        }, 
        largeImage:{
          src:pop.image, 
          width:1129, 
          height:750
        }
        }}
    />
    <p>{pop.FullName}</p>
  <button className="cart-button2" onClick={handleCartRemove}>-</button>
  {pro? pro.quantity:1}
<button className="cart-button" onClick={handleCart}>AddToCart</button>
<p>KSH {pop.price}.00</p>
</div>
<div className="des">
  
<h3 className="description-header">Ingredients </h3><p className="description-clause">{pop.description1}</p>
<h3 className="description-header">Description</h3><p className="description-clause">{pop.description2}</p>
 
 </div> </>

        </div>

    )

}

