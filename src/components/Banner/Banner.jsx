import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import styles from "./Banner.module.css";

const Banner = forwardRef(({ title, subTitle, image, variant, size, className, style, ...rest }, ref) => {
  const containerClass = `${styles.rue_banner_container} ${variant ? `${styles[`rue_banner_${variant}`]}` : ""}  ${
    size ? `${styles[`rue_banner_${size}`]}` : ""
  }  ${className}`;

  return (
    <div className={containerClass} style={style} ref={ref} {...rest}>
      <div className={styles.rue_banner_title_container}>
        <span className={styles.rue_banner_title}>{title}</span>
        <span className={styles.rue_banner_subtitle}>{subTitle}</span>
      </div>
      {image && (
        <div className={styles.rue_banner_logo}>
          <img src={image} alt="img" />
        </div>
      )}
    </div>
  );
});

Banner.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  image: PropTypes.any,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  subTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  variant: PropTypes.oneOf(["primary", "secondary", "success", "danger", "warning", "info", "light"]),
  className: PropTypes.string,
  style: PropTypes.object,
};
Banner.displayName = "Banner";
export default Banner;
