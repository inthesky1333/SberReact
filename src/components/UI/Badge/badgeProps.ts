import { HTMLAttributes } from "react";

export interface IBadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "new" | "sale" | "outOfStock" | "cart";
  text?: string | number;
}
