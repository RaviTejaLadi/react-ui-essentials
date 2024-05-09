import PropTypes from "prop-types";
import React from "react";
import styles from "../Menu.module.css";

export const Label = ({ children, rightSection, ...rest }) => {
  return (
    <div className={styles.rue_menu_label} {...rest}>
      <div>{children}</div>
      <div className={styles.rue_menu_end_icon}>{rightSection}</div>
    </div>
  );
};

Label.propTypes = {
  children: PropTypes.node,
  rightSection: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};