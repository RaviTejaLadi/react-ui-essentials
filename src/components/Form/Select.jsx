import PropTypes from "prop-types";
import React, { forwardRef } from "react";
import styles from "./Select.module.css";

const Select = forwardRef(
  (
    { name, options, value, onChange, width, height, margin, padding, style, size = "sm", className, ...props },
    ref
  ) => {
    const sizeClass = styles[size] || styles.sm;

    const selectStyles = {
      width: width,
      height: height,
      margin: margin,
      padding: padding,
      ...style,
    };

    return (
      <select
        ref={ref}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={`${styles.rue_select} ${sizeClass} ${className||""}`}
        style={selectStyles}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  }
);

Select.propTypes = {
  className: PropTypes.string,
  height: PropTypes.string,
  margin: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  padding: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  style: PropTypes.object,
  value: PropTypes.string.isRequired,
  width: PropTypes.string,
};
Select.displayName = "Select";
export default Select;
