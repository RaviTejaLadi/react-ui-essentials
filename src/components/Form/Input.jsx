import PropTypes from "prop-types";
import React, { forwardRef } from "react";
import styles from "./Input.module.css";

const Input = forwardRef(
  (
    { name, width, height, margin, padding, type = "text", value, onChange, className, style, size = "sm", ...props },
    ref
  ) => {
    const sizeClass = styles[size] || styles.sm;

    const inputStyles = {
      width: width,
      height: height,
      margin: margin,
      padding: padding,
      ...style,
    };
    return (
      <input
        ref={ref}
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className={`${styles.rue_input} ${sizeClass} ${className}`}
        style={inputStyles}
        {...props}
      />
    );
  }
);

Input.propTypes = {
  className: PropTypes.string,
  height: PropTypes.string,
  label: PropTypes.string,
  margin: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  padding: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  style: PropTypes.object,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  width: PropTypes.string,
};
Input.displayName = "Input";
export default Input;
