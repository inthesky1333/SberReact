import React, { FC } from "react";

import { CartProduct } from "@components/Product/CartProduct";
import { Button } from "@components/UI/Button";
import { LocalPaths } from "@paths/loclalPath";
import { selectCartGoods, selectCartGoodsPrice } from "@store/cart/selectors";
import { useAppSelector } from "@store/index";
import { Link } from "react-router-dom";

import styles from "./cartpage.module.css";
import { ICartPageProps } from "./cartpageProps";

export const CartPage: FC<ICartPageProps> = () => {
  const goods = useAppSelector(selectCartGoods);
  const total = useAppSelector(selectCartGoodsPrice);

  return (
    <div className={styles.cartpage}>
      <div className={styles.container}>
        {goods.length ? (
          goods.map((good) => <CartProduct key={good} productId={good} />)
        ) : (
          <div className={styles.empty}>
            <span>Корзина пуста</span>
            <Link to={LocalPaths.Products}>
              <Button>Вернуться к покупкам</Button>
            </Link>
            <Link to={LocalPaths.Profile}>
              <Button>Вернуться в профиль</Button>
            </Link>
          </div>
        )}
      </div>
      <div className={styles.total}>
        <span>Итого: {total} руб.</span>
        <Button>Оформить заказ</Button>
      </div>
    </div>
  );
};
