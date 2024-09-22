import PropTypes from "prop-types";
import React, { forwardRef } from "react";
import styles from "./Textarea.module.css";

const Textarea = forwardRef(
  ({ name, value, onChange, width, height, className, margin, padding, style, size = "sm", ...props }, ref) => {
    const sizeClass = styles[size] || styles.sm;

    const testareaStyles = {
      width: width,
      height: height,
      margin: margin,
      padding: padding,
      ...style,
    };
    return (
      <textarea
        ref={ref}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={`${styles.rue_textarea} ${sizeClass} ${className || ""}`}
        style={testareaStyles}
        {...props}
      />
    );
  }
);

Textarea.propTypes = {
  className: PropTypes.string,
  height: PropTypes.string,
  label: PropTypes.string,
  margin: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  padding: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  style: PropTypes.object,
  value: PropTypes.string.isRequired,
  width: PropTypes.string,
};
Textarea.displayName = "Textarea";
export default Textarea;
