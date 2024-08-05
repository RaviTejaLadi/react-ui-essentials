import PropTypes from "prop-types";
import React, { forwardRef } from "react";
import styles from "./Code.module.css";

const Code = forwardRef(({ children, color = "red", underline = false, className, style, ...rest }, ref) => {
  const codeStyles = {
    color: color,
    textDecoration: underline ? "underline" : "",
    ...style,
  };
  return (
    <code style={codeStyles} ref={ref} className={`${styles.rue_code} ${className}`} {...rest}>
      {children}
    </code>
  );
});

Code.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  underline: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
};

Code.displayName = "Code";
export default Code;
