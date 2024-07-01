import PropTypes from "prop-types";
import React, { forwardRef, memo } from "react";
import styles from "./Code.module.css";

const Code = forwardRef(({ children, color = "red", underline = false, style = {}, ...rest }, ref) => {
  return (
    <code
      style={{ color: color, textDecoration: underline ? "underline" : "", ...style }}
      ref={ref}
      className={styles.rue_code}
      {...rest}
    >
      {children}
    </code>
  );
});

Code.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  underline: PropTypes.bool,
  style: PropTypes.object,
};
Code.displayName = "Code";
export default memo(Code);
