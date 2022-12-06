import React, { useState } from "react";

import { AuthService } from "@api/authApis/authService";
import Button from "@components/UI/Button";
import { FormError } from "@components/UI/FormError";
import { Input } from "@components/UI/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { LocalPaths } from "@paths/loclalPath";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router";

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

  const [isRegister, setIsRegister] = useState(false);
  const navigate = useNavigate();

  // useEffect(() => {
  //   setError("login", { type: "server", message: error });
  // }, [error]);

  const onSubmit: SubmitHandler<FormValues> = ({ email, password }) => {
    if (isRegister) {
      AuthService.login({ email, password }).then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        navigate(LocalPaths.Products);
      });
    } else {
      AuthService.register({ email, password, group: "sm8" }).then((res) => {
        console.log(res);
      });
    }
  };

  return (
    <>
      <h1 className={styles.title}>
        {isRegister ? "Вход в систему" : "Зарегистрироваться"}
      </h1>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Input {...register("email")} name={"email"} placeholder={"email"} />
        <FormError error={errors.email} />
        <Input
          {...register("password")}
          name={"password"}
          placeholder={"пароль"}
        />
        <FormError error={errors.password} />
        <Button type={"submit"} disabled={!isValid}>
          {isRegister ? "Войти" : "Регистрирация"}
        </Button>
        <span
          className={styles.subTitle}
          onClick={() => setIsRegister((prev) => !prev)}
        >
          {isRegister ? "Зарегистрироваться" : "Уже есть аккаунт? Залогиниться"}
        </span>
      </form>
    </>
  );
};
