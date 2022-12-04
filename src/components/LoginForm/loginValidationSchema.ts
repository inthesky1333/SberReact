import * as yup from "yup";
export const loginValidationSchema = yup.object().shape({
  login: yup
    .string()
    .min(4, "Минимум 4 символа")
    .required("Поле не должно быть пустым"),
  password: yup.string().required("Поле не должно быть пустым"),
});
