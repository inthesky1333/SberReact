import React, { FC, useEffect, useState } from "react";

import styles from "./price.module.css";
import { IPriceProps } from "./priceProps";

export const Price: FC<IPriceProps> = ({ price, discount }) => {
  const [newPrice, setNewPrice] = useState<number>(0);

  useEffect(() => {
    if (discount) {
      setNewPrice(price - (price * discount) / 100);
    }
  }, [price, discount]);

  return (
    <div className={styles.price}>
      {discount ? <span className={styles.oldPrice}>{price}</span> : null}
      <span className={styles.newPrice}>{discount ? newPrice : price}</span>
    </div>
  );
};
