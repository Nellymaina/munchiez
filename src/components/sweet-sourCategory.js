import sweetsour from "./sweet&sour-snacks";
import React from "react";
import {Link} from 'react-router-dom'
import {useParams} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {AddShoppingCart}  from '@mui/icons-material';
import {ADDTOCART} from './cart-action'

export default function SweetSourPage({query}){

const dispatch=useDispatch();



function handleCart(item){
    dispatch({type:ADDTOCART, payload:item})
 }
 


 const feature={
   position:'absolute',
   top:'40%',
   right:'0',
   color:'green',
   backgroundColor:'white'
    }

 
 


    const {Sweetourname}=useParams()

const sweet=sweetsour.find(item=>item.name===Sweetourname)

  const sweetour=sweet.images.map(item=>{
    return(
        <div className="container">
            <Link to={`/category4/${Sweetourname}/${item.FullName}`}>
            {item.amount >=1? <img className="drinksimage" src={item.image} alt=""/> : <img className="drinksimage2" src={item.image} alt="" />}
   <p className="item-price">KES {item.price}.00 </p>
   <h5 className="Item-name">{item.namey}&nbsp;<span className="span-flex">{item.subname}</span>&nbsp;<span className="span-flex2">{item.subname2}</span>&nbsp;<span className='span-flex3'>{item.subname3}</span></h5>
</Link>
   {item.amount<1 && <p className='top-right'>out of stock</p>}
   {item.amount>0 && item.amount <=10 && <p className='top-right'>few units left</p>} 
   <AddShoppingCart style={feature} onClick={()=> handleCart(item, item.FullName)}/>
   </div>)
}) 
    
    
    return(
        <div className="crispy-background">
<div className='grid-div'>
{sweetour}

</div>
</div>
    )
}

