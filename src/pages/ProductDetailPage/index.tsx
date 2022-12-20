import React, { FC } from "react";

import { Price } from "@components/Price";
import { Review } from "@components/Review";
import { RatingForm } from "@components/ReviewForm";
import { Badge } from "@components/UI/Badge";
import { Button } from "@components/UI/Button";
import Preloader from "@components/UI/Preloader";
import { useAppSelector } from "@store/index";
import {
  selectReviewStatus,
  selectSelectedProduct,
} from "@store/products/selectors";

import styles from "./productdetailpage.module.css";
import { IProductDetailPageProps } from "./productdetailpageProps";

const ProductDetailPage: FC<IProductDetailPageProps> = () => {
  const product = useAppSelector(selectSelectedProduct);
  const status = useAppSelector(selectReviewStatus);

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
          <div className={styles.description}>{product?.description}</div>
          <Button className={styles.button}>В корзину</Button>
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
