import { IProduct } from "@interfaces/product";
import { AxiosResponse } from "axios";

import { api } from "./shopApi";

export class PoductsService {
  static async getProducts(): Promise<AxiosResponse<IProduct[]>> {
    return api.get<IProduct[]>("");
  }
}
