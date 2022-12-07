import { IProduct } from "@interfaces/product";
import { StatusType } from "@interfaces/status";

export interface IProductsReducer {
  products: IProduct[];
  totalProducts: number;
  status: StatusType;
  error: string;
  selectedProduct: IProduct;
  searchTerm: string;
}
