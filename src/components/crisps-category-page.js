import {React} from 'react'
import { useParams } from 'react-router-dom'
import crisp from './crispy-data2'
import {useDispatch, useSelector} from 'react-redux'
import {ADDTOCART} from "./cart-action"
import {REMOVEFROMCART} from "./removeaction"
import ReactImageMagnify from 'react-image-magnify'

export default function DrinkscategoryPage(){

const {Name} = useParams();
const dispatch=useDispatch();
const stater=useSelector(state=>state.items)



const crispydetails=crisp.find(product=>product.FullName===Name)

const pro=stater.find(item=>item.FullName===crispydetails.FullName)

 
function handleCart(){
  dispatch({type:ADDTOCART, payload:crispydetails})
  alert("ITEM ADDED TO CART!")
}

function handleCartRemove(){
  dispatch({type:REMOVEFROMCART, payload:crispydetails})
       
       }
  return (
   <div className="description-page">
   <><div className="description-image">
    <ReactImageMagnify{...{
      smallImage:{
        alt:"hey", 
        isFluidWidth:true, 
        src:crispydetails.image
      }, 
      largeImage:{
        src:crispydetails.image, 
        width:1129, 
        height:750
      }
      }}
  />
  <h4 className="des-fullname">{crispydetails.FullName}</h4>
  <button className="cart-button2" onClick={handleCartRemove}>-</button>
  {pro? pro.quantity:1}
<button className="cart-button" onClick={handleCart}>AddToCart</button>
<p>KSH {crispydetails.price}.00</p>
</div>
  <div className='des'>
  
<h3 className="description-header">Ingredients </h3><p className="description-clause">{crispydetails.description1}</p>
<h3 className="description-header">Description</h3><p className="description-clause">{crispydetails.description2}</p>
  </div>
     </>

   </div>
  )
}

