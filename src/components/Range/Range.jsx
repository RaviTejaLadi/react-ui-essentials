import React, { memo } from "react";
import PropTypes from "prop-types";
import styles from "./Range.module.css";

const Range = ({ value, handleChange, min, max, title, step, height, width }) => {
  return (
    <div className={styles.rue_slidecontainer} style={{ width: width }}>
      <div className={styles.rue_slideTitle}>
        <span style={{ fontSize: "0.8125rem", fontWeight: "500" }}> {title} </span>
        <span style={{ fontSize: "0.8125rem", fontWeight: "500" }}> {value} </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        className={styles.rue_slider}
        style={{ width: "100%", height: height }}
        id="myRange"
        step={step}
        onChange={handleChange}
      />
    </div>
  );
};

Range.propTypes = {
  handleChange: PropTypes.any,
  height: PropTypes.any,
  max: PropTypes.any,
  min: PropTypes.any,
  step: PropTypes.any,
  title: PropTypes.any,
  value: PropTypes.any,
  width: PropTypes.any,
};

Range.defaultProps = {
  width: "100%",
  height: "8px",
  title: "value",
};
export default memo(Range);
