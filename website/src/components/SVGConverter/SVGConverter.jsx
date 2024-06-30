import React, { useEffect, useState } from "react";
import SyntaxHighlighter from "../SyntaxHighlighter/SyntaxHighlighter";
import styles from "./SVGConverter.module.css";

const SVGConverter = () => {
  const [svgInput, setSvgInput] = useState("");
  const [convertedSVG, setConvertedSVG] = useState("");
  const [svgComponentCode, setSvgComponentCode] = useState("");

  useEffect(() => {
    convertToReactComponent();
  }, [svgInput]);

  const handleInputChange = (event) => {
    setSvgInput(event.target.value);
  };

  const convertToReactComponent = () => {
    try {
      const parser = new DOMParser();
      const xmlDoc = parser?.parseFromString(svgInput, "image/svg+xml");
      const svgElement = xmlDoc?.documentElement;
      svgElement.setAttribute("width", "400");
      svgElement.setAttribute("height", "400");
      const svgString = new XMLSerializer()?.serializeToString(svgElement);
      setConvertedSVG(svgString);
      const svgComponentCode = `
        import * as React from "react";

        const SVGComponent = (props) => (
          ${svgString.replace("<svg", "<svg {...props}")}
        );

        export default SVGComponent;
`;
      setSvgComponentCode(svgComponentCode);
    } catch (error) {
      console.error("Error parsing SVG:", error);
      setConvertedSVG("");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <textarea
          className={styles.textArea}
          placeholder="Paste SVG here"
          value={svgInput}
          onChange={handleInputChange}
          rows={20}
          cols={50}
        />
        <button className={styles.clearButton} onClick={() => setSvgInput("")}>
          Clear
        </button>
      </div>
      <div className={styles.outputContainer}>
        {convertedSVG && (
          <div>
            <h3>SVG Preview:</h3>
            <div className={styles.svgPreview} dangerouslySetInnerHTML={{ __html: convertedSVG }} />
          </div>
        )}
        {svgComponentCode && (
          <div>
            <h3>Converted SVG Component Code:</h3>
            <pre className={styles.codePreview}>
              <SyntaxHighlighter code={svgComponentCode} />
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default SVGConverter;
