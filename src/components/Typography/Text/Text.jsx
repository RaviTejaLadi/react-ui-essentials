import PropTypes from "prop-types";
import React, { forwardRef } from "react";
import styles from "./Text.module.css";

const Text = forwardRef(
  (
    {
      variant = "default",
      fontSize = "",
      color = "",
      underline,
      overline,
      dashed,
      italic,
      strong,
      strikethrough,
      marked,
      smaller,
      deleted,
      inserted,
      children,
      fontWeight,
      style,
      className,
      size = "md",
      ...rest
    },
    ref
  ) => {
    const getTextStyles = () => {
      const sizeClass = styles[`rue_text_${size}`] || "";
      const variantClass = styles[`rue_text_${variant}`] || "";
      return `${styles.rue_text} ${sizeClass} ${variantClass} ${className || ""}`;
    };

    const textStyle = {
      textDecoration: underline
        ? "underline "
        : overline
        ? "overline "
        : dashed
        ? "line-through "
        : strikethrough
        ? "line-through "
        : deleted
        ? "line-through "
        : inserted
        ? "underline "
        : "",
      fontStyle: italic ? "italic " : "",
      fontWeight: fontWeight || (strong ? "bold " : ""),
      backgroundColor: marked ? "yellow " : "",
      fontSize: fontSize || (smaller ? "0.8em " : ""),
      width: "fit-content",
      color: color,
      ...style,
    };

    return (
      <p ref={ref} className={getTextStyles()} style={textStyle} {...rest}>
        {children}
      </p>
    );
  }
);

Text.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  color: PropTypes.string,
  dashed: PropTypes.bool,
  deleted: PropTypes.bool,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  inserted: PropTypes.bool,
  italic: PropTypes.bool,
  marked: PropTypes.bool,
  overline: PropTypes.bool,
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "xxl"]),
  smaller: PropTypes.bool,
  strikethrough: PropTypes.bool,
  strong: PropTypes.bool,
  style: PropTypes.object,
  underline: PropTypes.bool,
  variant: PropTypes.oneOf(["default", "primary", "secondary", "success", "info", "warning", "danger", "help"]),
};

Text.displayName = "Text";
export default Text;
