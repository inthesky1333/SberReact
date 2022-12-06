import React, { FC } from "react";

import { Footer } from "@components/Footer";
import { Header } from "@components/Header";
import { Outlet } from "react-router-dom";

import styles from "./mainPage.module.css";
import { IMainPageProps } from "./mainpageProps";

export const MainPage: FC<IMainPageProps> = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
