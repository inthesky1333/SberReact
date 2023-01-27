import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@store/index";
import { setFilter } from "@store/products/productsSlice";
import { FilterType } from "@store/products/productsTypes";
import { selectFilter } from "@store/products/selectors";
import { useSearchParams } from "react-router-dom";

export const useFilterParams = () => {
  const filter = useAppSelector(selectFilter);
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const filterFromQuery = searchParams.get("filter") as FilterType;
    if (filterFromQuery) {
      dispatch(setFilter(filterFromQuery));
    }
  }, []);

  useEffect(() => {
    if (filter) {
      setSearchParams({ filter });
    } else {
      setSearchParams({});
    }
  }, [filter]);
};
