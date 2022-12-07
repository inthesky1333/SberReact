import { IAuthor } from "@interfaces/author";
import { createSlice } from "@reduxjs/toolkit";
import { loginUser, me, registerUser } from "@store/user/userActions";
import { IUserReducer } from "@store/user/userTypes";
import { AxiosError } from "axios";

const initialState: IUserReducer = {
  user: {} as IAuthor,
  token: "",
  status: "idle",
  error: "",
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    removeToken(state) {
      state.token = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(registerUser.fulfilled, (state) => {
      state.status = "succeeded";
    });
    builder.addCase(registerUser.rejected, (state, { payload }) => {
      const apiError: AxiosError = payload as AxiosError;
      state.status = "failed";
      state.error = apiError.message;
    });
    //=========================================================================
    builder.addCase(loginUser.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      state.status = "succeeded";
      state.user = payload.data;
      state.token = payload.token;
    });
    builder.addCase(loginUser.rejected, (state, { payload }) => {
      const apiError: AxiosError = payload as AxiosError;
      state.status = "failed";
      state.error = apiError.message;
    });
    //=========================================================================
    builder.addCase(me.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(me.fulfilled, (state, { payload }) => {
      state.status = "succeeded";
      state.user = payload;
    });
    builder.addCase(me.rejected, (state, { payload }) => {
      const apiError: AxiosError = payload as AxiosError;
      state.status = "failed";
      state.error = apiError.message;
    });
  },
});

export const { removeToken } = UserSlice.actions;
export default UserSlice.reducer;
