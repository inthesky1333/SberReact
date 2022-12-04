import { IAuthor } from "@interfaces/author";
import { ILogin } from "@interfaces/login";
import { ApiPaths } from "@paths/apiPaths";
import { AxiosResponse } from "axios";

import { authApi } from "./authApi";

export class AuthService {
  static async register(
    data: ILogin
  ): Promise<AxiosResponse<{ res: IAuthor }>> {
    return authApi.post<{ res: IAuthor }>(ApiPaths.register, data);
  }

  static async login(
    data: ILogin
  ): Promise<AxiosResponse<{ data: IAuthor; token: string }>> {
    return authApi.post<{ data: IAuthor; token: string }>(ApiPaths.login, data);
  }
}
