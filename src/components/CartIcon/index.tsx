import React, { FC } from "react";

import cart from "@assets/cart.svg";
import { Badge } from "@components/UI/Badge";
import { LocalPaths } from "@paths/loclalPath";
import { selectCartGoodsCount } from "@store/cart/selectors";
import { useAppSelector } from "@store/index";
import { Link } from "react-router-dom";

import styles from "./carticon.module.css";
import { ICartIconProps } from "./carticonProps";

export const CartIcon: FC<ICartIconProps> = () => {
  const goodsAmount = useAppSelector(selectCartGoodsCount);

  return (
    <div className={styles.carticon}>
      {goodsAmount ? <Badge text={goodsAmount} variant={"cart"} /> : null}
      <Link to={LocalPaths.Cart}>
        <img src={cart}></img>
      </Link>
    </div>
  );
};
