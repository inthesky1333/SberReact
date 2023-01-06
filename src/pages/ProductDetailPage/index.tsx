import React, { FC } from "react";

import { Price } from "@components/Price";
import { Review } from "@components/Review";
import { RatingForm } from "@components/ReviewForm";
import { AmountButtons } from "@components/UI/AmountButtons";
import { Badge } from "@components/UI/Badge";
import { Button } from "@components/UI/Button";
import Preloader from "@components/UI/Preloader";
import { getPriceWithDiscount } from "@helpers/getPriceWithDiscount";
import { setToCart } from "@store/cart/cartSlice";
import { selectCartGoodCount } from "@store/cart/selectors";
import { useAppDispatch, useAppSelector } from "@store/index";
import {
  selectReviewStatus,
  selectSelectedProduct,
} from "@store/products/selectors";

import styles from "./productdetailpage.module.css";
import { IProductDetailPageProps } from "./productdetailpageProps";

const ProductDetailPage: FC<IProductDetailPageProps> = () => {
  const product = useAppSelector(selectSelectedProduct);
  const status = useAppSelector(selectReviewStatus);
  const dispatch = useAppDispatch();

  const productAmountIncart = useAppSelector((state) =>
    selectCartGoodCount(state, product._id)
  );

  const price = getPriceWithDiscount(product.price, product.discount);

  const addToCartHandler = () => {
    dispatch(
      setToCart({
        id: product._id,
        price,
      })
    );
  };

  return (
    <div className={styles.productDetailPage}>
      <h1 className={styles.name}>
        {product?.name} {product.wight}
      </h1>
      {product.tags.includes("new") ? (
        <Badge text={"новинка"} variant={"new"} />
      ) : product.tags.includes("sale") ? (
        <Badge text={product.discount} variant={"sale"} />
      ) : null}
      <div className={styles.product}>
        <div className={styles.picture}>
          <img src={product?.pictures} alt="product" />
          <div className={styles.priceInfo}>
            <span>{product.stock} шт</span>
            <Price price={product.price} discount={product.discount} />
          </div>
        </div>
        <div className={styles.info}>
          {productAmountIncart ? (
            <AmountButtons
              productId={product._id}
              amount={productAmountIncart}
              price={price}
              maxAmount={product.stock}
            />
          ) : (
            <Button
              onClick={() => addToCartHandler()}
              className={styles.button}
            >
              В корзину
            </Button>
          )}
        </div>
      </div>
      <RatingForm productId={product._id} />
      {product.reviews.length ? (
        <div className={styles.reviews}>
          <h2>Отзывы</h2>
          {status === "loading" ? (
            <Preloader />
          ) : (
            [...product.reviews]
              .reverse()
              .map((review) => <Review key={review._id} review={review} />)
          )}
        </div>
      ) : null}
    </div>
  );
};

export default ProductDetailPage;
