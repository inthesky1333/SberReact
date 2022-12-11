import React, { FC } from "react";

import cn from "classnames";

import styles from "./badge.module.css";
import { IBadgeProps } from "./badgeProps";

export const Badge: FC<IBadgeProps> = ({ variant, text }) => {
  return (
    <span
      className={cn(styles.badge, {
        [styles.new]: variant === "new",
        [styles.sale]: variant === "sale",
      })}
    >
      {variant === "sale" ? `-${text}` + "%" : text}
    </span>
  );
};
