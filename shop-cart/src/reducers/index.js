import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import messageReducer from "./messageReducer";
import productReducer from "./productsReducer";

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  message: messageReducer,
});

export default rootReducer;
