import { IProductResponse } from "@interfaces/product";
import { AxiosResponse } from "axios";

import { api } from "./shopApi";

export class ProductsService {
  static async getProducts(): Promise<AxiosResponse<IProductResponse>> {
    return api.get<IProductResponse>("");
  }
}
