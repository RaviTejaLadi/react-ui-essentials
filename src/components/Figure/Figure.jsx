import PropTypes from "prop-types";
import React from "react";
import styles from "./Figure.module.css";

const Figure = ({ src, alt, caption, width, height }) => {
  const figureStyle = {
    width: width,
    height: height,
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "5px",
  };

  return (
    <figure className={styles.rue_figure} style={figureStyle}>
      <img src={src} alt={alt} className={styles.rue_figure_image} style={imageStyle} />
      <figcaption className={styles.rue_figure_caption}>{caption}</figcaption>
    </figure>
  );
};

Figure.propTypes = {
  alt: PropTypes.string,
  caption: PropTypes.string,
  height: PropTypes.string,
  src: PropTypes.string.isRequired,
  width: PropTypes.string,
};

export default Figure;
