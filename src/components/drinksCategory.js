import {React, useState }from 'react'
import drinks from './drinks-data'
import {useParams, Link} from 'react-router-dom';
import {AddShoppingCart}  from '@mui/icons-material';
import { useDispatch} from 'react-redux'
import {ADDTOCART} from './cart-action'
import crisp from './crispy-data2'

 export default function DrinksCategory({query}){



const {name}= useParams();
 

const dispatch=useDispatch()


const newDrinks=drinks.find(item=>item.name===name)
const [fullAmount, setFullAmount]=useState(newDrinks.images)
const feature={
position:'absolute',
top:'40%',
right:'0',
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

      <div className="all-content"><h5 className="Item-name">{item.namey}&nbsp;<span className="span-flex">{item.subname}</span>&nbsp;<span className="span-flex2">{item.subname2}</span>&nbsp;<span className='span-flex3'>{item.subname3}</span></h5></div>

      </Link>
      {item.amount<1 && <p className='top-right'>out of stock</p>}
   {item.amount>0 && item.amount <=10 && <p className='top-right'>few units left</p>} 
    <AddShoppingCart style={feature} onClick={()=>handleCart(item)}/> 
     <p>{item.price}.00 KES</p>
    </div>
  )
})

const fyp= fullAmount.filter(item=>query===""? item : item.length===0).map(item=>{
   return (
   <div className='container'>
      
   <Link to={`/category2/${name}/${item.FullName}`}>
   {item.amount >=1? <img className="drinksimage" src={item.image} alt=""/> : <img className="drinksimage2" src={item.image} alt="" />}
   <p className="item-price">KES {item.price}.00 </p>
   <h5 className="Item-name">{item.namey}&nbsp;<span className="span-flex">{item.subname}</span>&nbsp;<span className="span-flex2">{item.subname2}</span>&nbsp;<span className='span-flex3'>{item.subname3}</span></h5>
</Link>
   {item.amount<1 && <p className='top-right'>out of stock</p>}
   {item.amount>0 && item.amount <=10 && <p className='top-right'>few units left</p>} 


   <AddShoppingCart style={feature} onClick={()=> handleCart(item, item.FullName)}/>
   </div>)
})
function handleCart(item, itemFullName){
dispatch({type:ADDTOCART, payload:item})
const updatedData=fullAmount.map(item=> item.FullName===itemFullName && item.amount>0? {...item, amount:item.amount-1}: {...item, amount:item.amount} )
setFullAmount(updatedData)
localStorage.setItem('data',JSON.stringify(updatedData))
}



   return(
    <div className="grid-container">

      <section className="grid-div"> 
    {fyp.length===0? crispies:fyp}
    </section>

    </div>
   )

}




