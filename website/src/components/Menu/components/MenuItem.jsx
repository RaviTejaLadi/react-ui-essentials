import PropTypes from "prop-types";
import React from "react";
import styles from "../Menu.module.css";

export const MenuItem = ({ children, variant, ...rest }) => {
  return (
    <div className={`${styles.rue_menu_item} ${variant ? styles[`rue_menu_item_${variant}`] : ""}`} {...rest}>
      {children}
    </div>
  );
};

MenuItem.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string,
};

MenuItem.defaultProps = {
  variant: "light",
};
