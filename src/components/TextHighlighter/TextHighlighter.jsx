import React, { useState, useEffect, forwardRef, memo } from "react";
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

const TextHighlighter = forwardRef(({ children, highlightText, colorsList = [], ...rest }, ref) => {
  const [highlightedText, setHighlightedText] = useState(null);

  useEffect(() => {
    if (!highlightText?.length) {
      setHighlightedText(children);
      return;
    }

    const colors = [...colorsList, ...defaultColors];

    const uniqueHighlightText = highlightText.filter((value, index, self) => {
      return self.indexOf(value) === index;
    });

    const colorMap = {};

    uniqueHighlightText.forEach((text, index) => {
      return (colorMap[text] = colors[index % colors.length]);
    });

    const escapeRegExp = (str) => str?.toString()?.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") || "";

    const highlightRegex = new RegExp(`\\b(${uniqueHighlightText.map(escapeRegExp).join("|")})\\b`, "gi");

    const newHighlightedText = children.split(highlightRegex).map((part, index) => {
      const matchedText = uniqueHighlightText?.find((text) => {
        const trimmedText = typeof text === "string" ? text.trim().toLowerCase() : text;
        const trimmedPart = part?.trim().toLowerCase();

        const isMatch = trimmedPart === trimmedText;
        return isMatch;
      });

      return matchedText ? (
        <span key={index} className={styles.higilitedText} style={{ backgroundColor: colorMap[matchedText] }}>
          {part}
        </span>
      ) : (
        <span key={index}>{part}</span>
      );
    });
    setHighlightedText(newHighlightedText);
  }, [children, highlightText, colorsList]);

  return (
    <span ref={ref} {...rest}>
      {highlightedText}
    </span>
  );
});

TextHighlighter.propTypes = {
  children: PropTypes.node.isRequired,
  colorsList: PropTypes.array.isRequired,
  highlightText: PropTypes.array.isRequired,
};

TextHighlighter.displayName = "TextHighlighter";
export default memo(TextHighlighter);
