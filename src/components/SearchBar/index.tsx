import React, { FC, useRef } from "react";

import { Input } from "@components/UI/Input";
import { useDebounce } from "@hooks/useDebounce";
import { useAppDispatch } from "@store/index";
import { setSearchTerm } from "@store/products/productsSlice";

import styles from "./searchbar.module.css";
import { ISearchBarProps } from "./searchbarProps";

export const SearchBar: FC<ISearchBarProps> = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const setSearch = useDebounce((e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(e.target.value.toLowerCase()));
  }, 500);

  const clearSearch = () => {
    dispatch(setSearchTerm(""));
    inputRef.current!.value = "";
  };

  return (
    <div className={styles.searchbar}>
      <Input
        ref={inputRef}
        name={"search"}
        placeholder={"Поиск"}
        className={styles.input}
        onChange={setSearch}
      />
      <span className={styles.close} onClick={clearSearch}>
        X
      </span>
    </div>
  );
};
