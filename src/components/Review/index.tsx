import React, { FC, useEffect, useState } from "react";

import { UsersService } from "@api/shopApis/usersService";
import { Rating } from "@components/UI/Rating";
import { IAuthor } from "@interfaces/author";

import styles from "./review.module.css";
import { IReviewProps } from "./reviewProps";

export const Review: FC<IReviewProps> = ({ review }) => {
  const [author, setAuthor] = useState<IAuthor>();

  useEffect(() => {
    UsersService.getUserById(review.author).then((res) => setAuthor(res.data));
  }, []);

  return (
    <div className={styles.review}>
      <div className={styles.head}>
        <Rating rating={review.rating}></Rating>
        <span>{new Date(review.created_at).toLocaleString("ru")}</span>
      </div>
      <div className={styles.body}>
        <div className={styles.avatar}>
          <img src={author?.avatar} alt="avatar" />
        </div>
        <p>{review.text}</p>
      </div>
      <div className={styles.author}>
        <span>{author?.name}</span>
        <span>{author?.about}</span>
      </div>
    </div>
  );
};
