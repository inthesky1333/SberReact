import React, { FC } from "react";

import { Rating } from "@components/UI/Rating";

import styles from "./review.module.css";
import { IReviewProps } from "./reviewProps";

export const Review: FC<IReviewProps> = ({ review }) => {
  return (
    <div className={styles.review}>
      <div className={styles.head}>
        <Rating rating={review.rating}></Rating>
        <span>{new Date(review.created_at).toLocaleString("ru")}</span>
      </div>
      <div className={styles.body}>
        <p>{review.text}</p>
      </div>
      <span>{review.author}</span>
    </div>
  );
};
