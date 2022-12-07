import { RootState } from "@store/index";

export const selectProducts = (state: RootState) => state.products.products;
export const selectSearchTerm = (state: RootState) => state.products.searchTerm;
export const selectSelectedProduct = (state: RootState) =>
  state.products.selectedProduct;
