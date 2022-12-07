import React, { useEffect, useState } from "react";

import { Button } from "@components/UI/Button";
import { FormError } from "@components/UI/FormError";
import { Input } from "@components/UI/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch, useAppSelector } from "@store/index";
import { selectToken } from "@store/user/selectors";
import { loginUser, registerUser } from "@store/user/userActions";
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

  const dispatch = useAppDispatch();
  const token = useAppSelector(selectToken);
  const [isRegister, setIsRegister] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  const onSubmit: SubmitHandler<FormValues> = ({ email, password }) => {
    if (isRegister) {
      dispatch(loginUser({ email, password }));
    } else {
      dispatch(registerUser({ email, password, group: "sm8" }));
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
          type={"password"}
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
