import { ProductsService } from "@api/shopApis/productsService";
import { IProduct, IProductResponse } from "@interfaces/product";
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

export const addLike = createAsyncThunk(
  "products/addLike",
  async (productId: string, { rejectWithValue }) => {
    try {
      const { data }: AxiosResponse<IProduct> = await ProductsService.addLike(
        productId
      );
      return { data };
    } catch (err) {
      const errTyped = err as AxiosError;
      return rejectWithValue(errTyped?.response?.data);
    }
  }
);

export const removeLike = createAsyncThunk(
  "products/removeLike",
  async (productId: string, { rejectWithValue }) => {
    try {
      const { data }: AxiosResponse<IProduct> =
        await ProductsService.removeLike(productId);
      return { data };
    } catch (err) {
      const errTyped = err as AxiosError;
      return rejectWithValue(errTyped?.response?.data);
    }
  }
);

export const addReview = createAsyncThunk(
  "products/addReview",
  async ({ productId, text, rating }: any, { rejectWithValue }) => {
    try {
      const { data }: AxiosResponse<IProduct> = await ProductsService.addReview(
        productId,
        text,
        rating
      );
      return { data };
    } catch (err) {
      const errTyped = err as AxiosError;
      return rejectWithValue(errTyped?.response?.data);
    }
  }
);

export const deleteReview = createAsyncThunk(
  "products/deleteReview",
  async ({ productId, reviewId }: any, { rejectWithValue }) => {
    try {
      const { data }: AxiosResponse<IProduct> =
        await ProductsService.deleteReview(productId, reviewId);
      return { data };
    } catch (err) {
      const errTyped = err as AxiosError;
      return rejectWithValue(errTyped?.response?.data);
    }
  }
);
