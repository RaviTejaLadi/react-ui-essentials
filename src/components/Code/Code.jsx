import PropTypes from "prop-types";
import React from "react";
import styles from "./Code.module.css";

const Code = ({ children, color, underline, style }) => {
  return (
    <code style={{ ...style, color: color, textDecoration: underline ? "underline" : "" }} className={styles.rue_code}>
      {children}
    </code>
  );
};

Code.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  underline: PropTypes.bool,
  style: PropTypes.object,
};
Code.defaultProps = {
  color: "red",
  underline: false,
  style: {},
};
export default Code;
