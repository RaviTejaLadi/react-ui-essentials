import PropTypes from "prop-types";
import React from "react";
import styles from "./Menu.module.css";
import { MenuItem } from "../MustComponents/components/MenuItem";
import { Label } from "../MustComponents/components/Label";
import { StartIcon } from "../MustComponents/components/StartIcon";
import { Divider } from "../MustComponents/components/Divider";

export const Menu = ({ children, width, height, ...rest }) => {
  return (
    <div className={styles.rue_menu_wraper} {...rest} style={{ width: width, height: height }}>
      {children}
    </div>
  );
};

Menu.propTypes = {
  children: PropTypes.node,
  height: PropTypes.string,
  width: PropTypes.string,
};

Menu.defaultProps = {
  width: "145px",
  height: "auto",
};

Menu.Item = MenuItem;
MenuItem.StartIcon = StartIcon;
MenuItem.Label = Label;
Menu.Divider = Divider;
