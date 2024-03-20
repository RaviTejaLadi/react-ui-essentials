import PropTypes from "prop-types";
import React from "react";
import styles from "./GridBackground.module.css";

const GridBackground = ({ children, width, height,borderColor }) => {
  return (
    <div
      className={styles.rue_grid_background}

      style={{
        width: width,
        height: height,
        border:`.1rem solid ${borderColor}`
      }}
    >
      {children}
    </div>
  );
};

GridBackground.propTypes = {
  children: PropTypes.node.isRequired,
  height: PropTypes.string,
  width: PropTypes.string
}

export default GridBackground;
