import PropTypes from "prop-types";
import React from "react";
import styles from "./Footer.module.css";

const Footer = ({
  children,
  padding = "8px 20px",
  backgroundColor = "#fff",
  margin,
  color = "#333",
  width = "auto",
  height = "40px",
  ...rest
}) => {
  const footerStyles = {
    padding: padding,
    backgroundColor: backgroundColor,
    margin: margin,
    color: color,
    width: width,
    height: height,
  };
  const Copy_Right_Year = () => new Date().getFullYear();

  return (
    <footer className={styles.rue_footer} style={footerStyles} {...rest}>
      <div className={styles.rue_footer_content}>
        <p>
          &copy; {Copy_Right_Year()} React UI Essentials. All rights reserved.
        </p>
        <nav className={styles.rue_footer_nav}>{children}</nav>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.string,
  height: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  width: PropTypes.string,
};

const FooterLink = ({ children, to, ...rest }) => {
  return (
    <a className={styles.rue_footer_link} href={to} {...rest}>
      {children}
    </a>
  );
};

FooterLink.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string.isRequired,
};

Footer.Link = FooterLink;

export default Footer;
