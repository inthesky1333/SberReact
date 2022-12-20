import { IProduct } from "@interfaces/product";
import { StatusType } from "@interfaces/status";

export type FilterType =
  | "all"
  | "new"
  | "lowPrice"
  | "highPrice"
  | "discount"
  | "popular"
  | "topRated";

export interface IProductsReducer {
  products: IProduct[];
  totalProducts: number;
  status: {
    products: StatusType;
    reviews: StatusType;
  };
  error: string;
  selectedProduct: IProduct;
  searchTerm: string;
  filter: FilterType;
}
