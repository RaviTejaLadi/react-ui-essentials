import PropTypes from "prop-types";
import React, { forwardRef } from "react";
import styles from "./ImageCard.module.css";

const Image = ({ src, alt, ...rest }) => <img src={src} alt={alt} className={styles.rue_image} {...rest} />;

Image.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string.isRequired,
};

const Title = ({ children, ...rest }) => (
  <h2 className={styles.rue_title} {...rest}>
    {children}
  </h2>
);

Title.propTypes = {
  children: PropTypes.node.isRequired,
};

const Content = ({ children, ...rest }) => (
  <div className={styles.rue_content} {...rest}>
    {children}
  </div>
);

Content.propTypes = {
  children: PropTypes.node.isRequired,
};

const ImageCard = forwardRef(({ children, width, height, padding, margin, ...rest }, ref) => {
  const cardStyle = {
    width: width || "100%",
    height: height || "auto",
    padding: 0, // padding is applied to content area
    margin: margin || "10px",
  };

  const contentStyle = {
    padding: padding || "20px",
  };

  return (
    <div ref={ref} className={styles.rue_card} style={cardStyle} {...rest}>
      {React.Children.map(children, (child) => {
        if (child.type === Image) {
          return child;
        } else {
          return <div style={contentStyle}>{child}</div>;
        }
      })}
    </div>
  );
});

ImageCard.Image = Image;
ImageCard.Title = Title;
ImageCard.Content = Content;
ImageCard.displayName = "ImageCard";
export default ImageCard;
