import React, { FC } from "react";

import del from "@assets/del.png";
import { Price } from "@components/Price";
import { AmountButtons } from "@components/UI/AmountButtons";
import { Badge } from "@components/UI/Badge";
import { Button } from "@components/UI/Button";
import { Like } from "@components/UI/Like";
import { IProduct } from "@interfaces/product";
import { setToCart } from "@store/cart/cartSlice";
import { selectCartGoodCount } from "@store/cart/selectors";
import { useAppDispatch, useAppSelector } from "@store/index";
import {
  addLike,
  deleteProduct,
  removeLike,
} from "@store/products/productsActions";
import { setSelectedProduct } from "@store/products/productsSlice";
import { selectUser } from "@store/user/selectors";
import { Link } from "react-router-dom";

import styles from "./product.module.css";
import { IProductProps } from "./productProps";

export const Product: FC<IProductProps> = ({ product }) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  const isOwner = user._id === product.author._id;

  const handleDelete = () => {
    const answer = window.confirm("Вы действительно хотите удалить товар?");
    return answer ? dispatch(deleteProduct(product._id)) : null;
  };

  const productAmountIncart = useAppSelector((state) =>
    selectCartGoodCount(state, product._id)
  );

  const selectProduct = (data: IProduct) => {
    dispatch(setSelectedProduct(data));
  };

  const addLikeHandler = (productId: string) => {
    dispatch(addLike(productId));
  };

  const removeLikeHandler = (productId: string) => {
    dispatch(removeLike(productId));
  };

  const addToCartHandler = () => {
    dispatch(
      setToCart({
        id: product._id,
        price: product.price,
        discount: product.discount,
      })
    );
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
        {product.tags.map((tag) => {
          if (tag === "new") {
            return <Badge key={tag} variant={tag} text={"Новинка"} />;
          }
          if (tag === "sale") {
            return <Badge text={product.discount} variant={tag} key={tag} />;
          }
        })}
        {isOwner && (
          <img src={del} className={styles.deleteIcon} onClick={handleDelete} />
        )}
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

      {productAmountIncart ? (
        <AmountButtons
          productId={product._id}
          amount={productAmountIncart}
          price={product.price}
          maxAmount={product.stock}
          discount={product.discount}
        />
      ) : (
        <Button onClick={() => addToCartHandler()} className={styles.button}>
          В корзину
        </Button>
      )}
    </div>
  );
};
