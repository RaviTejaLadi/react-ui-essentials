import PropTypes from "prop-types";
import React, { useRef, useEffect, memo } from "react";
import styles from "./TextArea.module.css";

const TextArea = ({ width, height, value }) => {
  const containerStyles = {
    width: width,
    height: height,
  };

  const textareaRef = useRef(null);
  const lineNumbersRef = useRef(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    const lineNumbersEle = lineNumbersRef.current;

    const textareaStyles = window.getComputedStyle(textarea);
    ["fontFamily", "fontSize", "fontWeight", "letterSpacing", "lineHeight", "padding"].forEach((property) => {
      lineNumbersEle.style[property] = textareaStyles[property];
    });

    const parseValue = (v) => (v.endsWith("px") ? parseInt(v.slice(0, -2), 10) : 0);

    const font = `${textareaStyles.fontSize} ${textareaStyles.fontFamily}`;
    const paddingLeft = parseValue(textareaStyles.paddingLeft);
    const paddingRight = parseValue(textareaStyles.paddingRight);

    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    context.font = font;

    const calculateNumLines = (str) => {
      const textareaWidth = textarea.getBoundingClientRect().width - paddingLeft - paddingRight;
      const words = str.split(" ");
      let lineCount = 0;
      let currentLine = "";

      for (const word of words) {
        const wordWidth = context.measureText(word + " ").width;
        const lineWidth = context.measureText(currentLine).width;

        if (lineWidth + wordWidth > textareaWidth) {
          lineCount++;
          currentLine = word + " ";
        } else {
          currentLine += word + " ";
        }
      }

      if (currentLine.trim() !== "") {
        lineCount++;
      }

      return lineCount;
    };

    const calculateLineNumbers = () => {
      const lines = textarea.value.split("\n");
      const numLines = lines.map((line) => calculateNumLines(line));

      let lineNumbers = [];
      let i = 1;
      while (numLines.length > 0) {
        const numLinesOfSentence = numLines.shift();
        lineNumbers.push(i);
        if (numLinesOfSentence > 1) {
          Array(numLinesOfSentence - 1)
            .fill("")
            .forEach((_) => lineNumbers.push(""));
        }
        i++;
      }

      return lineNumbers;
    };

    const displayLineNumbers = () => {
      const lineNumbers = calculateLineNumbers();
      lineNumbersEle.innerHTML = Array.from(
        { length: lineNumbers.length },
        (_, i) => `<div style="color: #999; margin-right: 0.5rem;"><code>${lineNumbers[i] || "&nbsp;"}</code></div>`
      ).join("");
    };

    textarea.addEventListener("input", () => {
      displayLineNumbers();
    });

    displayLineNumbers();

    const ro = new ResizeObserver(() => {
      const rect = textarea.getBoundingClientRect();
      lineNumbersEle.style.height = `${rect.height}px`;
      displayLineNumbers();
    });
    ro.observe(textarea);

    textarea.addEventListener("scroll", () => {
      lineNumbersEle.scrollTop = textarea.scrollTop;
    });

    return () => {
      textarea.removeEventListener("input", () => {
        displayLineNumbers();
      });
      ro.disconnect();
    };
  }, []);

  return (
    <div style={containerStyles} className={styles.rue_container}>
      <div ref={lineNumbersRef} className={styles.rue_line_numbers}></div>
      <textarea
        style={{ width: width }}
        ref={textareaRef}
        value={value}
        readOnly
        defaultValue={`First line with some text 
        Second line with some more text`}
        className={styles.rue_textarea}
      />
    </div>
  );
};

TextArea.propTypes = {
  height: PropTypes.string,
  value: PropTypes.any,
  width: PropTypes.string,
};

TextArea.defaultProps = {
  height: "100%",
  width: "300px",
};

export default memo(TextArea);
