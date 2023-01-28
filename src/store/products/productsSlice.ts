import { IProduct } from "@interfaces/product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  addLike,
  addProduct,
  addReview,
  deleteProduct,
  deleteReview,
  getProducts,
  removeLike,
} from "@store/products/productsActions";
import { FilterType, IProductsReducer } from "@store/products/productsTypes";
import { AxiosError } from "axios";

const initialState: IProductsReducer = {
  products: [],
  totalProducts: 0,
  status: {
    products: "idle",
    reviews: "idle",
  },
  error: "",
  selectedProduct: {} as IProduct,
  searchTerm: "",
  filter: "all",
};

const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSelectedProduct(state, action: PayloadAction<IProduct>) {
      state.selectedProduct = action.payload;
    },
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
    setFilter(state, action: PayloadAction<FilterType>) {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.status.products = "loading";
    });
    builder.addCase(getProducts.fulfilled, (state, { payload }) => {
      state.status.products = "succeeded";
      state.products = payload.data.products;
    });
    builder.addCase(getProducts.rejected, (state, { payload }) => {
      const apiError: AxiosError = payload as AxiosError;
      state.status.products = "failed";
      state.error = apiError.message;
    });
    //=========================================================================
    builder.addCase(addProduct.pending, (state) => {
      state.status.products = "loading";
    });
    builder.addCase(addProduct.fulfilled, (state, { payload }) => {
      state.status.products = "succeeded";
      state.products = [payload.data, ...state.products];
    });
    builder.addCase(addProduct.rejected, (state, { payload }) => {
      const apiError: AxiosError = payload as AxiosError;
      state.status.products = "failed";
      state.error = apiError.message;
    });
    //=========================================================================
    builder.addCase(addLike.fulfilled, (state, { payload }) => {
      state.products = state.products.map((product) => {
        if (product._id === payload.data._id) {
          return payload.data;
        }
        return product;
      });
    });
    builder.addCase(removeLike.fulfilled, (state, { payload }) => {
      state.products = state.products.map((product) => {
        if (product._id === payload.data._id) {
          return payload.data;
        }
        return product;
      });
    });
    //=========================================================================
    builder.addCase(addReview.pending, (state) => {
      state.status.reviews = "loading";
    });
    builder.addCase(addReview.fulfilled, (state, { payload }) => {
      state.selectedProduct = payload.data;
      state.status.reviews = "succeeded";
    });
    builder.addCase(deleteReview.pending, (state) => {
      state.status.reviews = "loading";
    });
    builder.addCase(deleteReview.fulfilled, (state, { payload }) => {
      state.selectedProduct = payload.data;
      state.status.reviews = "succeeded";
    });
    //=========================================================================
    builder.addCase(deleteProduct.pending, (state) => {
      state.status.products = "loading";
    });
    builder.addCase(deleteProduct.fulfilled, (state, { payload }) => {
      state.products = state.products.filter(
        (product) => product._id !== payload.productId
      );
      state.status.products = "succeeded";
    });
    builder.addCase(deleteProduct.rejected, (state, { payload }) => {
      const apiError: AxiosError = payload as AxiosError;
      state.status.products = "failed";
      state.error = apiError.message;
    });
  },
});

export const { setSelectedProduct, setSearchTerm, setFilter } =
  ProductsSlice.actions;
export default ProductsSlice.reducer;
