import { combineReducers } from "@reduxjs/toolkit";
import productsReducer from "@store/products/productsSlice";
import userReducer from "@store/user/userSlice";

export const rootReducer = combineReducers({
  products: productsReducer,
  user: userReducer,
});
