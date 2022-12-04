import * as yup from "yup";
export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Некорректный email")
    .required("Поле не должно быть пустым"),
  password: yup
    .string()
    .required("Поле не должно быть пустым")
    .min(4, "Минимум 4 символа"),
});
