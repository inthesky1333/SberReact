import React, { FC, useEffect, useState } from "react";

import { ProductsService } from "@api/shopApis/productsService";
import { Price } from "@components/Price";
import { AmountButtons } from "@components/UI/AmountButtons";
import { Badge } from "@components/UI/Badge";
import Preloader from "@components/UI/Preloader";
import { IProduct } from "@interfaces/product";
import { deleteFromCart } from "@store/cart/cartSlice";
import { selectCartGoodCount } from "@store/cart/selectors";
import { useAppDispatch, useAppSelector } from "@store/index";
import { setSelectedProduct } from "@store/products/productsSlice";
import { Link } from "react-router-dom";

import styles from "./cartproduct.module.css";
import { ICartProductProps } from "./cartproductProps";

export const CartProduct: FC<ICartProductProps> = ({ productId }) => {
  const dispatch = useAppDispatch();

  const [product, setProduct] = useState<IProduct | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const productAmountIncart = useAppSelector((state) =>
    selectCartGoodCount(state, productId)
  );

  const selectProduct = (data: IProduct) => {
    dispatch(setSelectedProduct(data));
  };

  const deleteProduct = () => {
    dispatch(deleteFromCart(productId));
  };

  useEffect(() => {
    setIsLoading(true);
    ProductsService.getProductById(productId)
      .then((data) => {
        setProduct(data.data);
      })
      .then(() => {
        setIsLoading(false);
      });
  }, [productId]);

  if (isLoading) {
    return <Preloader />;
  }

  if (product) {
    return (
      <div className={styles.cartproduct}>
        <span className={styles.close} onClick={deleteProduct}>
          X
        </span>
        <div className={styles.left}>
          {product?.tags.includes("new") ? (
            <Badge text={"новинка"} variant={"new"} />
          ) : product?.discount ? (
            <Badge text={product.discount} variant={"sale"} />
          ) : null}
          <Link to={`/shop/product/${product._id}`}>
            <div
              className={styles.picture}
              onClick={() => selectProduct(product)}
            >
              <img src={product.pictures} alt="product" />
            </div>
          </Link>
        </div>
        <Price price={product.price} discount={product.discount} />
        <div>{product.name}</div>

        <div className={styles.amount}>
          <AmountButtons
            productId={product._id}
            amount={productAmountIncart}
            price={
              product.discount
                ? product.price - (product.discount / 100) * product.price
                : product.price
            }
            maxAmount={product.stock}
          />
        </div>
      </div>
    );
  } else {
    return null;
  }
};
