import { IProduct } from "@interfaces/product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getProducts } from "@store/products/productsActions";
import { IProductsReducer } from "@store/products/productsTypes";
import { AxiosError } from "axios";

const initialState: IProductsReducer = {
  products: [],
  totalProducts: 0,
  status: "idle",
  error: "",
  selectedProduct: {} as IProduct,
};

const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSelectedProduct(state, action: PayloadAction<IProduct>) {
      state.selectedProduct = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getProducts.fulfilled, (state, { payload }) => {
      state.status = "succeeded";
      state.products = payload.data.products;
    });
    builder.addCase(getProducts.rejected, (state, { payload }) => {
      const apiError: AxiosError = payload as AxiosError;
      state.status = "failed";
      state.error = apiError.message;
    });
  },
});

export const { setSelectedProduct } = ProductsSlice.actions;
export default ProductsSlice.reducer;
