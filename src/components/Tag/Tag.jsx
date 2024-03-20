import React from "react";
import PropTypes from "prop-types";
import styles from "./Tag.module.css";

const Tag = ({ children, variant, size }) => {
  const classNames = `${styles.rue_tag} ${variant ? `${styles[`rue_tag_${variant}`]}` : ""} ${
    size ? `${styles[`rue_tag_${size}`]}` : ""
  } `;

  return <span className={classNames}>{children}</span>;
};

Tag.propTypes = {
  children: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "xxl"]),
  variant: PropTypes.oneOf([
    "default",
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
    "info",
    "light",
    "dark",
    "custom",
  ]),
};

Tag.defaultProps = {
  variant: "default",
  size: "medium",
};

export default Tag;
