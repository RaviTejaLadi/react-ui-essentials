import PropTypes from "prop-types";
import * as React from "react";
import styles from "../Splitter.module.css";

export const LeftContainer = ({ children, firstHalfRef, padding, style, className, size, minSize }) => {
  return (
    <div
      style={{ padding: padding, width: size, minWidth: minSize, ...style }}
      className={`${styles.rue_splitter_first} ${className}`}
      ref={firstHalfRef}
    >
      {children}
    </div>
  );
};

LeftContainer.propTypes = {
  children: PropTypes.any,
  firstHalfRef: PropTypes.any,
};
