import PropTypes from "prop-types";
import React, { forwardRef } from "react";
import styles from "./HeaderCard.module.css";

const Header = ({ children, className, style, ...rest }) => (
  <div className={`${styles.rue_header} ${className}`} style={style} {...rest}>
    {children}
  </div>
);

Header.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

const Title = ({ children, className, style, ...rest }) => (
  <h2 className={`${styles.rue_title} ${className}`} style={style} {...rest}>
    {children}
  </h2>
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

const HeaderCard = forwardRef(({ children, width, height, padding, margin, className, style, ...rest }, ref) => {
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
    <div ref={ref} className={`${styles.rue_card}`} style={cardStyle} {...rest}>
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
  className: PropTypes.string,
  style: PropTypes.object,
};

HeaderCard.Header = Header;
HeaderCard.Title = Title;
HeaderCard.Content = Content;
HeaderCard.displayName = "HeaderCard";
export default HeaderCard;
