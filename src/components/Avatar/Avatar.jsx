import PropTypes from "prop-types";
import React, { forwardRef } from "react";
import styles from "./Avatar.module.css";

const Avatar = forwardRef(({ src, alt, width, height, fluid, curvedBorder, circle, ...rest }, ref) => {
  const imageStyle = {
    width: width,
    height: height,
    objectFit: fluid ? "contain" : "cover",
    borderRadius: curvedBorder ? "5px" : circle ? "50%" : "0",
  };

  return <img src={src} ref={ref} alt={alt} className={styles.rue_custom_image} style={imageStyle} {...rest} />;
});

Avatar.propTypes = {
  alt: PropTypes.string,
  circle: PropTypes.bool,
  fluid: PropTypes.bool,
  height: PropTypes.string,
  curvedBorder: PropTypes.bool,
  src: PropTypes.any.isRequired,
  width: PropTypes.string,
};

export default Avatar;
