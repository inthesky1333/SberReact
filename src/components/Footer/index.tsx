import React, { FC } from "react";

import styles from "./footer.module.css";
import { IFooterProps } from "./footerProps";

export const Footer: FC<IFooterProps> = () => {
  return (
    <footer className={styles.footer}>
      <p>Created by Anton Galich</p>
      <a href={"https://github.com/inthesky1333/SberReact"}>github</a>
    </footer>
  );
};
