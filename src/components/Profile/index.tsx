import React, { FC, useEffect, useState } from "react";

import { ProfileForm } from "@components/Profile/ProfileForm";
import { Modal } from "@components/UI/Modal";
import { useAppDispatch, useAppSelector } from "@store/index";
import { selectUser, selectUserStatus } from "@store/user/selectors";
import { me } from "@store/user/userActions";

import styles from "./profile.module.css";
import { IProfileProps } from "./profileProps";

export const Profile: FC<IProfileProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = useAppSelector(selectUser);
  const status = useAppSelector(selectUserStatus);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <div className={styles.profile}>
      <div className={styles.avatar}>
        <img src={user?.avatar} alt="avatar" />
      </div>
      <div className={styles.info}>
        <div>{user?.name}</div>
        <div>{user?.email}</div>
        <div>{user?.about}</div>
      </div>
      <span className={styles.edit} onClick={() => setIsOpen(true)}>
        ✏️ Редактировать
      </span>
      <Modal
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
        status={status}
      >
        <ProfileForm />
      </Modal>
    </div>
  );
};
