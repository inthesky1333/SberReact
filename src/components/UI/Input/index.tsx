import React, { forwardRef } from "react";

import cn from "classnames";

import styles from "./input.module.css";
import { IInputProps } from "./inputProps";

export const Input = forwardRef<HTMLInputElement, IInputProps>((props, ref) => {
  const { error, label, name, value, className, ...otherProps } = props;
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        ref={ref}
        value={value}
        {...otherProps}
        name={name}
        className={cn(styles.input, className)}
      />
      <span className={styles.error}>{error}</span>
    </div>
  );
});

Input.displayName = "Input";
