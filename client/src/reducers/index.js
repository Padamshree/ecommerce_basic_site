import { combineReducers } from "redux";

import { getProductsReducer } from "./productReducers";
import { cartReducer } from "./cartReducers";

export default combineReducers({
    cart: cartReducer,
    products: getProductsReducer,
});