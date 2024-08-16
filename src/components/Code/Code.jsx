import PropTypes from "prop-types";
import React, { forwardRef } from "react";
import styles from "./Code.module.css";

const VARIANTS = [
  "primary",
  "secondary",
  "success",
  "danger",
  "warning",
  "info",
  "help",
  "light",
  "dark",
];
const SIZES = ["sm", "md", "lg"];

const Code = forwardRef(
  (
    {
      children,
      variant = "primary",
      size = "sm",
      underline = false,
      className,
      style,
      padding,
      margin,
      ...rest
    },
    ref
  ) => {
    const codeStyles = {
      textDecoration: underline ? "underline" : "",
      margin,
      padding,
      ...style,
    };

    const codeClasses = `
    ${styles.rue_code} 
    ${styles[`rue_code_${variant}`]} 
    ${styles[`rue_code_${size}`]} 
    ${className || ""}
  `.trim();

    return (
      <code style={codeStyles} ref={ref} className={codeClasses} {...rest}>
        {children}
      </code>
    );
  }
);

Code.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(VARIANTS),
  size: PropTypes.oneOf(SIZES),
  underline: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  padding: PropTypes.string,
  margin: PropTypes.string,
};

Code.displayName = "Code";
export default Code;
