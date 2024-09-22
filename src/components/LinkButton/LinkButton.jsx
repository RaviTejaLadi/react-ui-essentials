import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import styles from "./LinkButton.module.css";
import Link from "../Link/Link";

const LinkButton = forwardRef(
  ({ variant = "primary", size = "sm", to, children, className, style, raised, rounded, ...rest }, ref) => {
    const buttonStyle = {
      boxShadow: raised
        ? "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)"
        : "",
      borderRadius: rounded && "2rem",
      ...style,
    };
    const LinkbuttonClasses = `${styles.rue_link} ${variant ? `${styles[`rue_link_${variant}`]}` : ""}  ${
      size ? `${styles[`rue_link_${size}`]}` : ""
    } ${className || ""}`;

    return (
      <Link ref={ref} className={LinkbuttonClasses} style={buttonStyle} to={to} {...rest}>
        {children}
      </Link>
    );
  }
);

const LinkIcon = ({ children, className, style, ...rest }) => (
  <div className={`${styles.rue_icon} ${className || ""}`} style={style} {...rest}>
    {children}
  </div>
);

const LinkText = ({ children, className, style, ...rest }) => (
  <div className={`${styles.rue_text} ${className || ""}`} style={style} {...rest}>
    {children}
  </div>
);

LinkIcon.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

LinkText.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

LinkButton.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  raised: PropTypes.bool,
  rounded: PropTypes.bool,
  size: PropTypes.string,
  variant: PropTypes.string,
};

LinkButton.Icon = LinkIcon;
LinkButton.Text = LinkText;
LinkButton.displayName = "LinkButton";
export default LinkButton;
