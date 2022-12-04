import React, { forwardRef } from "react";

import styles from "./input.module.css";
import { IInputProps } from "./inputProps";

export const Input = forwardRef<HTMLInputElement, IInputProps>((props, ref) => {
  const { error, label, name, value, ...otherProps } = props;
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
        className={styles.input}
      />
      <span className={styles.error}>{error}</span>
    </div>
  );
});

Input.displayName = "Input";
