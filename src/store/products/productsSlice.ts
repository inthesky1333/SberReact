import { IProduct } from "@interfaces/product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getProducts } from "@store/products/productsActions";
import { FilterType, IProductsReducer } from "@store/products/productsTypes";
import { AxiosError } from "axios";

const initialState: IProductsReducer = {
  products: [],
  totalProducts: 0,
  status: "idle",
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

export const { setSelectedProduct, setSearchTerm, setFilter } =
  ProductsSlice.actions;
export default ProductsSlice.reducer;
