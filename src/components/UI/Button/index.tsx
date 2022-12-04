import cn from "classnames";

import styles from "./button.module.css";
import { IButtonProps } from "./buttonProps";

const Button = (props: IButtonProps) => {
  const { children, variant = "primary", width, ...otherProps } = props;

  return (
    <button
      type="button"
      className={cn(styles.button, {
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

export default Button;
