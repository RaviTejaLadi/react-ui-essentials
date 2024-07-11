import PropTypes from "prop-types";
import React, { forwardRef } from "react";
import styles from "./Figure.module.css";

const Figure = forwardRef(({ children, width, height, margin = "5px", ...rest }, ref) => {
  return (
    <figure ref={ref} className={styles.rue_figure} style={{ width: width, height: height, margin: margin }} {...rest}>
      {children}
    </figure>
  );
});

const FigureImage = ({ src, alt, ...rest }) => {
  return (
    <img
      src={src}
      alt={alt}
      style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "5px" }}
      className={styles.rue_figure_image}
      {...rest}
    />
  );
};

FigureImage.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string,
};

const FigureCaption = ({ children, ...rest }) => {
  return (
    <figcaption className={styles.rue_figure_caption} {...rest}>
      {children}
    </figcaption>
  );
};

FigureCaption.propTypes = {
  children: PropTypes.oneOf([PropTypes.string, PropTypes.node]),
};

Figure.propTypes = {
  height: PropTypes.string,
  children: PropTypes.node.isRequired,
  width: PropTypes.string,
};
Figure.Image = FigureImage;
Figure.Caption = FigureCaption;
Figure.displayName = "Figure";
export default Figure;
