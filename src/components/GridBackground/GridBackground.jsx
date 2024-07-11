import PropTypes from "prop-types";
import React, { forwardRef } from "react";
import styles from "./GridBackground.module.css";

const GridBackground = forwardRef(
  (
    {
      children,
      width = "98%",
      height = "auto",
      margin = "5px",
      padding = "10px",
      borderColor = "#ccc",
      backgroundSize = "20px 20px",
      ...rest
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={styles.rue_grid_background}
        style={{
          width: width,
          height: height,
          margin: margin,
          padding: padding,
          border: `1px solid ${borderColor}`,
          backgroundSize: backgroundSize,
        }}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

GridBackground.propTypes = {
  backgroundSize: PropTypes.string.isRequired,
  borderColor: PropTypes.string,
  children: PropTypes.node.isRequired,
  height: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  width: PropTypes.string,
};
GridBackground.displayName = "GridBackground";
export default GridBackground;
