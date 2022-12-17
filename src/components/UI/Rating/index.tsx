import React, { FC } from "react";

import styles from "./rating.module.css";
import { IRatingProps } from "./ratingProps";

export const Rating: FC<IRatingProps> = ({ rating }) => {
  const ratingArr = Array(rating).fill("★");
  return (
    <div className={styles.rating}>
      {ratingArr.map((star, index) => {
        return <span key={index}>{star}</span>;
      })}
    </div>
  );
};
