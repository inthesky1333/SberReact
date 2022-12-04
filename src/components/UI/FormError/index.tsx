import React, { FC } from "react";

import styles from "./formError.module.css";
import { IFormErrorProps } from "./formErrorProps";

export const FormError: FC<IFormErrorProps> = ({ error }) => {
  return (
    <div className={styles.container}>
      <span className={styles.error}>{error?.message}</span>
    </div>
  );
};
