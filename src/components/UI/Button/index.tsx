import cn from "classnames";

import styles from "./button.module.css";
import { IButtonProps } from "./buttonProps";

export const Button = (props: IButtonProps) => {
  const {
    children,
    variant = "primary",
    width,
    className,
    ...otherProps
  } = props;

  return (
    <button
      type="button"
      className={cn(styles.button, className, {
        [styles.buttonPrimary]: variant === "primary",
        [styles.buttonSecondary]: variant === "secondary",
      })}
      style={{ width }}
      {...otherProps}
    >
      {children}
    </button>
  );
};
