import {React}from 'react'
import drinks from './drinks-data'
import {useParams, Link} from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch} from 'react-redux'
import {ADDTOCART} from './cart-action'

 export default function DrinksCategory(){



const {name}= useParams();
 

const dispatch=useDispatch()


const newDrinks=drinks.find(item=>item.name===name)

const fullAmount=newDrinks.images

function handleCart(item, itemFullName){
   dispatch({type:ADDTOCART, payload:item})
   alert("ITEM ADDED TO CART!")
}


const fyp= fullAmount.map(item=>{
   return( 
      <div className='container'>
   <Link to={`/category2${name}/${item.FullName}`}>
   {item.amount >=1? <img className="drinks" src={item.image} alt=""/> : <img className="drinks" src={item.image} alt="" />}
      <p className="item-price">KES {item.price}.00 </p>
      <h5 className="Item-name">{item.namey}&nbsp;<span className="span-flex">{item.subname}</span>&nbsp;<span className="span-flex2">{item.subname2}</span>&nbsp;<span className='span-flex3'>{item.subname3}</span></h5>
   </Link>
      {item.amount<1 && <p className='top-right'>out of stock</p>}
      {item.amount>0 && item.amount <=10 && <p className='top-right'>few units left</p>} 
      <ShoppingCartIcon className="shopping-cart" onClick={()=> handleCart(item, item.FullName)}/>
      </div>)
   })




   return(
    

      <div className="grid-div"> 
    {fyp}
    </div>

   )

}




