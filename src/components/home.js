import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import images from './products'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import responsive from "./responsive"
import {slider, responsive2} from "./herosection"
import crisp from './crispy-data2'
import { Link } from 'react-router-dom';
import {ADDTOCART} from './cart-action';
import {AddShoppingCart}  from '@mui/icons-material';
import { useDispatch } from 'react-redux'
import banner1 from './images/bg-images/banner3.jpeg'
import banner2 from "./images/bg-images/floydeez1.jpg"
import banner3 from './images/bg-images/banner2.jpeg'
export default function Home({query}) {
  
const dispatch=useDispatch()
function handleCart(item){
  dispatch({type:ADDTOCART, payload:item})
}


const newProducts=images.images1.filter(item=>(
  query==="" ? item: item.length===0)
 ).map(item=>{
return (<div className="cardborder"> <Link to={`/${item.FullName}`}><img src={item.image} className="cardborder-img" alt="" /> <h2 className="price-title"><span className="price">KSH</span> {item.price}.00</h2> <p className="homeimages-title">{item.FullName}</p></Link> <AddIcon className="add-icon" onClick={()=>handleCart(item)}/></div>)
})

const newProducts1=images.images2.filter(item=>(
  query==="" ? item: item.length===0)).map(item=>{
return (<div className="cardborder"> <Link to={`${item.FullName}`}><img src={item.image} className="cardborder-img" alt=""/> <h2 className="price-title"><span className="price">KSH</span> {item.price}.00</h2>  <p className="homeimages-title">{item.FullName}</p></Link> <AddIcon className="add-icon" onClick={()=>handleCart(item)}/>
</div>)
})
const newProducts2=images.images3.filter(item=>(
  query==="" ? item: item.length===0)
 ).map(item=>{
return (<div className="cardborder"> <Link to={`/${item.FullName}`}><img src={item.image}  className="cardborder-img" alt=""/> <h2 className="price-title"><span className="price">KSH</span> {item.price}.00</h2> <p className="homeimages-title">{item.FullName}</p> </Link> <AddIcon className="add-icon" onClick={()=>handleCart(item)}/> </div>)
})
const newProducts3=images.images4.filter(item=>(
  query==="" ? item: item.length===0)).map(item=>{
return (<div className="cardborder"> <Link to={`/${item.FullName}`}> <img src={item.image} className="cardborder-img" alt="" /> <h2 className="price-title"><span className="price">KSH</span> {item.price}.00</h2> <p className="homeimages-title">{item.FullName}</p> </Link>  <AddIcon className="add-icon" onClick={()=>handleCart(item)}/>  </div>) 
})





  

const feature={
  position:'relative',
  bottom:'20vh',
  left:'45%',
  color:'lime',
  backgroundColor:'rgb(7, 34, 43)'
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
    <AddShoppingCart style={feature} onClick={()=>handleCart(item)}/> 
     <p>ksh{item.price}</p>
     <p></p>
     </div>
  )
})






  return (
    <div>
      {newProducts1.length===0? <div className="grid-div">{crispies}</div>: 
    <div className="carousel-Hero">
<Carousel responsive={responsive2} autoPlay={true} infinite={true} showDots={false} removeArrowOnDeviceType={["desktop"]} containerClass="carousel-hero" autoPlaySpeed={2000}>
<img src={slider.sid1} alt="" />
<img src={slider.sid2} alt=""/>
<img src={slider.sid3} alt=""/>
<img src={slider.sid4} alt=""/>
<img src={slider.sid5} alt=""/>
<img src={slider.sid6} alt=""/>

</Carousel>
<h3 className="hero-title">Assorted lot</h3>

       <Carousel responsive={responsive}containerClass= "carousel-container" draggable={true} swipeable={true}>
       {newProducts2}
        </Carousel>
        <Carousel responsive={responsive} containerClass= "carousel-container" draggable={true}  swipeable={true}>
        {newProducts3}
        
        </Carousel>
        
       
       
        <img src={banner1} alt="" className="hero-banner"/>
        <img src={banner2} alt="" className="hero-banner"/>
        <img src={banner3} alt="" className="hero-banner"/>



        <h3 className="hero-title">Popular brands</h3>

<Carousel responsive={responsive} containerClass= "carousel-container" draggable={true}  swipeable={false}>
       {newProducts}
</Carousel>      
      <Carousel responsive={responsive} containerClass= "carousel-container" draggable={true}  swipeable={true}>
          {newProducts1}
      </Carousel>

      </div>}
  
    </div>
  )}

  