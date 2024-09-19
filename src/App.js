import React from 'react'
import Home from "./components/home"
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

return(
  <BrowserRouter className="over">
 <div className="navbar"> <Navbar />
 
  <Search searchQuery={searchQuery} search={search}/></div>
  
  <Routes>
  
 <Route path="/" element={<Home query= {searchQuery} />}/>
 <Route path="/:homeId" element={<HomeCategoryPage query= {searchQuery} />}/>
 <Route path="signin" element={<Signin/>}/>
    <Route path="signup" element={<Login/>}/>
    <Route path="category" element={<Cat className="category-page" query= {searchQuery}/>}/>
    <Route path="category/cart" element={<Cartpage  />}/>
    <Route path="category/cart/checkout" element={<CheckoutPage  />}/>
    <Route path="category/:name" element={<Brands query= {searchQuery}/>}/>
    <Route path="category/:name/:brandProductsId" element={<BrandProductsPage query= {searchQuery}/>}/>
    <Route path="category2/:name" element={<DrinksCategory query= {searchQuery} />}/>
    <Route path="category2/:name/:drinksName"    element={<DrinksCategoryPage query= {searchQuery} />}/>
   <Route path="category3/:crispyname" element={<CrispsCategory query= {searchQuery} />}/>
    <Route path="category3/:crispyname/:Name"    element={<CrispsCategoryPage query= {searchQuery} />}/>
    <Route path="category4/:Sweetourname"    element={<SweetSourPage query= {searchQuery}/>}/>
    <Route path="category4/:Sweetourname/:SweetName" element={<SweetSourCategoryPage query={searchQuery}/>}/>
    <Route path="category5/:crunchyname"    element={<CrunchyPage query= {searchQuery} />}/>
    <Route path="category5/:crunchyname/:crunchiesName"    element={<CrunchyCategoryPage query= {searchQuery} />}/>
 <Route path="category6/:overallName" element={<OverallCategoryPage query= {searchQuery} />}/>



    
</Routes>
</BrowserRouter>
  )
}
