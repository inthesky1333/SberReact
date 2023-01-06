import React from "react";

import { profileValidationSchema } from "@components/Profile/ProfileForm/profileValidationSchema";
import { Button } from "@components/UI/Button";
import { Input } from "@components/UI/Input";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { useAppDispatch } from "@store/index";
import { editAvatar, editName } from "@store/user/userActions";
import { SubmitHandler, useForm } from "react-hook-form";

import styles from "./profileForm.module.css";
import { IProfileForm } from "./profileFormProps";

export const ProfileForm = () => {
  const {
    handleSubmit,
    register,
    formState: { isValid },
  } = useForm<IProfileForm>({
    resolver: yupResolver(profileValidationSchema),
    mode: "all",
  });

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<IProfileForm> = ({ name, about, avatar }) => {
    dispatch(editName({ name, about }));
    if (avatar) dispatch(editAvatar(avatar));
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Input {...register("name")} name={"name"} placeholder={"Имя"} />
      <Input
        {...register("about")}
        name={"about"}
        placeholder={"Описание"}
      />{" "}
      <Input {...register("avatar")} name={"avatar"} placeholder={"Аватар"} />
      <Button type={"submit"} disabled={!isValid}>
        Сохранить
      </Button>
    </form>
  );
};
