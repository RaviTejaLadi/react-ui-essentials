import React, { Fragment } from "react";
import { Button } from "react-ui-essentials";
import styles from "./Slider.module.css";

export const RenderDots = ({ slides, setActive, isActive }) => {
  return (
    <Fragment>
      {slides.map((silde, index) => (
        <li className={isActive(index) + `${styles.rue_dots}`} key={index}>
          <Button size="sm" variant="light" onClick={() => setActive(index)}>
            <span>&#9679;</span>
          </Button>
        </li>
      ))}
    </Fragment>
  );
};
