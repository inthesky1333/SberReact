import React, { FC } from "react";

import { LoginForm } from "@components/LoginForm";

import styles from "./loginPage.module.css";
import { ILoginPageProps } from "./loginpageProps";

export const LoginPage: FC<ILoginPageProps> = () => {
  return (
    <div className={styles.loginPage}>
      <LoginForm></LoginForm>
    </div>
  );
};
