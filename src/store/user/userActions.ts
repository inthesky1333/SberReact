import { AuthService } from "@api/authApis/authService";
import { IAuthor } from "@interfaces/author";
import { ILogin } from "@interfaces/login";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError, AxiosResponse } from "axios";

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (data: ILogin, { rejectWithValue }) => {
    try {
      await AuthService.register(data);
    } catch (err) {
      const errTyped = err as AxiosError;
      return rejectWithValue(errTyped?.response?.data);
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (data: ILogin, { rejectWithValue }) => {
    try {
      const res: AxiosResponse<{ data: IAuthor; token: string }> =
        await AuthService.login(data);
      localStorage.setItem("token", res.data.token);
      return res.data;
    } catch (err) {
      const errTyped = err as AxiosError;
      return rejectWithValue(errTyped?.response?.data);
    }
  }
);

export const me = createAsyncThunk(
  "user/me",
  async (_, { rejectWithValue }) => {
    try {
      const res: AxiosResponse<IAuthor> = await AuthService.me();
      return res.data;
    } catch (err) {
      const errTyped = err as AxiosError;
      return rejectWithValue(errTyped?.response?.data);
    }
  }
);
