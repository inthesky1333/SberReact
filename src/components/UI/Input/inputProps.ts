import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface IInputProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  value?: string;
  name: string;
  label?: string;
  error?: string;
}
