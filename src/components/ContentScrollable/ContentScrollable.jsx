import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import styles from "./ContentScrollable.module.css";

const ContentScrollable = forwardRef(({ height, width, children, variant, className, style, ...rest }, ref) => {
  const containerDimensions = {
    height: height,
    width: width,
    ...style,
  };

  const contentScrollableClasses = `${styles.rue_content_scroller} ${
    variant ? `${styles[`rue_content_scroller_${variant}`]}` : ""
  }  ${className || ""}`;

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
  className: PropTypes.string,
  style: PropTypes.object,
};

ContentScrollable.displayName = "ContentScrollable";
export default ContentScrollable;
