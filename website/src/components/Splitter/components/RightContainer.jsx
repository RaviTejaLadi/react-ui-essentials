import PropTypes from "prop-types";
import * as React from "react";
import styles from "../Splitter.module.css";

export const RightContainer = ({ children, secondHalfRef, padding, style, className, size, minSize }) => {
  return (
    <div
      style={{ padding: padding, width: size, minWidth: minSize, ...style }}
      className={`${styles.rue_splitter_second} ${className}`}
      ref={secondHalfRef}
    >
      {children}
    </div>
  );
};

RightContainer.propTypes = {
  children: PropTypes.any,
  secondHalfRef: PropTypes.any,
};
