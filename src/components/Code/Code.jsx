import PropTypes from "prop-types";
import React, { forwardRef } from "react";
import styles from "./Code.module.css";

const Code = forwardRef(({ children, color = "red", underline = false, ...rest }, ref) => {
  return (
    <code
      style={{ color: color, textDecoration: underline ? "underline" : "" }}
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
};
Code.displayName = "Code";
export default Code;
