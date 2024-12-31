import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import images from './products'
import intro1 from './images/intro1.jpg'
import intro2 from './images/intro2.jpg'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import responsive from "./responsive"
import {slider, responsive2} from "./herosection"
import { Link } from 'react-router-dom';
import {ADDTOCART} from './cart-action';
import { useDispatch } from 'react-redux'
import banner1 from './images/bg-images/banner3.jpeg'
import banner2 from "./images/bg-images/floydeez1.jpg"
import banner3 from './images/bg-images/banner2.jpeg'
import { GiChipsBag } from "react-icons/gi";
import { RiCake3Line } from "react-icons/ri";
import { LuCandy } from "react-icons/lu";
import { GiSodaCan } from "react-icons/gi";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

export default function Home() {
  
const dispatch=useDispatch()
function handleCart(item){
  dispatch({type:ADDTOCART, payload:item})
  alert("ITEM ADDED TO CART!") 

}


const newProducts=images.images1.map(item=>{
return (<div className="cardborder"> <Link to={`/${item.FullName}`}><img src={item.image} className="cardborder-img" alt="" /> <h2 className="price-title"><span className="price">KSH</span> {item.price}.00</h2>   <p className="homeimages-title">{item.FullName}</p> </Link> <AddIcon className="add-icon" onClick={()=>handleCart(item)}/></div>)
})

const newProducts1=images.images2.map(item=>{
return (<div className="cardborder"> <Link to={`${item.FullName}`}><img src={item.image} className="cardborder-img" alt=""/> <h2 className="price-title"><span className="price">KSH</span> {item.price}.00</h2>  <p className="homeimages-title">{item.FullName}</p></Link> <AddIcon className="add-icon" onClick={()=>handleCart(item)}/>
</div>)
})
const newProducts2=images.images3.map(item=>{
return (<div className="cardborder"> <Link to={`/${item.FullName}`}><img src={item.image}  className="cardborder-img" alt=""/> <h2 className="price-title"><span className="price">KSH</span> {item.price}.00</h2> <p className="homeimages-title">{item.FullName}</p> </Link> <AddIcon className="add-icon" onClick={()=>handleCart(item)}/> </div>)
})
const newProducts3=images.images4.map(item=>{
return (<div className="cardborder"> <Link to={`/${item.FullName}`}> <img src={item.image} className="cardborder-img" alt="" /> <h2 className="price-title"><span className="price">KSH</span> {item.price}.00</h2> <p className="homeimages-title">{item.FullName}</p> </Link>  <AddIcon className="add-icon" onClick={()=>handleCart(item)}/>  </div>) 
})




return (
    <div> 
      <div className='Intro'>
      <h2>Get all your favorite snacks in one go</h2>
      <img src={intro1} alt=''/>
      <img src={intro2} alt=''/>  
      <p>Feel free to...</p>
      </div>
      <div className='arrow-down'>
<ArrowDownwardIcon /></div>
      <h2 className="hero-title">Take Your Pick</h2>

      <div className='grid-box-container'>
        <br/>
    <div class="grid-box">

    <Link to='/Crisps'><div class="item">
      <GiChipsBag className='item-icon'/><br/>
    Crisps   </div></Link>

    <Link to='/Cakes'><div class="item">
      <RiCake3Line className='item-icon'/><br/>Cake</div></Link>


    <Link to='/Sweets'>
    <div class="item"><LuCandy className='item-icon'/><br/>
    Sweets</div>
    </Link>

    <Link to='/Soda'>
    <div class="item">
    <GiSodaCan className='item-icon' /><br/>Soda</div></Link>
  </div>
  </div>

   <div className="carousel-Hero"  >
   <Carousel responsive={responsive2} autoPlay={true} infinite={true} showDots={false} removeArrowOnDeviceType={["mobile", "desktop", "tablet", "superLargeDesktop"]} containerClass="carousel-hero" autoPlaySpeed={4000}>
<img src={slider.sid1} alt="" />
<img src={slider.sid3} alt=""/>
<img src={slider.sid4} alt=""/>
<img src={slider.sid5} alt=""/>
<img src={slider.sid6} alt=""/>
</Carousel>

<h3 className="hero-title">Assorted lot</h3>

       <Carousel responsive={responsive}containerClass= "carousel-container"  showDots={false}  draggable={true} swipeable={true}>
       {newProducts2}
        </Carousel>
        <Carousel responsive={responsive} containerClass= "carousel-container" showDots={false}  draggable={true}  swipeable={true}>
        {newProducts3}
        
        </Carousel>

       

       
       <div className='banner'>
        <img src={banner1} alt="" className="hero-banner"/>
        <img src={banner2} alt="" className="hero-banner"/>
        <img src={banner3} alt="" className="hero-banner"/>
</div>


        <h3 className="hero-title">Popular brands</h3>

<Carousel responsive={responsive} containerClass= "carousel-container" draggable={true} showDots={false}  swipeable={true}>
       {newProducts}
</Carousel>      
      <Carousel responsive={responsive} containerClass= "carousel-container" draggable={true}  showDots={false}  swipeable={true}>
          {newProducts1}
      </Carousel>

      </div>
      <Link to='/category'>
      <div className='outro'>
        <h2>View more Products</h2>
        <ArrowForwardIcon className='arrow-forward' />
</div>
</Link>
</div>
  
  )}

  