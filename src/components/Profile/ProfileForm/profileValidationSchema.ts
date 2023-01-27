import * as yup from "yup";
export const profileValidationSchema = yup.object().shape({
  name: yup.string().required("Поле не должно быть пустым"),
  about: yup.string().required("Поле не должно быть пустым"),
  avatar: yup
    .string()
    .url("Введите корректный URL")
    .required("Поле не должно быть пустым"),
});
