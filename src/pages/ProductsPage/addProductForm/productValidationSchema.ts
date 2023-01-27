import * as yup from "yup";
export const productValidationSchema = yup.object().shape({
  name: yup.string().required("Поле не должно быть пустым"),
  price: yup
    .number()
    .positive("Цена не может быть отрицательной")
    .required("Поле не должно быть пустым"),
  discount: yup
    .number()
    .positive("Скидка не может быть отрицательной")
    .required("Поле не должно быть пустым"),
  description: yup.string().required("Поле не должно быть пустым"),
  stock: yup
    .number()
    .positive("Количество не может быть отрицательным")
    .required("Поле не должно быть пустым"),
  pictures: yup
    .string()
    .url("Ссылка должна быть валидной")
    .required("Поле не должно быть пустым"),
});
