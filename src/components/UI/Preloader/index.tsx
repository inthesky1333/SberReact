import React, { FC } from "react";

import classes from "./Preloader.module.css";

interface IProps {
  customText?: string;
}

const Preloader: FC<IProps> = ({ customText = "Loading..." }) => {
  return (
    <div className={classes.spinnerContainer}>
      <svg
        width="100%"
        viewBox="0 0 276 276"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="spinner">
          <circle
            id="bottom"
            cx="138"
            cy="138"
            r="114"
            stroke="inherit"
            strokeWidth="18"
          />
          <circle
            className={classes.upper}
            cx="138"
            cy="138"
            r="123"
            stroke="#da2337"
            strokeWidth="30"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="373 100"
            style={{ animationDuration: "1.5s" }}
          />
        </g>
      </svg>
      <p>{customText}</p>
    </div>
  );
};

export default Preloader;
