import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import images from './products'
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
export default function Home({query}) {
  
const dispatch=useDispatch()
function handleCart(item){
  dispatch({type:ADDTOCART, payload:item})
}


const newProducts=images.images1.map(item=>{
return (<div className="cardborder"> <Link to={`/${item.FullName}`}><img src={item.image} className="cardborder-img" alt="" /> <h2 className="price-title"><span className="price">KSH</span> {item.price}.00</h2> <p className="homeimages-title">{item.FullName}</p></Link> <AddIcon className="add-icon" onClick={()=>handleCart(item)}/></div>)
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

      </div>
  
    </div>
  )}

  