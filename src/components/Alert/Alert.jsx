import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import styles from "./Alert.module.css";

const Alert = forwardRef(({ variant = "primary", children, className, style, ...rest }, ref) => {
  const alertClasses = `${styles.rue_alert} ${variant ? `${styles[`rue_alert_${variant}`]}` : ""}  ${className}`;
  return (
    <div className={alertClasses} ref={ref} style={style} {...rest}>
      {children}
    </div>
  );
});

const Header = ({ children, className, style, ...rest }) => {
  return (
    <div className={`${styles.rue_alert_header} ${className}`} style={style} {...rest}>
      {children}
    </div>
  );
};

const Body = ({ children, className, style, ...rest }) => {
  return (
    <div className={`${styles.rue_alert_body}  ${className}`} style={style} {...rest}>
      {children}
    </div>
  );
};

const Footer = ({ children, className, style, ...rest }) => {
  return (
    <div className={`${styles.rue_alert_footer} ${className} `} style={style} {...rest}>
      {children}
    </div>
  );
};

Alert.propTypes = {
  variant: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

Header.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

Body.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

Footer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

Alert.Header = Header;
Alert.Body = Body;
Alert.Footer = Footer;
Alert.displayName = "Alert";
export default Alert;
