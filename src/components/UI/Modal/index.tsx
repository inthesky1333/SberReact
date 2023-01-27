import React, { FC, useEffect } from "react";

import { Portal } from "@components/UI/Portal";

import styles from "./modal.module.css";
import { IModalProps } from "./modalProps";

export const Modal: FC<IModalProps> = ({
  isOpen,
  handleClose,
  children,
  status,
}) => {
  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) =>
      e.key === "Escape" ? handleClose() : null;
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose]);

  useEffect(() => {
    if (status === "succeeded") {
      handleClose();
    }
  }, [status]);

  if (!isOpen) return null;

  return (
    <Portal wrapperId={"modal"}>
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <button onClick={handleClose} className={styles.close}>
            X
          </button>
          {children}
        </div>
      </div>
    </Portal>
  );
};
