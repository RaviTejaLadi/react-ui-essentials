import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import styles from "./Alert.module.css";

const Alert = forwardRef(({ variant = "primary", children, ...rest }, ref) => {
  const alertClasses = `${styles.rue_alert} ${variant ? `${styles[`rue_alert_${variant}`]}` : ""}`;
  return (
    <div className={alertClasses} ref={ref} {...rest}>
      {children}
    </div>
  );
});

const Header = ({ children, ...rest }) => {
  return (
    <div className={styles.rue_alert_header} {...rest}>
      {children}
    </div>
  );
};

const Body = ({ children, ...rest }) => {
  return (
    <div className={styles.rue_alert_body} {...rest}>
      {children}
    </div>
  );
};

const Footer = ({ children, ...rest }) => {
  return (
    <div className={styles.rue_alert_footer} {...rest}>
      {children}
    </div>
  );
};

Alert.propTypes = {
  variant: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

Body.propTypes = {
  children: PropTypes.node.isRequired,
};

Footer.propTypes = {
  children: PropTypes.node.isRequired,
};

Alert.Header = Header;
Alert.Body = Body;
Alert.Footer = Footer;
Alert.displayName = "Alert";
export default Alert;
