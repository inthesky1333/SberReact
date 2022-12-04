import React from "react";

import Button from "@components/UI/Button";
import { FormError } from "@components/UI/FormError";
import { Input } from "@components/UI/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";

import styles from "./LoginForm.module.css";
import { FormValues } from "./loginFormTypes";
import { loginValidationSchema } from "./loginValidationSchema";

export const LoginForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    resolver: yupResolver(loginValidationSchema),
    mode: "all",
  });

  // useEffect(() => {
  //   setError("login", { type: "server", message: error });
  // }, [error]);

  const onSubmit: SubmitHandler<FormValues> = ({ login, password }) => {
    console.log({ login, password });
  };

  return (
    <>
      <h1 className={styles.title}>Вход в систему</h1>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Input {...register("login")} name={"login"} />
        <FormError error={errors.login} />
        <Input {...register("password")} name={"password"} />
        <FormError error={errors.password} />
        <Button type={"submit"} disabled={!isValid}>
          Войти
        </Button>
      </form>
    </>
  );
};
