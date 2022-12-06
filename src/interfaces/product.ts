import { IAuthor } from "@interfaces/author";

export interface IProduct {
  available: boolean;
  pictures: string;
  likes: string[];
  reviews: any[];
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

export interface IProductResponse {
  total: number;
  products: IProduct[];
}
