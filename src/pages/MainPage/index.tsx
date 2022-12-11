import React, { FC, useEffect } from "react";

import { Footer } from "@components/Footer";
import { Header } from "@components/Header";
import { useAppDispatch } from "@store/index";
import { me } from "@store/user/userActions";
import { Outlet } from "react-router-dom";

import styles from "./mainPage.module.css";
import { IMainPageProps } from "./mainpageProps";

export const MainPage: FC<IMainPageProps> = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(me());
  }, []);

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
