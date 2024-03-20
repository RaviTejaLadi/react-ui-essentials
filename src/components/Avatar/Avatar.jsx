import PropTypes from "prop-types";
import React from "react";
import styles from "./Avatar.module.css";

const Avatar = ({ src, alt, width, height, fluid, curvedBorder, circle }) => {
  const imageStyle = {
    width: width,
    height: height,
    objectFit: fluid ? "contain" : "cover",
    borderRadius: curvedBorder ? "5px" : circle ? "50%" : "0",
  };

  return <img src={src} alt={alt} className={styles.rue_custom_image} style={imageStyle} />;
};

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
