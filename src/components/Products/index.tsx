import React, { FC, useEffect, useState } from "react";

import { ProductsService } from "@api/shopApis/productsService";
import { Product } from "@components/Product";
import { IProduct } from "@interfaces/product";

import styles from "./products.module.css";
import { IProductsProps } from "./productsProps";

export const Products: FC<IProductsProps> = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    ProductsService.getProducts().then((res) => {
      console.log(res.data);
      setProducts(res.data.products);
    });
  }, []);

  return (
    <div className={styles.products}>
      {products.map((product) => (
        <Product product={product} key={product._id} />
      ))}
    </div>
  );
};
