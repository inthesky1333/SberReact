import React, { FC, useEffect } from "react";

import { LoginForm } from "@components/LoginForm";
import { LocalPaths } from "@paths/loclalPath";
import { useNavigate } from "react-router";

import styles from "./loginPage.module.css";
import { ILoginPageProps } from "./loginpageProps";

export const LoginPage: FC<ILoginPageProps> = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate(`${LocalPaths.Main}`);
    }
  }, []);

  return (
    <div className={styles.loginPage}>
      <LoginForm></LoginForm>
    </div>
  );
};
