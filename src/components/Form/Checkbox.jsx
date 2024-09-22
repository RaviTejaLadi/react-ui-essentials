import PropTypes from "prop-types";
import React, { forwardRef } from "react";
import styles from "./Checkbox.module.css";

const Checkbox = forwardRef(
  ({ width, height, margin, padding, style, className, name, checked, onChange, size = "sm", ...props }, ref) => {
    const sizeClass = styles[size] || styles.sm;

    const checkboxStyles = {
      width: width,
      height: height,
      margin: margin,
      padding: padding,
      ...style,
    };
    return (
      <input
        ref={ref}
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className={`${styles.rue_checkbox} ${sizeClass} ${className}`}
        style={checkboxStyles}
        {...props}
      />
    );
  }
);

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  className: PropTypes.string,
  height: PropTypes.string,
  margin: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  padding: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  style: PropTypes.object,
  width: PropTypes.string,
};
Checkbox.displayName = "Checkbox";
export default Checkbox;
