import { IAuthor } from "@interfaces/author";
import { ApiPaths } from "@paths/apiPaths";
import { AxiosResponse } from "axios";

import { api } from "../shopApis/shopApi";

export class UsersService {
  static async getUserById(userId: string): Promise<AxiosResponse<IAuthor>> {
    return api.get<IAuthor>(`${ApiPaths.userById}/${userId}`);
  }

  static async editUserName(
    name: string,
    about: string
  ): Promise<AxiosResponse<IAuthor>> {
    return api.patch<IAuthor>(ApiPaths.userName, { name, about });
  }

  static async editUserAvatar(avatar: string): Promise<AxiosResponse<IAuthor>> {
    return api.patch<IAuthor>(ApiPaths.userAvatar, { avatar });
  }
}
