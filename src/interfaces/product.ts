import { IAuthor } from "@interfaces/author";

export interface IProduct {
  available: boolean;
  pictures: string;
  likes: string[];
  reviews: IProductsReview[];
  tags: string[];
  isPublished: boolean;
  _id: string;
  name: string;
  author: IAuthor;
  price: number;
  discount: number;
  stock: number;
  wight: string;
  description: string;
  created_at: string;
  updated_at: string;
  __v: number;
}

export interface IProductsReview {
  rating: number;
  _id: string;
  text: string;
  author: string;
  product: string;
  created_at: string;
  updated_at: string;
  __v: number;
}

export interface IProductResponse {
  total: number;
  products: IProduct[];
}
