import PropTypes from "prop-types";
import React, { forwardRef } from "react";
import styles from "./ImageCard.module.css";

const Image = ({ src, alt, className, style, ...rest }) => (
  <img src={src} alt={alt} className={`${styles.rue_image}  ${className || ""}`} style={style} {...rest} />
);

Image.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

const Title = ({ children, className, style, ...rest }) => (
  <h2 className={`${styles.rue_title}  ${className || ""}`} style={style} {...rest}>
    {children}
  </h2>
);

Title.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

const Content = ({ children, className, style, ...rest }) => (
  <div className={`${styles.rue_content}  ${className || ""}`} style={style} {...rest}>
    {children}
  </div>
);

Content.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

const ImageCard = forwardRef(({ children, width, height, padding, margin, className, style, ...rest }, ref) => {
  const cardStyle = {
    width: width || "100%",
    height: height || "auto",
    padding: 0,
    margin: margin || "10px",
    ...style,
  };

  const contentStyle = {
    padding: padding || "20px",
  };

  return (
    <div ref={ref} className={`${styles.rue_card} ${className || ""}`} style={cardStyle} {...rest}>
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

ImageCard.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  height: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  style: PropTypes.object,
  width: PropTypes.string,
};

ImageCard.Image = Image;
ImageCard.Title = Title;
ImageCard.Content = Content;
ImageCard.displayName = "ImageCard";
export default ImageCard;
