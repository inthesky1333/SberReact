import React, { FC, useEffect } from "react";

import { Products } from "@components/Products";
import { useAppDispatch, useAppSelector } from "@store/index";
import { getProducts } from "@store/products/productsActions";
import { selectProducts } from "@store/products/selectors";

import styles from "./productspage.module.css";
import { IProductsPageProps } from "./productspageProps";

const ProductsPage: FC<IProductsPageProps> = () => {
  const products = useAppSelector(selectProducts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <>
      <div className={styles.filterBar}>Filter bar</div>
      <Products products={products} />
    </>
  );
};

export default ProductsPage;
