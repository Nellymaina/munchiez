import {React, useState, useEffect} from 'react'
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
import './index.css';
import './App.css';

export default function App(){
  const [query, setQuery]=useState("");

  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  const suggestion = crisps.filter(item=>item.subname2 && item.FullName &&item.namey &&item.subname3 && item.subname)
  const suggestions=[...new Set(suggestion.flatMap(item=>[item.namey, item.FullName, item.subname2, item.subname3, item.subname]))]

  const handleQuery = (event) => {
    const value = event.target.value;
    setQuery(value);

    if (value) {
      const filtered = suggestions.filter((item) =>
        item.toLowerCase().startsWith(value.toLowerCase())
      );
      setFilteredSuggestions(filtered);
    } else {
      setFilteredSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    setFilteredSuggestions([]);
  };



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
query===""? item: item.FullName.toLowerCase().includes(query.toLowerCase())
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




  const [theme, setTheme] = useState("light"); 

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

return(
  <BrowserRouter className="over" basename='/munchiez'>
    
  <div className="navbar" > 
  <Navbar mode={toggleTheme} theme={theme}/>
  
<Search searchQuery={query} search={handleQuery} filteredSuggestions={filteredSuggestions} handleSuggestionClick={handleSuggestionClick}/>
</div>
  
  <Routes>
   
   <Route path='/search' element={query==="" ?<></>: <div className="grid-div">{crispies}</div> }/>
 <Route  path="/" element={<Home  />}/>
 <Route path="/:homeId" element={<HomeCategoryPage  />}/>
 <Route path="signin" element={ <Signin/>}/>
    <Route path="signup" element={<Login/>}/>
    <Route path="/category" element={<Cat className="category-page" />}/>
    <Route path="category/cart" element={<Cartpage  />}/>
    <Route path="category/cart/checkout" element={<CheckoutPage  />}/>
    <Route path="category/:name" element={ <Brands />} />
    <Route path="category/:name/:brandProductsId" element={<BrandProductsPage />} />
    <Route path="category2/:name" element={ <DrinksCategory  />}/>
    <Route path="category2/:name/:drinksName"    element={<DrinksCategoryPage  />}/>
   <Route path="category3/:crispyname" element={<CrispsCategory  />}/>
    <Route path="category3/:crispyname/:Name"    element={<CrispsCategoryPage  />}/>
    <Route path="category4/:Sweetourname"    element={<SweetSourPage />}/>
    <Route path="category4/:Sweetourname/:SweetName" element={<SweetSourCategoryPage />}/>
    <Route path="category5/:crunchyname"    element={<CrunchyPage />}/>
    <Route path="category5/:crunchyname/:crunchiesName"    element={<CrunchyCategoryPage  />}/>
 <Route path="category6/:overallName" element={<OverallCategoryPage  />}/>    
</Routes>
</BrowserRouter>
  )
}
