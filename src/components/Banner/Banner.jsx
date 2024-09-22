import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import styles from "./Banner.module.css";

const BannerTitle = ({ children, className, style, ...rest }) => (
  <h2 className={`${styles.rue_banner_title} ${className || ""}`} style={style} {...rest}>
    {children}
  </h2>
);

BannerTitle.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

const BannerSubTitle = ({ children, className, style, ...rest }) => (
  <p className={`${styles.rue_banner_subtitle} ${className || ""}`} style={style} {...rest}>
    {children}
  </p>
);

BannerSubTitle.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

const Banner = forwardRef(
  ({ children, variant = "primary", size = "md", controls, className, style, ...rest }, ref) => {
    const containerClass = `
    ${styles.rue_banner_container} 
    ${styles[`rue_banner_${variant}`]} 
    ${styles[`rue_banner_${size}`]} 
    ${className || ""}
  `.trim();

    return (
      <div className={containerClass} style={style} ref={ref} {...rest}>
        <div className={styles.rue_banner_content}>{children}</div>
        {controls && <div className={styles.rue_banner_controls}>{controls}</div>}
      </div>
    );
  }
);

Banner.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary", "success", "danger", "warning", "info", "help", "light", "dark"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  controls: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
};

Banner.Title = BannerTitle;
Banner.SubTitle = BannerSubTitle;
Banner.displayName = "Banner";
export default Banner;
