import React from 'react'
import { useParams } from 'react-router-dom'
import images from './crispy-data2'
import {useDispatch, useSelector} from 'react-redux'
import {ADDTOCART} from './cart-action'
import {REMOVEFROMCART} from "./removeaction"
import {Link} from 'react-router-dom'
import { AddShoppingCart } from '@mui/icons-material'
import ReactImageMagnify from 'react-image-magnify'


 export default function HomeCategoryPage({query}){
  const { homeId }= useParams()
  const dispatch=useDispatch();
const stater=useSelector(state=>state.items)

const homeImages=images.filter(item=>(
  query===""? item: item===undefined
)).find(product=>product.FullName===homeId)

const pro=stater.find(item=>item.FullName===homeImages.FullName)


function handleCart(){
  dispatch({type:ADDTOCART, payload:homeImages})
}

function handleCartRemove(){
  dispatch({type:REMOVEFROMCART, payload:homeImages})
       
       }

const crispies=images.filter(item=>(
  query===""? item: item.FullName.toLowerCase().includes(query.toLowerCase())
)).map(item=>{
  return( 
     <div>
        <Link to={`/category6/${item.FullName}`}>

     <img className="crisps-image" src={item.image} alt=""/>
     </Link>
   <AddShoppingCart onClick={()=>handleCart(item)}/> 
    <p>{item.FullName}</p>
    <p>ksh{item.price}</p>
    </div>
 )
})
  
    return (
      <div className="description-page">
      {homeImages===undefined? <div className="grid-div">{crispies}</div>: <><div className="description-image">
        <ReactImageMagnify{...{
          smallImage:{
            alt:"hey", 
            isFluidWidth:true, 
            src:homeImages.image2
          }, 
          largeImage:{
            src:homeImages.image2, 
            width:1129, 
            height:750
          }
          }}
      /><h4>{homeImages.FullName}</h4>
      <button className="cart-button2" onClick={handleCartRemove}>-</button>
      {pro? pro.quantity:1}
    <button className="cart-button" onClick={handleCart}>AddToCart</button>
    <p>KSH {homeImages.price}.00</p>
    </div>
      
      <div>
      
    <h3 className="description-header">Ingredients </h3><p className="description-clause">{homeImages.description1}</p>
    <h3 className="description-header">Description</h3><p className="description-clause">{homeImages.description2}</p>
     
     </div>
     </>
     }
       </div>
      )
    }



