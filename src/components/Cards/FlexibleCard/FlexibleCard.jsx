import PropTypes from "prop-types";
import React, { forwardRef } from "react";
import styles from "./FlexibleCard.module.css";

const Image = ({ src, alt }) => (
  <div className={styles.rue_imageWrapper}>
    <img src={src} alt={alt} className={styles.rue_image} />
  </div>
);

Image.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string.isRequired,
};

const Title = ({ children }) => <h2 className={styles.rue_title}>{children}</h2>;

Title.propTypes = {
  children: PropTypes.node.isRequired,
};

const Subtitle = ({ children }) => <h3 className={styles.rue_subtitle}>{children}</h3>;

Subtitle.propTypes = {
  children: PropTypes.node.isRequired,
};

const Content = ({ children }) => <div className={styles.rue_content}>{children}</div>;

Content.propTypes = {
  children: PropTypes.node.isRequired,
};

const ButtonGroup = ({ children }) => <div className={styles.rue_buttonGroup}>{children}</div>;

ButtonGroup.propTypes = {
  children: PropTypes.node.isRequired,
};

const FlexibleCard = forwardRef(({ children, width, height, padding, margin, imagePosition = "left" }, ref) => {
  const cardStyle = {
    width: width || "100%",
    height: height || "auto",
    margin: margin || "20px",
    flexDirection: imagePosition === "left" ? "row" : "row-reverse",
  };

  const imageChild = React.Children.toArray(children).find((child) => child.type === Image);
  const otherChildren = React.Children.toArray(children).filter((child) => child.type !== Image);

  return (
    <div ref={ref} className={styles.rue_card} style={cardStyle}>
      {imageChild}
      <div className={styles.rue_contentContainer} style={{ padding: padding || "40px" }}>
        {otherChildren}
      </div>
    </div>
  );
});

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
