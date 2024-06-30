import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import styles from "./Alert.module.css";

const Alert = forwardRef(({ variant, children, ...ref }, ref) => {
  const alertClasses = `${styles.rue_alert} ${variant ? `${styles[`rue_alert_${variant}`]}` : ""}`;
  return (
    <div className={alertClasses} ref={ref} {...rest}>
      {children}
    </div>
  );
});

const Header = ({ children }) => {
  return <div className={styles.rue_alert_header}>{children}</div>;
};

const Body = ({ children }) => {
  return <div className={styles.rue_alert_body}>{children}</div>;
};

const Footer = ({ children }) => {
  return <div className={styles.rue_alert_footer}>{children}</div>;
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

export default Alert;
