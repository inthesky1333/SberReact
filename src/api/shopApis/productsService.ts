import { IProduct, IProductResponse } from "@interfaces/product";
import { ApiPaths } from "@paths/apiPaths";
import { AxiosResponse } from "axios";

import { api } from "./shopApi";

export class ProductsService {
  static async getProducts(): Promise<AxiosResponse<IProductResponse>> {
    return api.get<IProductResponse>("");
  }

  static async addLike(productId: string): Promise<AxiosResponse<IProduct>> {
    return api.put<IProduct>(`${ApiPaths.likes}/${productId}`);
  }

  static async removeLike(productId: string): Promise<AxiosResponse<IProduct>> {
    return api.delete<IProduct>(`${ApiPaths.likes}/${productId}`);
  }

  static async addReview(
    productId: string,
    review: string,
    rating: string
  ): Promise<AxiosResponse<IProduct>> {
    return api.post<IProduct>(`${ApiPaths.reviews}/${productId}`, {
      text: review,
      rating,
    });
  }

  static async deleteReview(
    productId: string,
    reviewId: string
  ): Promise<AxiosResponse<IProduct>> {
    return api.delete<IProduct>(`${ApiPaths.reviews}/${productId}/${reviewId}`);
  }
}
