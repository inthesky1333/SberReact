import React, { FC, useEffect } from "react";

import { PoductsService } from "@api/shopApis/productsService";

import styles from "./mainpage.module.css";
import { IMainPageProps } from "./mainpageProps";

export const MainPage: FC<IMainPageProps> = () => {
  useEffect(() => {
    PoductsService.getProducts().then((res) => {
      console.log(res);
    });
  }, []);

  return <div className={styles.mainpage}>mainpage</div>;
};
