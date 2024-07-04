import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import styles from "./Tag.module.css";

const Tag = forwardRef(({ children, variant = "default", size = "medium", ...rest }, ref) => {
  const classNames = `${styles.rue_tag} ${variant ? `${styles[`rue_tag_${variant}`]}` : ""} ${
    size ? `${styles[`rue_tag_${size}`]}` : ""
  } `;

  return (
    <span ref={ref} className={classNames} {...rest}>
      {children}
    </span>
  );
});

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
Tag.displayName = "Tag";
export default Tag;
