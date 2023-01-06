import React from "react";

import { Button } from "@components/UI/Button";
import { Input } from "@components/UI/Input";
import { INewProduct } from "@interfaces/product";
import { useAppDispatch } from "@store/index";
import { addProduct } from "@store/products/productsActions";
import { SubmitHandler, useForm } from "react-hook-form";

import styles from "./addProductForm.module.css";

export const AddProductForm = () => {
  const { handleSubmit, register } = useForm<INewProduct>();

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<INewProduct> = ({
    name,
    available = true,
    price,
    discount,
    description,
    wight,
    pictures,
    stock,
  }) => {
    dispatch(
      addProduct({
        name,
        available,
        price,
        discount,
        description,
        wight,
        pictures,
        stock,
      })
    );
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Input {...register("name")} name={"name"} placeholder={"Имя"} />
      <fieldset className={styles.fieldset}>
        <Input
          {...register("price")}
          name={"price"}
          placeholder={"Цена"}
          type={"number"}
        />
        <Input
          {...register("discount")}
          name={"discount"}
          placeholder={"Скидка"}
          type={"number"}
        />
      </fieldset>
      <fieldset className={styles.fieldset}>
        <Input {...register("wight")} name={"wight"} placeholder={"Вес"} />
        <Input
          {...register("stock")}
          name={"stock"}
          placeholder={"Количество"}
          type={"number"}
        />
      </fieldset>
      <textarea
        rows={5}
        className={styles.textarea}
        {...register("description")}
        name={"description"}
        placeholder={"Описание"}
      />
      <Input
        {...register("pictures")}
        name={"pictures"}
        placeholder={"Картинка"}
      />
      <Button type={"submit"}>Сохранить</Button>
    </form>
  );
};
