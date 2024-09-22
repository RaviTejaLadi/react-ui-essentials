import PropTypes from "prop-types";
import React from "react";
import styles from "./Label.module.css";

const Label = ({
  htmlFor,
  children,
  className,
  style,
  size = "sm",
  color,
  fontSize,
  fontWeight,
  padding,
  margin,
  ...props
}) => {
  const sizeClass = styles[size] || styles.sm;

  const labelStyles = {
    color: color,
    fontSize: fontSize,
    fontWeight: fontWeight,
    padding: padding,
    margin: margin,
    ...style,
  };

  return (
    <label
      htmlFor={htmlFor}
      className={`${styles.rue_label} ${sizeClass} ${className || ""}`}
      style={labelStyles}
      {...props}
    >
      {children}
    </label>
  );
};

Label.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  htmlFor: PropTypes.string.isRequired,
  margin: PropTypes.string,
  padding: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  style: PropTypes.object,
};

export default Label;
