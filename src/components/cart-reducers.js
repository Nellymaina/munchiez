import {ADDTOCART} from "./cart-action";
import {REMOVEFROMCART} from "./removeaction";
import { DELETEALL } from "./deleteall-action";

 const localItems=JSON.parse(localStorage.getItem('cart'))
 const cartItems=JSON.parse(localStorage.getItem('cartnumber'))

const initialState={
  products:[],
    items:localItems? localItems:[],
    price:0,
    totalItems:cartItems? cartItems:0,
    totalNumber:0
}


export const cartReducer=(state=initialState, action)=>{
  let updatedItems
  switch(action.type){
  case ADDTOCART:
const existingItem = state.items.find(item => item.FullName === action.payload.FullName && item.name === action.payload.name);
    if (existingItem) {
      updatedItems = state.items.map(item =>
          item.FullName === action.payload.FullName ?
        {...item, quantity: item.quantity + 1 , amount:item.amount-1}
          : item
 );
    } 
    else {
      updatedItems = [...state.items, { ...action.payload, quantity: 1, amount:99}];
    }
    localStorage.setItem('cart', JSON.stringify(updatedItems))
    
    const totalNumber = updatedItems.reduce((total, item) => total + item.quantity, 0);
    const total=state.totalItems+1
    localStorage.setItem('cartnumber', JSON.stringify(total)); 

    return {
      ...state,
      items: updatedItems,
      price: state.price + action.payload.price,
      totalItems:total,
      totalNumber: totalNumber

    };
  case REMOVEFROMCART:

    updatedItems = state.items.map(item =>
       item.FullName === action.payload.FullName && item.quantity > 0 
        ? { ...item, quantity: item.quantity - 1, amount:item.amount+1 }
        : item
    ).filter(item => item.quantity > 0);
    const overall=state.totalItems>0?state.totalItems-1:0
    localStorage.setItem('cart', JSON.stringify(updatedItems))
    localStorage.setItem('cartnumber', JSON.stringify(overall)); 

    return {
      ...state,
      items: updatedItems,
      price: state.price - action.payload.price,
      totalItems: overall,
      totalNumber:state.items.quantity -=1

    };


case DELETEALL:
  updatedItems = []
  const sum=0
 localStorage.setItem('cart', JSON.stringify(updatedItems))
 localStorage.setItem('cartnumber', JSON.stringify(sum)); 

  return{
    ...state, 
    items:[],
    price:0,
    totalItems:sum,
    totalNumber:0,
  }

   

    default:
      localStorage.setItem('cartnumber', JSON.stringify(state.totalItems)); 

 return state;


}

}