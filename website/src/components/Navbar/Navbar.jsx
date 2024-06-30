import PropTypes from "prop-types";
import React from "react";
import styles from "./Navbar.module.css";

const Navbar = ({
  logo,
  variant,
  controls,
  backgroundColor = "",
  padding = "8px 20px",
  margin = "",
  color = "",
  children,
  width = "auto",
  height = "45px",
  ...rest
}) => {
  const getToastType = () => {
    switch (variant) {
      case "primary":
        return styles.primary;
      case "secondary":
        return styles.secondary;
      case "success":
        return styles.success;
      case "info":
        return styles.info;
      case "warning":
        return styles.warning;
      case "danger":
        return styles.danger;
      case "help":
        return styles.help;
      case "light":
        return styles.light;
      case "dark":
        return styles.dark;
      default:
        return styles.primary;
    }
  };

  const navStyles = {
    backgroundColor,
    padding,
    margin,
    color,
    width,
    height,
  };

  return (
    <nav className={`${styles.rue_navbar} ${getToastType()}`} style={navStyles} {...rest}>
      <div className={styles.rue_logo}>{logo}</div>
      <div className={styles.rue_navlinks}>{children}</div>
      <div className={styles.rue_controls}>{controls}</div>
    </nav>
  );
};

const NavLink = ({ children, to, ...rest }) => {
  return (
    <a href={to} {...rest}>
      {children}
    </a>
  );
};

NavLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};

Navbar.propTypes = {
  logo: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  variant: PropTypes.oneOf(["primary", "secondary", "success", "info", "warning", "danger", "help", "light", "dark"])
    .isRequired,
  controls: PropTypes.node,
  backgroundColor: PropTypes.string,
  padding: PropTypes.string,
  margin: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
};

Navbar.Link = NavLink;
export default Navbar;
