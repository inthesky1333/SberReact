import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@store/index";

const selectCartItems = (state: RootState) => state.cart.goods;

export const selectCartGoods = createSelector(selectCartItems, (items) => {
  return Object.keys(items);
});

export const selectCartGoodsCount = createSelector(selectCartGoods, (items) => {
  return items.length;
});

export const selectCartGoodCount = createSelector(
  [selectCartItems, (state, id: string) => id],
  (items, id) => {
    return items[id]?.amount || 0;
  }
);

export const selectCartGoodsPrice = createSelector(selectCartItems, (items) => {
  return Object.values(items).reduce((acc, item) => {
    acc += item.price;
    return acc;
  }, 0);
});
