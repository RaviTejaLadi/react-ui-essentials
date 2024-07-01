import PropTypes from "prop-types";
import React from "react";
import styles from "../Menu.module.css";

export const StartIcon = ({ children, ...rest }) => {
  return (
    <div className={styles.rue_menu_start_icon} {...rest}>
      {children}
    </div>
  );
};

StartIcon.propTypes = {
  children: PropTypes.node,
};
