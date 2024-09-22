import React, { forwardRef } from "react";
import styles from "./ColorPicker.module.css";
import PropTypes from "prop-types";

const ColorPicker = forwardRef(
  ({ title = "Color Picker", width = "auto", value, handleChange, className, style, ...rest }, ref) => {
    const contStyles = {
      width: width,
      ...style,
    };
    return (
      <div ref={ref} className={`${styles.rue_color_container}  ${className || ""}`} style={contStyles} {...rest}>
        <div className={styles.rue_colorpicker_Title}>
          <span style={{ fontSize: "0.8125rem", fontWeight: "500" }}>{title}</span>
          <span style={{ fontSize: "0.8125rem", fontWeight: "500" }}>{value}</span>
        </div>
        <input type="color" className={styles.rue_colorpicker} value={value} onChange={handleChange} />
      </div>
    );
  }
);

ColorPicker.propTypes = {
  handleChange: PropTypes.any,
  title: PropTypes.any,
  value: PropTypes.any,
  width: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};

ColorPicker.displayName = "ColorPicker";
export default ColorPicker;
