import React, { FC } from "react";

import { Input } from "@components/UI/Input";

import styles from "./searchbar.module.css";
import { ISearchBarProps } from "./searchbarProps";

export const SearchBar: FC<ISearchBarProps> = () => {
  return (
    <div className={styles.searchbar}>
      <Input name={"search"} placeholder={"Поиск"} className={styles.input} />
      <span className={styles.close}>X</span>
    </div>
  );
};
