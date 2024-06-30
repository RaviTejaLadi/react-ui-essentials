import PropTypes from "prop-types";
import React, { memo, forwardRef } from "react";
import styles from "./GridBackground.module.css";

const GridBackground = forwardRef(({ children, width, height, borderColor }, ref) => {
  return (
    <div
      ref={ref}
      className={styles.rue_grid_background}
      style={{
        width: width,
        height: height,
        border: `.1rem solid ${borderColor}`,
      }}
    >
      {children}
    </div>
  );
});

GridBackground.propTypes = {
  children: PropTypes.node.isRequired,
  height: PropTypes.string,
  width: PropTypes.string,
};

export default memo(GridBackground);
