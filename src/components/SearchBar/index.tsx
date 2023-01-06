import React, { FC } from "react";

import { Input } from "@components/UI/Input";
import { useDebounce } from "@hooks/useDebounce";
import { useAppDispatch } from "@store/index";
import { setSearchTerm } from "@store/products/productsSlice";

import styles from "./searchbar.module.css";
import { ISearchBarProps } from "./searchbarProps";

export const SearchBar: FC<ISearchBarProps> = () => {
  const dispatch = useAppDispatch();

  const setSearch = useDebounce((e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(e.target.value.toLowerCase()));
  }, 500);

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
