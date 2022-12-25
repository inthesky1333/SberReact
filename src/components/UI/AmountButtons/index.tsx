import React, { FC } from "react";

import { removeFromCart, setToCart } from "@store/cart/cartSlice";
import { useAppDispatch } from "@store/index";

import styles from "./amountbuttons.module.css";
import { IAmountButtonsProps } from "./amountbuttonsProps";

export const AmountButtons: FC<IAmountButtonsProps> = ({
  productId,
  amount,
  price,
}) => {
  const dispatch = useAppDispatch();

  const addHandler = () => {
    dispatch(setToCart({ id: productId, price }));
  };

  const removeHandler = () => {
    dispatch(removeFromCart({ id: productId, price }));
  };

  return (
    <div className={styles.amountbuttons}>
      <button className={styles.button} onClick={() => removeHandler()}>
        -
      </button>
      <span className={styles.amount}>{amount}</span>
      <button className={styles.button} onClick={() => addHandler()}>
        +
      </button>
    </div>
  );
};
