import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import styles from "./ContentScrollable.module.css";

const ContentScrollable = forwardRef(({ height, width, children, variant, ...rest }, ref) => {
  const containerDimensions = {
    height: height,
    width: width,
  };
  const contentScrollableClasses = `${styles.rue_content_scroller} ${
    variant ? `${styles[`rue_content_scroller_${variant}`]}` : ""
  }`;
  return (
    <div ref={ref} className={contentScrollableClasses} style={containerDimensions} {...rest}>
      {children}
    </div>
  );
});

ContentScrollable.propTypes = {
  children: PropTypes.node.isRequired,
  height: PropTypes.string,
  width: PropTypes.string,
  variant: PropTypes.string,
};
ContentScrollable.displayName = "ContentScrollable";
export default ContentScrollable;
