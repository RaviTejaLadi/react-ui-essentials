import PropTypes from "prop-types";
import React from "react";
import styles from "./BasicCard.module.css";

const Title = ({ children, className, style, ...rest }) => (
  <h5 className={`${styles.rue_title}  ${className}`} style={style} {...rest}>
    {children}
  </h5>
);

Title.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

const Content = ({ children, className, style, ...rest }) => (
  <div className={`${styles.rue_content} ${className}`} style={style} {...rest}>
    {children}
  </div>
);

Content.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

const BasicCard = ({ children, width, height, padding, margin, className, style, ...rest }) => {
  const cardStyle = {
    width: width || "100%",
    height: height || "auto",
    padding: padding || "5px",
    margin: margin || "5px",
    ...style,
  };

  return (
    <div className={`${styles.rue_card}  ${className}`} style={cardStyle} {...rest}>
      {children}
    </div>
  );
};

BasicCard.propTypes = {
  children: PropTypes.node.isRequired,
  height: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  width: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};

BasicCard.Title = Title;
BasicCard.Content = Content;

export default BasicCard;
