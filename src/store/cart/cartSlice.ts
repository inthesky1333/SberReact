import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartReducer } from "@store/cart/cartTypes";

const initialState: ICartReducer = {
  goods: {},
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setToCart(state, action: PayloadAction<{ id: string; price: number }>) {
      state.goods[action.payload.id] = state.goods[action.payload.id]
        ? {
            amount: state.goods[action.payload.id].amount + 1,
            price: state.goods[action.payload.id].price + action.payload.price,
          }
        : { amount: 1, price: action.payload.price };
    },
    removeFromCart(
      state,
      action: PayloadAction<{ id: string; price: number }>
    ) {
      if (state.goods[action.payload.id].amount === 1) {
        delete state.goods[action.payload.id];
      } else {
        state.goods[action.payload.id] = {
          amount: state.goods[action.payload.id].amount - 1,
          price: state.goods[action.payload.id].price - action.payload.price,
        };
      }
    },
    deleteFromCart(state, action: PayloadAction<string>) {
      delete state.goods[action.payload];
    },
  },
  extraReducers: () => {},
});

export const { setToCart, removeFromCart, deleteFromCart } = CartSlice.actions;
export default CartSlice.reducer;
