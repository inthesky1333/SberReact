import React, { FC } from "react";

import cn from "classnames";

import styles from "./badge.module.css";
import { IBadgeProps } from "./badgeProps";

export const Badge: FC<IBadgeProps> = ({ variant, text, className }) => {
  return (
    <span
      className={cn(styles.badge, className, {
        [styles.new]: variant === "new",
        [styles.sale]: variant === "sale",
        [styles.cart]: variant === "cart",
      })}
    >
      {variant === "sale" ? `-${text}` + "%" : text}
    </span>
  );
};
