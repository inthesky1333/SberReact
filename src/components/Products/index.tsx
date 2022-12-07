import React, { FC } from "react";

import { Product } from "@components/Product";

import styles from "./products.module.css";
import { IProductsProps } from "./productsProps";

export const Products: FC<IProductsProps> = ({ products }) => {
  if (!products.length) {
    return (
      <div className={styles.products}>
        <span>Нет товаров</span>
      </div>
    );
  }
  return (
    <div className={styles.products}>
      {products.map((product) => (
        <Product product={product} key={product._id} />
      ))}
    </div>
  );
};
