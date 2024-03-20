import React from "react";
import PropTypes from "prop-types";
import styles from "./LinkButton.module.css";
import { Link } from "react-router-dom";

const LinkButton = ({ variant, size, path, disabled, children }) => {
  const LinkbuttonClasses = `${styles.ruc_btn} ${variant ? `${styles[`rue_link_${variant}`]}` : ""}  ${
    size ? `${styles[`rue_link_${size}`]}` : ""
  }`;

  return (
    <Link className={LinkbuttonClasses} to={path} disabled={disabled}>
      {children}
    </Link>
  );
};

LinkButton.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  path: PropTypes.string.isRequired,
  size: PropTypes.string,
  variant: PropTypes.string,
};

export default LinkButton;
