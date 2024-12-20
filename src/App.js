import React from 'react'
import Home from "./components/home"
import crisps from "./components/crispy-data2"
import {useDispatch} from 'react-redux'
import { AddShoppingCart } from '@mui/icons-material'
import {Link} from 'react-router-dom'
import {ADDTOCART} from "./components/cart-action"
import HomeCategoryPage from './components/homeCategoryPage'
import {Routes,Route} from "react-router-dom"
import Cat from "./components/category"
import Brands from "./components/brands"
import BrandProductsPage from "./components/brands-products-page";
import DrinksCategory from './components/drinksCategory'
import DrinksCategoryPage from "./components/drinks-category-page"
import CrispsCategory from './components/crispsCategory'
import CrispsCategoryPage from "./components/crisps-category-page"
import Cartpage from './components/Cartpage'
import {BrowserRouter} from 'react-router-dom'
import Navbar from "./components/nav"
import Login from "./components/login"
import Signin from './components/sign-in'
import Search from './components/search'
import SweetSourPage from './components/sweet-sourCategory'
import SweetSourCategoryPage from './components/sweet-sourCategoryPage'
import CrunchyPage from './components/crunchyCategory'
import CrunchyCategoryPage from './components/crunchyCategoryPage'
import CheckoutPage from './components/checkout'
import OverallCategoryPage from './components/overallCategoryPage'

export default function App(){
  const [searchQuery, setSearchQuery]=React.useState("");

    function search(event){
        setSearchQuery(event.target.value)
      
      
     }


     const dispatch=useDispatch()

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
            
const crispies=crisps.filter(item=>(
searchQuery===""? item: item.FullName.toLowerCase().includes(searchQuery.toLowerCase())
)).map(item=>{
return( 
   <div className="container">
      <Link key={item.FullName} to={`/category6/${item.FullName}`}>

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
  <BrowserRouter className="over" basename='/munchiez'>
 <div className="navbar"> <Navbar />
 
  <Search searchQuery={searchQuery} search={search}/></div>
  
  <Routes>
  <Route path="/munchieshub" element={searchQuery==="" ?<Home  />: <div className="grid-div">{crispies}</div>}/>
 <Route path="/" element={searchQuery==="" ?<Home  />: <div className="grid-div">{crispies}</div>}/>
 <Route path="/:homeId" element={searchQuery==="" ?<HomeCategoryPage  />: <div className="grid-div">{crispies}</div>}/>
 <Route path="signin" element={searchQuery==="" ? <Signin/>: <div className="grid-div">{crispies}</div>}/>
    <Route path="signup" element={searchQuery==="" ?<Login/>: <div className="grid-div">{crispies}</div>}/>
    <Route path="/category" element={searchQuery==="" ?<Cat className="category-page" />: <div className="grid-div">{crispies}</div>}/>
    <Route path="category/cart" element={searchQuery==="" ? <Cartpage  />: <div className="grid-div">{crispies}</div>}/>
    <Route path="category/cart/checkout" element={searchQuery==="" ? <CheckoutPage  />: <div className="grid-div">{crispies}</div>}/>
    <Route path="category/:name" element={searchQuery==="" ? <Brands />: <div className="grid-div">{crispies}</div>}/>
    <Route path="category/:name/:brandProductsId" element={searchQuery==="" ? <BrandProductsPage />: <div className="grid-div">{crispies}</div>}/>
    <Route path="category2/:name" element={searchQuery==="" ? <DrinksCategory  />: <div className="grid-div">{crispies}</div>}/>
    <Route path="category2/:name/:drinksName"    element={searchQuery==="" ? <DrinksCategoryPage query= {searchQuery} />: <div className="grid-div">{crispies}</div>}/>
   <Route path="category3/:crispyname" element={searchQuery==="" ? <CrispsCategory  />: <div className="grid-div">{crispies}</div>}/>
    <Route path="category3/:crispyname/:Name"    element={searchQuery==="" ?<CrispsCategoryPage  />: <div className="grid-div">{crispies}</div>}/>
    <Route path="category4/:Sweetourname"    element={searchQuery==="" ?<SweetSourPage />: <div className="grid-div">{crispies}</div>}/>
    <Route path="category4/:Sweetourname/:SweetName" element={searchQuery==="" ?<SweetSourCategoryPage />: <div className="grid-div">{crispies}</div>}/>
    <Route path="category5/:crunchyname"    element={searchQuery==="" ? <CrunchyPage />: <div className="grid-div">{crispies}</div>}/>
    <Route path="category5/:crunchyname/:crunchiesName"    element={searchQuery==="" ?<CrunchyCategoryPage  />: <div className="grid-div">{crispies}</div>}/>
 <Route path="category6/:overallName" element={searchQuery!=="" && searchQuery==="" ?<OverallCategoryPage  />: <div className="grid-div">{crispies}</div>}/>



    
</Routes>
</BrowserRouter>
  )
}
