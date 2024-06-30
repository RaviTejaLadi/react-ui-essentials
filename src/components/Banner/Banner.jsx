import React, { forwardRef } from "react";
import { TbHome } from "react-icons/tb";
import PropTypes from "prop-types";
import styles from "./Banner.module.css";
import { Link } from "../Link/Link";

const Banner = forwardRef(({ Title, subTitle, imgage, variant, size, ...rest }, ref) => {
  const containerClass = `${styles.rue_banner_container} ${variant ? `${styles[`rue_banner_${variant}`]}` : ""}  ${
    size ? `${styles[`rue_banner_${size}`]}` : ""
  }`;

  return (
    <div className={containerClass} ref={ref} {...rest}>
      <div className={styles.rue_banner_title_container}>
        <span className={styles.rue_banner_title}>
          <h4>{Title}</h4>
        </span>
        <span className={styles.rue_banner_links}>
          <Link to="/">
            <TbHome />
          </Link>
          <p>{subTitle}</p>
        </span>
      </div>
      {imgage && (
        <div className={styles.rue_banner_logo}>
          <img src={imgage} alt="img" />
        </div>
      )}
    </div>
  );
});

Banner.propTypes = {
  Title: PropTypes.any.isRequired,
  imgage: PropTypes.any,
  size: PropTypes.string,
  subTitle: PropTypes.string,
  variant: PropTypes.string,
};
Banner.displayName = "Banner";
export default Banner;
