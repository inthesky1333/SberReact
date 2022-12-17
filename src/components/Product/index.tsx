import React, { FC } from "react";

import { Price } from "@components/Price";
import { Badge } from "@components/UI/Badge";
import { Button } from "@components/UI/Button";
import { Like } from "@components/UI/Like";
import { IProduct } from "@interfaces/product";
import { useAppDispatch, useAppSelector } from "@store/index";
import { addLike, removeLike } from "@store/products/productsActions";
import { setSelectedProduct } from "@store/products/productsSlice";
import { selectUser } from "@store/user/selectors";
import { Link } from "react-router-dom";

import styles from "./product.module.css";
import { IProductProps } from "./productProps";

export const Product: FC<IProductProps> = ({ product }) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  const selectProduct = (data: IProduct) => {
    dispatch(setSelectedProduct(data));
  };

  const addLikeHandler = (productId: string) => {
    dispatch(addLike(productId));
  };

  const removeLikeHandler = (productId: string) => {
    dispatch(removeLike(productId));
  };

  const likeHandler = () => {
    if (product.likes.includes(user._id)) {
      removeLikeHandler(product._id);
    } else {
      addLikeHandler(product._id);
    }
  };

  return (
    <div className={styles.product}>
      <div className={styles.head}>
        {product.tags.includes("new") ? (
          <Badge text={"новинка"} variant={"new"} />
        ) : product.discount ? (
          <Badge text={product.discount} variant={"sale"} />
        ) : null}
        <Like
          className={styles.like}
          onClick={likeHandler}
          liked={product.likes.includes(user._id)}
        />
      </div>
      <Link to={`/shop/product/${product._id}`}>
        <div className={styles.picture} onClick={() => selectProduct(product)}>
          <img src={product.pictures} alt="product" />
        </div>
      </Link>
      <Price price={product.price} discount={product.discount} />
      <div className={styles.info}>
        <div className={styles.stock}>{product.stock} шт</div>
        <div>{product.name}</div>
      </div>

      <Button className={styles.button}>В корзину</Button>
    </div>
  );
};
