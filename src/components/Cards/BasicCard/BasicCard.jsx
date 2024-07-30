import React from "react";
import styles from "./BasicCard.module.css";

const Title = ({ children, ...rest }) => (
  <h5 className={styles.rue_title} {...rest}>
    {children}
  </h5>
);
const Content = ({ children, ...rest }) => (
  <div className={styles.rue_content} {...rest}>
    {children}
  </div>
);

const BasicCard = ({ children, width, height, padding, margin, ...rest }) => {
  const cardStyle = {
    width: width || "100%",
    height: height || "auto",
    padding: padding || "5px",
    margin: margin || "5px",
  };

  return (
    <div className={styles.rue_card} style={cardStyle} {...rest}>
      {children}
    </div>
  );
};

BasicCard.Title = Title;
BasicCard.Content = Content;

export default BasicCard;
