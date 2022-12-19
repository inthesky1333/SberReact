import React, { FC, useEffect } from "react";

import { Footer } from "@components/Footer";
import { Header } from "@components/Header";
import { LocalPaths } from "@paths/loclalPath";
import { useAppDispatch } from "@store/index";
import { me } from "@store/user/userActions";
import { Navigate, Outlet } from "react-router-dom";

import styles from "./mainPage.module.css";
import { IMainPageProps } from "./mainpageProps";

export const MainPage: FC<IMainPageProps> = () => {
  const dispatch = useAppDispatch();
  const token = localStorage.getItem("token");

  useEffect(() => {
    dispatch(me());
  }, []);

  if (!token) {
    return <Navigate to={`${LocalPaths.Login}`} />;
  }

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
