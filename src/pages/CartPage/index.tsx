import React, { FC } from "react";

import { CartProduct } from "@components/Product/CartProduct";
import { Button } from "@components/UI/Button";
import { LocalPaths } from "@paths/loclalPath";
import {
  selectCartGoods,
  selectCartGoodsPrice,
  selectCartGoodsPriceWithDiscount,
} from "@store/cart/selectors";
import { useAppSelector } from "@store/index";
import { Link } from "react-router-dom";

import styles from "./cartpage.module.css";
import { ICartPageProps } from "./cartpageProps";

export const CartPage: FC<ICartPageProps> = () => {
  const goods = useAppSelector(selectCartGoods);
  const fullPrice = useAppSelector(selectCartGoodsPrice);
  const total = useAppSelector(selectCartGoodsPriceWithDiscount);
  const discount = fullPrice - total;

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
      <div>
        <p>Цена без скидки: {fullPrice} руб.</p>
        <p>Скидка: {discount} руб.</p>
        <p>Итого: {total} руб.</p>
        <Button>Оформить заказ</Button>
      </div>
    </div>
  );
};
