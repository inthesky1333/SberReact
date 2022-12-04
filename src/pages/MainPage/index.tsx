import React, { FC } from "react";

import styles from "./mainpage.module.css";
import { IMainPageProps } from "./mainpageProps";

export const MainPage: FC<IMainPageProps> = () => {
  return <div className={styles.mainpage}>mainpage</div>;
};
