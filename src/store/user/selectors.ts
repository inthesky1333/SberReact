import { RootState } from "@store/index";

export const selectUser = (state: RootState) => state.user.user;
export const selectToken = (state: RootState) => state.user.token;
export const selectUserStatus = (state: RootState) => state.user.status;
