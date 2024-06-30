import PropTypes from "prop-types";
import * as React from "react";
import styles from "../Splitter.module.css";

export const Divider = ({ children, handleMouseDown, handleTouchStart, resizerRef, className }) => {
  return (
    <div
      className={className}
      // className={`${styles.rue_splitter_resizer} ${className}`}
      ref={resizerRef}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      {children}
      {/* <div className={`${styles.rue_splitter_resizer_center} ${className}`}></div> */}
    </div>
  );
};

Divider.propTypes = {
  handleMouseDown: PropTypes.any,
  handleTouchStart: PropTypes.any,
  resizerRef: PropTypes.any,
};
