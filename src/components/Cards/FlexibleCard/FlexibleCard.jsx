import PropTypes from "prop-types";
import React, { forwardRef } from "react";
import styles from "./FlexibleCard.module.css";

const Image = ({ src, alt, className, style, ...rest }) => (
  <div className={`${styles.rue_imageWrapper} ${className || ""}`} style={style} {...rest}>
    <img src={src} alt={alt} className={styles.rue_image} />
  </div>
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

const Subtitle = ({ children, className, style, ...rest }) => (
  <h3 className={`${styles.rue_subtitle} ${className || ""}`} style={style} {...rest}>
    {children}
  </h3>
);

Subtitle.propTypes = {
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

const ButtonGroup = ({ children, className, style, ...rest }) => (
  <div className={`${styles.rue_buttonGroup}  ${className || ""}`} style={style} {...rest}>
    {children}
  </div>
);

ButtonGroup.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

const FlexibleCard = forwardRef(
  ({ children, width, height, padding, margin, imagePosition = "left", className, style, ...rest }, ref) => {
    const cardStyle = {
      width: width || "100%",
      height: height || "auto",
      margin: margin || "20px",
      flexDirection: imagePosition === "left" ? "row" : "row-reverse",
      ...style,
    };

    const imageChild = React.Children.toArray(children).find((child) => child.type === Image);
    const otherChildren = React.Children.toArray(children).filter((child) => child.type !== Image);

    return (
      <div ref={ref} className={`${styles.rue_card} ${className || ""}`} style={cardStyle} {...rest}>
        {imageChild}
        <div className={styles.rue_contentContainer} style={{ padding: padding || "40px" }}>
          {otherChildren}
        </div>
      </div>
    );
  }
);

FlexibleCard.propTypes = {
  children: PropTypes.node.isRequired,
  height: PropTypes.string,
  imagePosition: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  width: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};

FlexibleCard.Image = Image;
FlexibleCard.Title = Title;
FlexibleCard.Subtitle = Subtitle;
FlexibleCard.Content = Content;
FlexibleCard.ButtonGroup = ButtonGroup;
FlexibleCard.displayName = "FlexibleCard";
export default FlexibleCard;
