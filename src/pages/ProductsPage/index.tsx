import React, { FC, useEffect, useMemo } from "react";

import { FilterBar } from "@components/FilterBar";
import { Products } from "@components/Products";
import Preloader from "@components/UI/Preloader";
import { useAppDispatch, useAppSelector } from "@store/index";
import { getProducts } from "@store/products/productsActions";
import {
  selectFilter,
  selectProducts,
  selectProductsStatus,
  selectSearchTerm,
} from "@store/products/selectors";
import { selectUser } from "@store/user/selectors";

import { IProductsPageProps } from "./productspageProps";

const ProductsPage: FC<IProductsPageProps> = () => {
  const products = useAppSelector(selectProducts);
  const status = useAppSelector(selectProductsStatus);
  const term = useAppSelector(selectSearchTerm);
  const filter = useAppSelector(selectFilter);
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const filteredProducts = useMemo(() => {
    return {
      all: [...products],
      popular: [...products].sort(
        (a, b) => a.reviews.length - b.reviews.length
      ),
      new: [...products].filter((product) => product.tags.includes("new")),
      lowPrice: [...products].sort((a, b) => a.price - b.price),
      highPrice: [...products].sort((a, b) => b.price - a.price),
      topRated: [...products].sort(
        (a, b) =>
          a.reviews.reduce((acc, cur) => {
            acc += cur.rating;
            return acc;
          }, 0) /
            a.reviews.length -
          b.reviews.reduce((acc, cur) => {
            acc += cur.rating;
            return acc;
          }, 0) /
            b.reviews.length
      ),
      discount: [...products].sort((a, b) => b.discount - a.discount),
      favourite: [...products].filter((product) =>
        product.likes.includes(user._id)
      ),
    };
  }, [products]);

  const searchedProducts = useMemo(() => {
    return filteredProducts[filter].filter((product) =>
      product.name.toLowerCase().includes(term)
    );
  }, [products, term, filter]);

  return (
    <>
      {term ? (
        <h2>{`???? ?????????????? ${term} ?????????????? ${searchedProducts.length} ??????????????`}</h2>
      ) : null}
      <FilterBar />
      {status === "loading" ? (
        <Preloader />
      ) : (
        <Products products={searchedProducts} />
      )}
    </>
  );
};

export default ProductsPage;
