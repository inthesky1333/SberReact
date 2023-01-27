import React from "react";

import { Button } from "@components/UI/Button";
import { FormError } from "@components/UI/FormError";
import { Input } from "@components/UI/Input";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { INewProduct } from "@interfaces/product";
import { productValidationSchema } from "@pages/ProductsPage/addProductForm/productValidationSchema";
import { useAppDispatch } from "@store/index";
import { addProduct } from "@store/products/productsActions";
import { SubmitHandler, useForm } from "react-hook-form";

import styles from "./addProductForm.module.css";

export const AddProductForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm<INewProduct>({
    resolver: yupResolver(productValidationSchema),
    mode: "onChange",
  });

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

  console.log(errors, isValid);
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Input {...register("name")} name={"name"} placeholder={"Имя"} />
      <FormError error={errors.name} />
      <Input
        {...register("price")}
        name={"price"}
        placeholder={"Цена"}
        type={"number"}
      />
      <FormError error={errors.price} />
      <Input
        {...register("discount")}
        name={"discount"}
        placeholder={"Скидка"}
        type={"number"}
      />
      <FormError error={errors.discount} />

      <Input {...register("wight")} name={"wight"} placeholder={"Вес"} />
      <Input
        {...register("stock")}
        name={"stock"}
        placeholder={"Количество"}
        type={"number"}
      />
      <FormError error={errors.stock} />

      <textarea
        rows={5}
        className={styles.textarea}
        {...register("description")}
        name={"description"}
        placeholder={"Описание"}
      />
      <FormError error={errors.description} />
      <Input
        {...register("pictures")}
        name={"pictures"}
        placeholder={"Картинка"}
      />
      <FormError error={errors.pictures} />
      <Button type={"submit"} disabled={!isValid}>
        Сохранить
      </Button>
    </form>
  );
};
