import PropTypes from "prop-types";
import React, { forwardRef } from "react";
import styles from "./Avatar.module.css";

const Avatar = forwardRef(
  (
    { src, alt = "avatar", width = "50px", height = "50px", fluid, curvedBorder, circle, className, style, ...rest },
    ref
  ) => {
    const imageStyle = {
      width: width,
      height: height,
      objectFit: fluid ? "contain" : "cover",
      borderRadius: curvedBorder ? "5px" : circle ? "50%" : "0",
      ...style,
    };

    return (
      <img
        src={src}
        ref={ref}
        alt={alt}
        className={`${styles.rue_custom_image} ${className || ""}`}
        style={imageStyle}
        {...rest}
      />
    );
  }
);

Avatar.propTypes = {
  alt: PropTypes.string,
  circle: PropTypes.bool,
  fluid: PropTypes.bool,
  height: PropTypes.string,
  curvedBorder: PropTypes.bool,
  src: PropTypes.any.isRequired,
  width: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};

Avatar.displayName = "Avatar";
export default Avatar;
