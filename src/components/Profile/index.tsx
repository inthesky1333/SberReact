import React, { FC, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@store/index";
import { selectUser } from "@store/user/selectors";
import { me } from "@store/user/userActions";

import styles from "./profile.module.css";
import { IProfileProps } from "./profileProps";

export const Profile: FC<IProfileProps> = () => {
  const user = useAppSelector(selectUser);
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
        <div className={styles.name}>{user?.name}</div>
        <div className={styles.email}>{user?.email}</div>
      </div>
    </div>
  );
};
