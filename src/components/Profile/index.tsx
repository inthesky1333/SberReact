import React, { FC } from "react";

import styles from "./profile.module.css";
import { IProfileProps } from "./profileProps";

export const Profile: FC<IProfileProps> = () => {
  return <div className={styles.profile}>profile</div>;
};
