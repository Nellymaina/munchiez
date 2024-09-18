import React from 'react'
import { useParams } from 'react-router-dom'
import crisp from './crispy-data2'
import {useDispatch, useSelector} from 'react-redux'
import {ADDTOCART} from './cart-action'
import {REMOVEFROMCART} from "./removeaction"
import { AddShoppingCart} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import ReactImageMagnify from 'react-image-magnify'


export default function DrinkscategoryPage({query}){

const {drinksName} = useParams();
const dispatch=useDispatch()
const stater=useSelector(state=>state.items)


 
const feature={
  position:'relative',
  bottom:'20vh',
  left:'45%',
  color:'lime',
  backgroundColor:'rgb(7, 34, 43)'
  }
  
const drinkies=crisp.filter(item=>(
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
    <p>{item.FullName}</p>
    <p>ksh{item.price}</p>
    <p></p>
    </div>
 )
})

const pop=crisp.filter(item=>query===""? item:item===undefined).find(item=>item.FullName===drinksName)
const pro=stater.find(item=>item.FullName===pop.FullName)

function handleCart(){
  dispatch({type:ADDTOCART, payload:pop})
}

function handleCartRemove(){
  dispatch({type:REMOVEFROMCART, payload:pop})
       
       }
  return (
    
    <div className="description-page">
    {query!==""? <div className="grid-div">{drinkies}</div>: <><div className="description-image">
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
<div className="full-description">
  
<h3 className="description-header">Ingredients </h3><p className="description-clause">{pop.description1}</p>
<h3 className="description-header">Description</h3><p className="description-clause">{pop.description2}</p>
 
 </div> </>}

        </div>

    )

}

