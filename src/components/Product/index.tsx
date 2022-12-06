import React, { FC } from "react";

import { Badge } from "@components/UI/Badge";
import { Like } from "@components/UI/Like";

import styles from "./product.module.css";
import { IProductProps } from "./productProps";

export const Product: FC<IProductProps> = ({ product }) => {
  return (
    <div className={styles.product}>
      <div className={styles.head}>
        {product.tags.includes("new") ? (
          <Badge text={"новинка"} variant={"new"} />
        ) : product.tags.includes("sale") ? (
          <Badge text={product.discount} variant={"sale"} />
        ) : null}
        <Like onClick={() => console.log("like")} liked />
      </div>
      <img src={product.pictures} className={styles.picture} alt="product" />
      <div>{product.price}</div>
      <div>{product.available}</div>
      <div>{product.name}</div>
    </div>
  );
};
