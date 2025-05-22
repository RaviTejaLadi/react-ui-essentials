import React, { useMemo, forwardRef } from "react";
import PropTypes from "prop-types";
import styles from "./TextHighlighter.module.css";

const defaultColors = [
  "#D65DB1",
  "#a99dfb",
  "#00C9A7",
  "#a8dadc",
  "#a9def9",
  "#ef476f",
  "#FF9671",
  "#FFC75F",
  "#F9F871",
  "#84a59d",
  "#76c893",
  "#2ec4b6",
  "#e27396",
  "#00a5cf",
  "#ffff3f",
  "#C34A36",
  "#ffb703",
  "#ee6c4d",
  "#adc178",
  "#a6e22d",
  "#845EC2",
];

const TextHighlighter = forwardRef(
  ({ children, highlightText = [], colorsList = [], className, style, ...rest }, ref) => {
    const highlightedText = useMemo(() => {
      if (!highlightText.length) {
        return children;
      }

      const colors = [...colorsList, ...defaultColors];
      const uniqueHighlightText = [...new Set(highlightText)];
      const colorMap = Object.fromEntries(
        uniqueHighlightText.map((text, index) => [text, colors[index % colors.length]])
      );

      const escapeRegExp = (str) => str?.toString()?.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") || "";
      const highlightRegex = new RegExp(`\\b(${uniqueHighlightText.map(escapeRegExp).join("|")})\\b`, "gi");

      return children.split(highlightRegex).map((part, index) => {
        const matchedText = uniqueHighlightText.find((text) => text?.trim()?.toLowerCase() === part?.trim().toLowerCase());

        return matchedText ? (
          <span key={index} className={styles.rue_higilitedText} style={{ backgroundColor: colorMap[matchedText] }}>
            {part}
          </span>
        ) : (
          <span key={index}>{part}</span>
        );
      });
    }, [children, highlightText, colorsList]);

    return (
      <span ref={ref} className={className || ""} style={style} {...rest}>
        {highlightedText}
      </span>
    );
  }
);

TextHighlighter.propTypes = {
  children: PropTypes.node.isRequired,
  colorsList: PropTypes.arrayOf(PropTypes.string),
  highlightText: PropTypes.arrayOf(PropTypes.string),
  className: PropTypes.string,
  style: PropTypes.object,
};

TextHighlighter.displayName = "TextHighlighter";

export default TextHighlighter;
