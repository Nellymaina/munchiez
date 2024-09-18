import {createStore} from 'redux'
import { cartReducer } from "./cart-reducers"
const store=createStore(cartReducer)
export default store