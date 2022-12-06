import React, { FC } from "react";

import styles from "./footer.module.css";
import { IFooterProps } from "./footerProps";

export const Footer: FC<IFooterProps> = () => {
  return <footer className={styles.footer}></footer>;
};
