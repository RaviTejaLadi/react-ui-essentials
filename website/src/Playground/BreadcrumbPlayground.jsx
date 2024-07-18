import React, { useState } from "react";
import Breadcrumb from "../../rue/Breadcrumb";
import { Box, Heading, RoundedIcons, ColorPicker } from "react-ui-essentials";
import styles from "./BreadcrumbPlayground.module.css";
const { ArrowRight } = RoundedIcons;

const BreadcrumbPlayground = () => {
  const [fontSize, setFontSize] = useState("12px");
  const [fontWeight, setFontWeight] = useState("500");
  const [separator, setSeparator] = useState("arrow");
  const [variant, setVariant] = useState("default");
  const [color, setColor] = useState("");
  const [margin, setMargin] = useState("");
  const [itemCount, setItemCount] = useState(3);

  const generateCode = () => {
    let code = `<Breadcrumb\n`;
    code += `  fontSize="${fontSize}"\n`;
    code += `  fontWeight="${fontWeight}"\n`;
    if (separator === "custom") {
      code += `  separator="/"\n`;
    } else {
      code += `  separator={<ArrowRight width="25px" height="25px" style={{ marginBottom: "-8px" }} />}\n`;
    }
    if (variant !== "default") code += `  variant="${variant}"\n`;
    if (color) code += `  color="${color}"\n`;
    if (margin) code += `  margin="${margin}"\n`;
    code += `>\n`;
    for (let i = 0; i < itemCount; i++) {
      code += `  <Breadcrumb.Item${i === itemCount - 1 ? " active" : ""} >Item ${i + 1}</Breadcrumb.Item>\n`;
    }
    code += `</Breadcrumb>`;
    return code;
  };

  return (
    <Box className={styles.playground} padding="20px" elevation={2} rounded>
      <Heading type="h1" className={styles.title}>
        Breadcrumb Playground
      </Heading>

      <div className={styles.controls}>
        <div className={styles.controlGroup}>
          <label>Font Size:</label>
          <input value={fontSize} onChange={(e) => setFontSize(e.target.value)} placeholder="e.g. 12px" />
        </div>
        <div className={styles.controlGroup}>
          <label>Font Weight:</label>
          <input value={fontWeight} onChange={(e) => setFontWeight(e.target.value)} placeholder="e.g. 500" />
        </div>
        <div className={styles.controlGroup}>
          <label>Separator:</label>
          <select value={separator} onChange={(e) => setSeparator(e.target.value)}>
            <option value="arrow">Arrow</option>
            <option value="custom">/</option>
          </select>
        </div>
        <div className={styles.controlGroup}>
          <label>Variant:</label>
          <select value={variant} onChange={(e) => setVariant(e.target.value)}>
            <option value="primary">Primary</option>
            <option value="secondary">Secondary</option>
            <option value="success">Success</option>
            <option value="danger">Danger</option>
            <option value="warning">Warning</option>
            <option value="info">Info</option>
            <option value="help">Help</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
        <div className={styles.controlGroup}>
          {/* <label>Color:</label> */}
          <ColorPicker value={color} handleChange={setColor} />
        </div>
        <div className={styles.controlGroup}>
          <label>Margin:</label>
          <input value={margin} onChange={(e) => setMargin(e.target.value)} placeholder="e.g. 10px or 1rem" />
        </div>
        <div className={styles.controlGroup}>
          <label>Item Count:</label>
          <input
            type="number"
            value={itemCount}
            onChange={(e) => setItemCount(Number(e.target.value))}
            min="2"
            max="5"
          />
        </div>
      </div>

      <div className={styles.preview}>
        <Breadcrumb
          fontSize={fontSize}
          fontWeight={fontWeight}
          separator={
            separator === "arrow" ? <ArrowRight width="25px" height="25px" style={{ marginBottom: "-8px" }} /> : "/"
          }
          variant={variant !== "default" ? variant : undefined}
          color={color}
          margin={margin}
        >
          {[...Array(itemCount)].map((_, index) => (
            <Breadcrumb.Item key={index} to={`/${index + 1}`} active={index === itemCount - 1}>
              Item {index + 1}
            </Breadcrumb.Item>
          ))}
        </Breadcrumb>
      </div>

      <div className={styles.codeDisplay}>
        <Heading type="h3">Generated Code:</Heading>
        <pre>{generateCode()}</pre>
      </div>
    </Box>
  );
};

export default BreadcrumbPlayground;
