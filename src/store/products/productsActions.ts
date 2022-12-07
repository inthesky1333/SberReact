import { ProductsService } from "@api/shopApis/productsService";
import { IProductResponse } from "@interfaces/product";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError, AxiosResponse } from "axios";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, { rejectWithValue }) => {
    try {
      const { data }: AxiosResponse<IProductResponse> =
        await ProductsService.getProducts();
      return { data };
    } catch (err) {
      const errTyped = err as AxiosError;
      return rejectWithValue(errTyped?.response?.data);
    }
  }
);
