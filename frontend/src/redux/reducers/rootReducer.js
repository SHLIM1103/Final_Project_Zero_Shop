import currencyReducer from "redux/reducers/currencyReducer"
import productReducer from "redux/reducers/productReducer"
import cartReducer from "redux/reducers/cartReducer"
import wishlistReducer from "redux/reducers/wishlistReducer"
import compareReducer from "redux/reducers/compareReducer"
import { combineReducers } from "redux"

const rootReducer = combineReducers({
  currencyData: currencyReducer,
  productData: productReducer,
  cartData: cartReducer,
  wishlistData: wishlistReducer,
  compareData: compareReducer
})

export default rootReducer