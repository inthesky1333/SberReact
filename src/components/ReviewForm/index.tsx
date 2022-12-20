import React, { FC, useState } from "react";

import { Button } from "@components/UI/Button";
import { useAppDispatch } from "@store/index";
import { addReview } from "@store/products/productsActions";

import styles from "./reviewform.module.css";
import { IReviewFormProps } from "./reviewformProps";

export const RatingForm: FC<IReviewFormProps> = ({ productId }) => {
  const [text, setText] = useState("");
  const [rating, setRating] = useState("5");
  const dispatch = useAppDispatch();

  const submitReview = () => {
    dispatch(addReview({ productId, text, rating }));
    setText("");
    setRating("");
  };

  return (
    <div className={styles.reviewform}>
      <h2>Оставить отзыв</h2>
      <input
        className={styles.rating}
        type="number"
        value={rating}
        max={5}
        min={1}
        onChange={(e) => setRating(e.currentTarget.value)}
      />
      <textarea
        rows={5}
        value={text}
        className={styles.textarea}
        onChange={(e) => setText(e.currentTarget.value)}
      ></textarea>
      <Button onClick={submitReview}>Отправить</Button>
    </div>
  );
};
