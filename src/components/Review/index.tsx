import React, { FC, useEffect, useMemo, useState } from "react";

import { UsersService } from "@api/shopApis/usersService";
import { Rating } from "@components/UI/Rating";
import { IAuthor } from "@interfaces/author";
import { useAppDispatch, useAppSelector } from "@store/index";
import { deleteReview } from "@store/products/productsActions";
import { selectUser } from "@store/user/selectors";

import styles from "./review.module.css";
import { IReviewProps } from "./reviewProps";

export const Review: FC<IReviewProps> = ({ review }) => {
  const [author, setAuthor] = useState<IAuthor>();
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  useEffect(() => {
    UsersService.getUserById(review.author).then((res) => setAuthor(res.data));
  }, []);

  const isAuthor = useMemo(() => {
    return user?._id === review.author;
  }, [user]);

  const handleDeleteReview = () => {
    dispatch(deleteReview({ productId: review.product, reviewId: review._id }));
  };

  return (
    <div className={styles.review}>
      <div className={styles.head}>
        <Rating rating={review.rating}></Rating>
        <span>{new Date(review.created_at).toLocaleString("ru")}</span>
        {isAuthor && (
          <span className={styles.delete} onClick={handleDeleteReview}>
            X
          </span>
        )}
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
