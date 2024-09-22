import PropTypes from "prop-types";
import React, { forwardRef } from "react";
import styles from "./Figure.module.css";

const Figure = forwardRef(({ children, width, height, margin = "5px", className, style, ...rest }, ref) => {
  const figStyles = { width: width, height: height, margin: margin, ...style };

  return (
    <figure ref={ref} className={`${styles.rue_figure} ${className}`} style={figStyles} {...rest}>
      {children}
    </figure>
  );
});

const FigureImage = ({ src, alt, className, style, ...rest }) => {
  const figImgStyles = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "5px",
    ...style,
  };
  return (
    <img src={src} alt={alt} style={figImgStyles} className={`${styles.rue_figure_image} ${className}`} {...rest} />
  );
};

FigureImage.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.string,
};

const FigureCaption = ({ children, className, style, ...rest }) => {
  return (
    <figcaption className={`${styles.rue_figure_caption} ${className}`} style={style} {...rest}>
      {children}
    </figcaption>
  );
};

FigureCaption.propTypes = {
  children: PropTypes.oneOf([PropTypes.string, PropTypes.node]),
  className: PropTypes.string,
  style: PropTypes.string,
};

Figure.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  height: PropTypes.string,
  margin: PropTypes.string,
  style: PropTypes.string,
  width: PropTypes.string,
};
Figure.Image = FigureImage;
Figure.Caption = FigureCaption;
Figure.displayName = "Figure";
export default Figure;
