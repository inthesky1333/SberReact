import React, { FC } from "react";

import { Input } from "@components/UI/Input";
import { useAppDispatch } from "@store/index";
import { setSearchTerm } from "@store/products/productsSlice";

import styles from "./searchbar.module.css";
import { ISearchBarProps } from "./searchbarProps";

export const SearchBar: FC<ISearchBarProps> = () => {
  const dispatch = useAppDispatch();

  const setSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(e.currentTarget.value.toLowerCase()));
  };

  return (
    <div className={styles.searchbar}>
      <Input
        name={"search"}
        placeholder={"Поиск"}
        className={styles.input}
        onChange={setSearch}
      />
      <span className={styles.close}>X</span>
    </div>
  );
};
