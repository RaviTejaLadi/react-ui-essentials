import React, { memo, forwardRef } from "react";
import PropTypes from "prop-types";
import styles from "./LinkButton.module.css";
import { Link } from "react-router-dom";

const LinkButton = forwardRef(({ variant, size, path, disabled, children, ...rest }, ref) => {
  const LinkbuttonClasses = `${styles.ruc_btn} ${variant ? `${styles[`rue_link_${variant}`]}` : ""}  ${
    size ? `${styles[`rue_link_${size}`]}` : ""
  }`;

  return (
    <Link ref={ref} className={LinkbuttonClasses} to={path} disabled={disabled} {...rest}>
      {children}
    </Link>
  );
});

LinkButton.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  path: PropTypes.string.isRequired,
  size: PropTypes.string,
  variant: PropTypes.string,
};

LinkButton.displayName = "LinkButton";
export default memo(LinkButton);
