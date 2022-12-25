import { RootState } from "@store/index";

export const selectCartGoods = (state: RootState) =>
  Object.keys(state.cart.goods);
export const selectCartGoodsCount = (state: RootState) => {
  return Object.values(state.cart.goods).reduce(
    (acc, cur) => acc + cur.amount,
    0
  );
};
export const selectCartGoodCount = (state: RootState, id: string) => {
  return state.cart.goods[id]?.amount || 0;
};

export const selectCartGoodsPrice = (state: RootState) => {
  return Object.values(state.cart.goods).reduce(
    (acc, cur) => acc + cur.price,
    0
  );
};
