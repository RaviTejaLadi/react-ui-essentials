import PropTypes from "prop-types";
import React, { forwardRef } from "react";
import styles from "./FlexibleCard.module.css";

const Image = ({ src, alt, ...rest }) => (
  <div className={styles.rue_imageWrapper} {...rest}>
    <img src={src} alt={alt} className={styles.rue_image} />
  </div>
);

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

const Subtitle = ({ children, ...rest }) => (
  <h3 className={styles.rue_subtitle} {...rest}>
    {children}
  </h3>
);

Subtitle.propTypes = {
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

const ButtonGroup = ({ children, ...rest }) => (
  <div className={styles.rue_buttonGroup} {...rest}>
    {children}
  </div>
);

ButtonGroup.propTypes = {
  children: PropTypes.node.isRequired,
};

const FlexibleCard = forwardRef(
  ({ children, width, height, padding, margin, imagePosition = "left", ...rest }, ref) => {
    const cardStyle = {
      width: width || "100%",
      height: height || "auto",
      margin: margin || "20px",
      flexDirection: imagePosition === "left" ? "row" : "row-reverse",
    };

    const imageChild = React.Children.toArray(children).find((child) => child.type === Image);
    const otherChildren = React.Children.toArray(children).filter((child) => child.type !== Image);

    return (
      <div ref={ref} className={styles.rue_card} style={cardStyle} {...rest}>
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
};

FlexibleCard.Image = Image;
FlexibleCard.Title = Title;
FlexibleCard.Subtitle = Subtitle;
FlexibleCard.Content = Content;
FlexibleCard.ButtonGroup = ButtonGroup;
FlexibleCard.displayName = "FlexibleCard";
export default FlexibleCard;
