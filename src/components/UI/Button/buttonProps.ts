import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary";

export interface IButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  variant?: ButtonVariant;
  width?: string;
}
