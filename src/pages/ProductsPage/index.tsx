import React, { FC, useEffect, useMemo } from "react";

import { Products } from "@components/Products";
import { useAppDispatch, useAppSelector } from "@store/index";
import { getProducts } from "@store/products/productsActions";
import { selectProducts, selectSearchTerm } from "@store/products/selectors";

import styles from "./productspage.module.css";
import { IProductsPageProps } from "./productspageProps";

const ProductsPage: FC<IProductsPageProps> = () => {
  const products = useAppSelector(selectProducts);
  const term = useAppSelector(selectSearchTerm);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const searchedProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(term)
    );
  }, [products, term]);

  return (
    <>
      {term ? (
        <h2>{`По запросу ${term} найдено ${searchedProducts.length} товаров`}</h2>
      ) : null}
      <div className={styles.filterBar}>Filter bar</div>
      <Products products={searchedProducts} />
    </>
  );
};

export default ProductsPage;
