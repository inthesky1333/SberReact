import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export interface IInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  value?: string;
  name: string;
  label?: string;
  error?: string;
}
