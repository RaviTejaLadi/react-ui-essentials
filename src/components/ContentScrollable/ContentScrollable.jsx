import React from "react";
import PropTypes from "prop-types";
import styles from "./ContentScrollable.module.css";

const ContentScrollable = ({ height, width, children, variant }) => {
  const containerDimensions = {
    height: height,
    width: width,
  };
  const contentScrollableClasses = `${styles.rue_content_scroller} ${
    variant ? `${styles[`rue_content_scroller_${variant}`]}` : ""
  }`;
  return (
    <div className={contentScrollableClasses} style={containerDimensions}>
      {children}
    </div>
  );
};

ContentScrollable.propTypes = {
  children: PropTypes.node.isRequired,
  height: PropTypes.string,
  width: PropTypes.string,
  variant: PropTypes.string,
};

export default ContentScrollable;
