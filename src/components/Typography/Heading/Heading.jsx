import PropTypes from "prop-types";
import React, { useState, memo, forwardRef } from "react";
import styles from "./Heading.module.css";
import { ContentCopy } from "../../../Icons/Round";

const Heading = forwardRef(
  (
    {
      variant = "default",
      type = "h6",
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
      ...rest
    },
    ref
  ) => {
    const validTypes = ["h1", "h2", "h3", "h4", "h5", "h6"];
    const Component = validTypes.includes(type) ? type : "h6";
    const [copied, setCopied] = useState(false);

    const getVariantClass = () => {
      switch (variant) {
        case "default":
          return styles.default;
        case "primary":
          return styles.primary;
        case "secondary":
          return styles.secondary;
        case "success":
          return styles.success;
        case "info":
          return styles.info;
        case "warning":
          return styles.warning;
        case "danger":
          return styles.danger;
        default:
          return styles.default;
      }
    };

    const style = {
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
      fontWeight: fontWeight ? fontWeight : strong ? "bold " : "",
      backgroundColor: marked ? "yellow " : "",
      fontSize: fontSize ? fontSize : smaller ? "0.8em " : "",
      width: "fit-content",
      color: color,
    };

    const handleCopy = () => {
      navigator.clipboard.writeText(children.toString());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    };

    return (
      <Component ref={ref} className={`${styles.rue_heading} ${getVariantClass()}`} style={style} {...rest}>
        <span>{children}</span>
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

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["default", "primary", "secondary", "success", "info", "warning", "danger"]),
  type: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
  underline: PropTypes.bool,
  overline: PropTypes.bool,
  dashed: PropTypes.bool,
  italic: PropTypes.bool,
  strong: PropTypes.bool,
  strikethrough: PropTypes.bool,
  marked: PropTypes.bool,
  smaller: PropTypes.bool,
  deleted: PropTypes.bool,
  inserted: PropTypes.bool,
  copy: PropTypes.bool,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  color: PropTypes.string,
};

export default memo(Heading);
