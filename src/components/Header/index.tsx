import React, { FC } from "react";

import like from "@assets/like.svg";
import logo from "@assets/logo.svg";
import logout from "@assets/logout.png";
import profile from "@assets/profile.svg";
import { CartIcon } from "@components/CartIcon";
import { SearchBar } from "@components/SearchBar";
import { LocalPaths } from "@paths/loclalPath";
import { useAppDispatch } from "@store/index";
import { setFilter } from "@store/products/productsSlice";
import { FilterType } from "@store/products/productsTypes";
import { removeToken } from "@store/user/userSlice";
import { Link } from "react-router-dom";

import styles from "./header.module.css";
import { IHeaderProps } from "./headerProps";

export const Header: FC<IHeaderProps> = () => {
  const dispatch = useAppDispatch();
  const logoutHandler = () => {
    localStorage.removeItem("token");
    dispatch(removeToken());
  };

  const filterHandler = (value: FilterType) => {
    dispatch(setFilter(value));
  };

  return (
    <header className={styles.header}>
      <Link to={LocalPaths.Products} onClick={() => filterHandler("all")}>
        <div className={styles.logo}>
          <img src={logo} />
        </div>
      </Link>
      <SearchBar />
      <div className={styles.iconBox}>
        <CartIcon />
        <img
          onClick={() => filterHandler("favourite")}
          style={{ cursor: "pointer" }}
          src={like}
        ></img>
        <Link to={LocalPaths.Profile}>
          <img src={profile}></img>
        </Link>
        <Link to={LocalPaths.Login}>
          <img src={logout} onClick={logoutHandler}></img>
        </Link>
      </div>
    </header>
  );
};
