import React, { memo } from "react";
import PropTypes from "prop-types";
import styles from "./ColorPicker.module.css";

const ColorPicker = ({ title, width, value, handleChange }) => {
  return (
    <div className={styles.rue_color_container} style={{ width: width }}>
      <div className={styles.rue_colorpicker_Title}>
        <span style={{ fontSize: "0.8125rem", fontWeight: "500" }}>{title}</span>
        <span style={{ fontSize: "0.8125rem", fontWeight: "500" }}>{value}</span>
      </div>
      <input type="color" className={styles.rue_colorpicker} value={value} onChange={handleChange} />
    </div>
  );
};

ColorPicker.propTypes = {
  handleChange: PropTypes.any,
  title: PropTypes.any,
  value: PropTypes.any,
  width: PropTypes.string,
};
ColorPicker.defaultProps = {
  width: "auto",
  title: "Color Picker",
};

export default memo(ColorPicker);
