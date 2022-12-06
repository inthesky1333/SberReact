import React, { FC } from "react";

import { ReactComponent as Icon } from "@assets/like.svg";
import cn from "classnames";

import styles from "./like.module.css";
import { ILikeProps } from "./likeProps";

export const Like: FC<ILikeProps> = ({ liked, onClick }) => {
  return (
    <>
      <Icon
        onClick={onClick}
        className={cn(styles.like, {
          [styles.active]: liked,
        })}
      />
    </>
  );
};
