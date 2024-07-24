import PropTypes from "prop-types";
import React, { forwardRef } from "react";
import styles from "./HeaderCard.module.css";

const Header = ({ children, ...rest }) => (
  <div className={styles.rue_header} {...rest}>
    {children}
  </div>
);

Header.propTypes = {
  children: PropTypes.node.isRequired,
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

const HeaderCard = forwardRef(({ children, width, height, padding, margin, ...rest }, ref) => {
  const cardStyle = {
    width: width || "100%",
    height: height || "auto",
    padding: 0,
    margin: margin || "10px",
  };

  const contentStyle = {
    padding: padding || "20px",
  };

  return (
    <div ref={ref} className={styles.rue_card} style={cardStyle} {...rest}>
      {React.Children.map(children, (child) => {
        if (child.type === Header) {
          return child;
        } else {
          return <div style={contentStyle}>{child}</div>;
        }
      })}
    </div>
  );
});

HeaderCard.propTypes = {
  children: PropTypes.node.isRequired,
  height: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  width: PropTypes.string,
};

HeaderCard.Header = Header;
HeaderCard.Title = Title;
HeaderCard.Content = Content;
HeaderCard.displayName = "HeaderCard";
export default HeaderCard;
