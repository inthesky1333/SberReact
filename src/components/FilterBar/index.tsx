import React, { FC } from "react";

import { useFilterParams } from "@hooks/useFilterParams";
import { useAppDispatch, useAppSelector } from "@store/index";
import { setFilter } from "@store/products/productsSlice";
import { FilterType } from "@store/products/productsTypes";
import { selectFilter } from "@store/products/selectors";
import cn from "classnames";

import styles from "./filterbar.module.css";
import { IFilterBarProps } from "./filterbarProps";

const filterButtons: { name: string; value: FilterType }[] = [
  { name: "Все", value: "all" },
  { name: "Популярные", value: "popular" },
  { name: "Новинки", value: "new" },
  { name: "Сначала дешевые", value: "lowPrice" },
  { name: "Сначала дорогие", value: "highPrice" },
  { name: "По рейтингу", value: "topRated" },
  { name: "По скидке", value: "discount" },
  { name: "Избранные", value: "favourite" },
];

export const FilterBar: FC<IFilterBarProps> = () => {
  const filter = useAppSelector(selectFilter);
  const dispatch = useAppDispatch();

  useFilterParams();
  const filterHandler = (value: FilterType) => {
    dispatch(setFilter(value));
  };

  return (
    <div className={styles.filterbar}>
      {filterButtons.map((button) => (
        <span
          key={button.value}
          onClick={() => filterHandler(button.value)}
          className={cn(styles.button, {
            [styles.active]: button.value === filter,
          })}
        >
          {button.name}
        </span>
      ))}
    </div>
  );
};
