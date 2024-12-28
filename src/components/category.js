import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import responsive from "./responsive";
import React from 'react'
import {brands} from './brandsPage'
import {Link} from 'react-router-dom'
import drinks,{responsive2} from "./drinks-data"
import crisps from "./crispy-data"
import sweetsour from './sweet&sour-snacks'
import crunchy from './crunchy-data'


export default function Cat(){

  

 const newBrands=brands.map((item)=>
    (
    <Link to={`/category/${item.name}`}>
      <div className='brands-box'>
     <img className="brands" src={item.imageurl} alt="" />
     </div>
    </Link>
))



  
  
  
   



const drinksdata=drinks.map((item)=>
    (<div className="image-container">
    <Link key={item.name} to={`/category2/${item.name}`}>
     <img className="drinks-images" src={item.collectiveimage} alt="" />
    </Link>
    <p className="category-title">{item.name}</p>
    </div>
))

const crispydata=crisps.map((item)=>
(
    <div className="image-container">
<Link key={item.name} to={`/category3/${item.name}`}>
 <img  className="drinks-images" src={item.collectiveimage} alt="" />
</Link>
    <p className="category-title">{item.name}</p>
</div>
))


const sweetsourdata=sweetsour.map((item)=>
(
    <div className="image-container">
<Link key={item.name} to={`/category4/${item.name}`}>
 <img  className="drinks-images" src={item.collectiveimage} alt="" />
</Link>
<p className="category-title">{item.name}</p>
</div>
))





const crunchydata=crunchy.map((item)=>
(
    <div className="image-container">
<Link key={item.name} to={`/category5/${item.name}`}>
 <img  className="drinks-images" src={item.collectiveimage} alt="" />
</Link>
<p className="category-title">{item.name}</p>

</div>
))

    return(
            <div className="Category-page">
            <h2 className="hero-title">Shop by Brands</h2>
            <Carousel responsive={responsive} containerClass= "brands-container" draggable={true}  swipeable={true} autoPlay={true} infinite={true} autoPlaySpeed={1500}>
        {newBrands}
        </Carousel>
        <h2 className='hero-title'>Drinks</h2>
        <Carousel responsive={responsive2} containerClass= "brands-container" draggable={true}  swipeable={true} >
        {drinksdata}
        </Carousel>

        <h2 className='hero-title'>Crispy snacks</h2>
        <Carousel responsive={responsive2} containerClass= "brands-container" draggable={true}  swipeable={true} >
        {crispydata}
        </Carousel>
        <h2 className='hero-title'>Sweet-tooth Snacks</h2>
        <Carousel responsive={responsive2} containerClass= "brands-container" draggable={true}  swipeable={true} >
        {sweetsourdata}
        </Carousel>
        <h2 className='hero-title'>Crunchy snacks and pasteries</h2>
<Carousel responsive={responsive2} containerClass= "brands-container" draggable={true}  swipeable={true} >
{crunchydata}
</Carousel>
        
        </div>
    
    
    )
 }