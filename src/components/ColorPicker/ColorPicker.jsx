import React, { forwardRef } from "react";
import styles from "./ColorPicker.module.css";
import PropTypes from "prop-types";

const ColorPicker = forwardRef(({ title = "Color Picker", width = "auto", value, handleChange, ...rest }, ref) => {
  return (
    <div ref={ref} className={styles.rue_color_container} style={{ width: width }} {...rest}>
      <div className={styles.rue_colorpicker_Title}>
        <span style={{ fontSize: "0.8125rem", fontWeight: "500" }}>{title}</span>
        <span style={{ fontSize: "0.8125rem", fontWeight: "500" }}>{value}</span>
      </div>
      <input type="color" className={styles.rue_colorpicker} value={value} onChange={handleChange} />
    </div>
  );
});

ColorPicker.propTypes = {
  handleChange: PropTypes.any,
  title: PropTypes.any,
  value: PropTypes.any,
  width: PropTypes.string,
};

ColorPicker.displayName = "ColorPicker";
export default ColorPicker;
