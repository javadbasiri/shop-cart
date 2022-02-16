import { combineReducers } from "redux"
import productsReducer from "./products/productsReducer"
import cartReducer from "./cart/cartReducer"

export const rootReducer=combineReducers({
    productState:productsReducer,
    cartState:cartReducer,
})
