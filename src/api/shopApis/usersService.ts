import { IAuthor } from "@interfaces/author";
import { ApiPaths } from "@paths/apiPaths";
import { AxiosResponse } from "axios";

import { api } from "./shopApi";

export class UsersService {
  static async getUserById(userId: string): Promise<AxiosResponse<IAuthor>> {
    return api.get<IAuthor>(`${ApiPaths.userById}/${userId}`);
  }
}
