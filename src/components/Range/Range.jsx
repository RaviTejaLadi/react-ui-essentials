// Range.js
import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import styles from "./Range.module.css";

const Range = forwardRef(
  ({ width = "100%", size = "md", variant = "primary", title = "value", value, handleChange, min, max, step }, ref) => {
    return (
      <div ref={ref} className={styles.rue_slidecontainer} style={{ width }}>
        <div className={styles.rue_slideTitle}>
          <span className={styles.rue_slideLabel}>{title}</span>
        </div>
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          className={`${styles.rue_slider} ${styles[`rue_slider_${size}`]} ${styles[`rue_slider_${variant}`]}`}
          id="myRange"
          step={step}
          onChange={handleChange}
        />
      </div>
    );
  }
);

Range.propTypes = {
  handleChange: PropTypes.func.isRequired,
  width: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  variant: PropTypes.oneOf(["primary", "secondary", "success", "danger", "warning", "info", "help", "light", "dark"]),
  title: PropTypes.string,
  value: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number,
};

Range.displayName = "Range";

export default Range;

