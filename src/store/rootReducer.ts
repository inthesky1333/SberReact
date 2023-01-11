import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "@store/cart/cartSlice";
import productsReducer from "@store/products/productsSlice";
import userReducer from "@store/user/userSlice";
import { persistReducer } from "redux-persist";
import sessionStorage from "redux-persist/lib/storage";

const productsPersistConfig = {
  key: "products",
  storage: sessionStorage,
};
const userPersistConfig = {
  key: "user",
  storage: sessionStorage,
};
const cartPersistConfig = {
  key: "cart",
  storage: sessionStorage,
};

export const rootReducer = combineReducers({
  products: persistReducer(productsPersistConfig, productsReducer),
  user: persistReducer(userPersistConfig, userReducer),
  cart: persistReducer(cartPersistConfig, cartReducer),
});
