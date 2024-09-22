import PropTypes from "prop-types";
import React, { useState, forwardRef } from "react";
import styles from "./Paragraph.module.css";
import { ContentCopy } from "../../../Icons/Round";

const Paragraph = forwardRef(
  (
    {
      variant = "default",
      type = "p",
      copy = false,
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
      ...rest
    },
    ref
  ) => {
    const getTextStyles = () => {
      const variantClass = styles[`rue_para_${variant}`] || "";
      return `${styles.rue_para} ${variantClass} ${className || ""}`;
    };
    const validTypes = ["p", "span"];
    const Component = validTypes.includes(type) ? type : "p";
    const [copied, setCopied] = useState(false);

    const paraStyle = {
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

    const handleCopy = () => {
      navigator.clipboard.writeText(children.toString());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    };

    return (
      <Component ref={ref} className={getTextStyles()} style={paraStyle} {...rest}>
        {children}
        {copy && (
          <span className={styles.rue_copyIcon} onClick={handleCopy}>
            <ContentCopy width="20px" height="20px" />
            {copied && <span className={styles.rue_copyFeedback}>Copied!</span>}
          </span>
        )}
      </Component>
    );
  }
);

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  color: PropTypes.string,
  copy: PropTypes.bool,
  dashed: PropTypes.bool,
  deleted: PropTypes.bool,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  inserted: PropTypes.bool,
  italic: PropTypes.bool,
  marked: PropTypes.bool,
  overline: PropTypes.bool,
  smaller: PropTypes.bool,
  strikethrough: PropTypes.bool,
  strong: PropTypes.bool,
  style: PropTypes.object,
  type: PropTypes.oneOf(["p", "span"]),
  underline: PropTypes.bool,
  variant: PropTypes.oneOf(["default", "primary", "secondary", "success", "info", "warning", "danger", "help"]),
};

Paragraph.displayName = "Paragraph";
export default Paragraph;
