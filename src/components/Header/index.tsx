import React, { FC } from "react";

import cart from "@assets/cart.svg";
import like from "@assets/like.svg";
import logo from "@assets/logo.svg";
import logout from "@assets/logout.png";
import profile from "@assets/profile.svg";
import { SearchBar } from "@components/SearchBar";
import { LocalPaths } from "@paths/loclalPath";
import { useAppDispatch } from "@store/index";
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

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} />
      </div>
      <SearchBar />
      <div className={styles.iconBox}>
        <img src={cart}></img>
        <img src={like}></img>
        <Link to={"/shop/profile"}>
          <img src={profile}></img>
        </Link>
        <Link to={LocalPaths.Login}>
          <img src={logout} onClick={logoutHandler}></img>
        </Link>
      </div>
    </header>
  );
};
