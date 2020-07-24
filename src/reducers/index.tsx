import { combineReducers } from 'redux';
import homeReducer from "./HomeReducer";
import cartReducer from "./CartReducer";

export default combineReducers({
    home: homeReducer,
    cartshop: cartReducer,
});