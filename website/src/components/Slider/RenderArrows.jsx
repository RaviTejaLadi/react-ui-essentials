import React from "react";
import { Button } from "react-ui-essentials";
import styles from "./Slider.module.css";

export const RenderArrows = (props) => {
  return (
    <React.Fragment>
      <Button
        size="sm"
        variant="light"
        className={`${styles.rue_arrows} ${styles.rue_prev}`}
        onClick={() => props.prevOne()}
      >
        <Button.Icon>
          <svg fill="#3d3d3d" width="50" height="50" viewBox="0 0 24 24">
            <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" /> <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </Button.Icon>
      </Button>
      <Button
        size="sm"
        variant="light"
        className={`${styles.rue_arrows} ${styles.rue_next}`}
        onClick={() => props.nextOne()}
      >
        <Button.Icon>
          <svg fill="#3d3d3d" height="50" viewBox="0 0 24 24" width="50">
            <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" /> <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </Button.Icon>
      </Button>
    </React.Fragment>
  );
};
