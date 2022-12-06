import React, { FC } from "react";

import cart from "@assets/cart.svg";
import like from "@assets/like.svg";
import logo from "@assets/logo.svg";
import profile from "@assets/profile.svg";

import styles from "./header.module.css";
import { IHeaderProps } from "./headerProps";

export const Header: FC<IHeaderProps> = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} />
      </div>
      <div>search</div>
      <div className={styles.iconBox}>
        <img src={cart}></img>
        <img src={like}></img>
        <img src={profile}></img>
      </div>
    </header>
  );
};
