import PropTypes from "prop-types";
import React, { memo, forwardRef } from "react";
import styles from "./Divider.module.css";

const Divider = forwardRef(
  (
    {
      orientation = "horizontal",
      position = "center",
      thickness = "1px",
      color = "#ccc",
      className,
      children,
      margin,
      ...rest
    },
    ref
  ) => {
    const dividerClasses = `${styles.rue_divider} ${
      orientation === "horizontal" ? styles.rue_horizontal : styles.rue_vertical
    } ${className || ""}`;

    const dividerStyle =
      orientation === "vertical" ? { minHeight: "100%", width: thickness } : { height: thickness, width: "100%" };

    const getContentPosition = () => {
      switch (position) {
        case "center":
          return styles.rue_content_center;
        case "start":
          return styles.rue_content_start;
        case "end":
          return styles.rue_content_end;
        default:
          return styles.rue_content_center;
      }
    };
    const contentClasses = `${styles.rue_content} ${getContentPosition()}`;

    return (
      <div
        ref={ref}
        className={dividerClasses}
        style={{
          margin: margin,
          backgroundColor: color,
          ...dividerStyle,
        }}
        {...rest}
      >
        {orientation === "horizontal" && children && <span className={contentClasses}>{children}</span>}
      </div>
    );
  }
);

Divider.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
  position: PropTypes.string,
  margin: PropTypes.string,
  orientation: PropTypes.string,
  thickness: PropTypes.string,
};
Divider.displayName = "Divider";
export default memo(Divider);
