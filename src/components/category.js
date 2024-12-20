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


export default function Cat({query}){

  

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
            <h3 className='category-name'>Shop by Brands</h3>
            <Carousel responsive={responsive} containerClass= "brands-container" draggable={true}  swipeable={true} autoPlay={true} infinite={true} autoPlaySpeed={1500}>
        {newBrands}
        </Carousel>
        <h3 className='category-name'>Drinks</h3>
        <Carousel responsive={responsive2} containerClass= "brands-container" draggable={true}  swipeable={true} >
        {drinksdata}
        </Carousel>

        <h3 className='category-name'>Crispy snacks</h3>
        <Carousel responsive={responsive2} containerClass= "brands-container" draggable={true}  swipeable={true} >
        {crispydata}
        </Carousel>
        <h3 className='category-name'>Sweet-tooth Snacks</h3>
        <Carousel responsive={responsive2} containerClass= "brands-container" draggable={true}  swipeable={true} >
        {sweetsourdata}
        </Carousel>
        <h3 className='category-name'>Crunchy snacks and pasteries</h3>
<Carousel responsive={responsive2} containerClass= "brands-container" draggable={true}  swipeable={true} >
{crunchydata}
</Carousel>
        
        </div>
    
    
    )
 }