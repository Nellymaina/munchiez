import React from 'react';
import {useParams} from 'react-router-dom';
import crisp from './crispy-data2'
import {useDispatch, useSelector} from 'react-redux'
import {ADDTOCART} from "./cart-action"
import {REMOVEFROMCART} from "./removeaction"
import {Link} from 'react-router-dom'
import { AddShoppingCart } from '@mui/icons-material'
import ReactImageMagnify from 'react-image-magnify'

export default function SweetSourCategoryPage({query}){
    const {SweetName}=useParams()

    const dispatch=useDispatch();
const stater=useSelector(state=>state.items)

const feature={
  position:'relative',
  bottom:'20vh',
  left:'45%',
  color:'lime',
  backgroundColor:'black'
  }

const crispies=crisp.filter(item=>(
  query===""? item: item.FullName.toLowerCase().includes(query.toLowerCase())
)).map(item=>{
  return( 
     <div className="container">
        <Link key={item.FullName} to={`/category6/${item.FullName}`}>

     {item.amount >=1? <img className="drinksimage" src={item.image} alt=""/> : <img className="drinksimage2" src={item.image} alt="" />}

     <h5 className="Item-name">{item.namey}&nbsp;<span className="span-flex">{item.subname}</span>&nbsp;<span className="span-flex2">{item.subname2}</span>&nbsp;<span className='span-flex3'>{item.subname3}</span></h5>

     </Link>
     {item.amount<1 && <p className='top-right'>out of stock</p>}
  {item.amount>0 && item.amount <=10 && <p className='top-right'>few units left</p>} 
   <AddShoppingCart style={feature}  onClick={()=>handleCart(item)}/> 
    <p>ksh{item.price}</p>
    <p></p>
    </div>
 )
})




const crispydetails=crisp.find(product=>product.FullName===SweetName)

const pro=stater.find(item=>item.FullName===crispydetails.FullName)

 
function handleCart(){
  dispatch({type:ADDTOCART, payload:crispydetails})
}

function handleCartRemove(){
  dispatch({type:REMOVEFROMCART, payload:crispydetails})
       
       }
  return (
   <div className="description-page">
  {query!==""? <div className="grid-div">{crispies}</div>: <><div className="description-image">
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
  /><p>{crispydetails.FullName}</p>
  <button className="cart-button2" onClick={handleCartRemove}>-</button>
  {pro? pro.quantity:1}
<button className="cart-button" onClick={handleCart}>AddToCart</button>
<p>KSH {crispydetails.price}.00</p></div>
  
  <div>
<h3 className="description-header">Ingredients </h3><p className="description-clause">{crispydetails.description1}</p>
<h3 className="description-header">Description</h3><p className="description-clause">{crispydetails.description2}</p>
 
 </div>
 </>}
   </div>
  )
}

