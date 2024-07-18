import React, { useState } from "react";
import { Box, Heading } from "react-ui-essentials";
import styles from "./TagPlayground.module.css";
import Tag from "../../rue/Tag";

const TagPlayground = () => {
  const [variant, setVariant] = useState("primary");
  const [size, setSize] = useState("md");
  const [text, setText] = useState("Tag");
  const [startIcon, setStartIcon] = useState("");
  const [endIcon, setEndIcon] = useState("");
  const [showClose, setShowClose] = useState(false);

  const variants = ["primary", "secondary", "success", "warning", "danger", "info", "light", "dark"];
  const sizes = ["sm", "md", "lg", "xl", "xxl"];
  const icons = {
    "": null,
    Home: "🏠",
    User: "🙎",
    Bell: "🔔",
    Envelope: "✉️",
    Star: "💫",
    Heart: "💖",
    Check: "✅",
    Times: "⏲️",
    Search: "🔍",
  };

  const renderIcon = (iconName) => {
    const IconComponent = icons[iconName];
    return IconComponent;
  };

  const generateCode = () => {
    let code = `<Tag\n`;
    code += `  variant="${variant}"\n`;
    code += `  size="${size}"\n`;
    code += `>\n`;
    if (startIcon) {
      code += `  <Tag.Icon>${renderIcon(startIcon)}</Tag.Icon>\n`;
    }
    code += `  <Tag.Text>${text}</Tag.Text>\n`;
    if (endIcon) {
      code += `  <Tag.Icon>${renderIcon(endIcon)}</Tag.Icon>\n`;
    }
    if (showClose) {
      code += ` <Tag.CloseButton  onClick={() => {}} />\n`;
    }
    code += `</Tag>`;
    return code;
  };
  return (
    <Box margin="10px" padding="10px" elevation={1} rounded style={{ backgroundColor: "#f0f4f8" }}>
      <Heading type="h1" style={{ textAlign: "center", marginBottom: "30px" }}>
        Playground
      </Heading>

      <div className={styles.controls}>
        <div className={styles.controlGroup}>
          {/* <h3>Appearance</h3> */}
          <div className={styles.control}>
            <label>Variant:</label>
            <select value={variant} onChange={(e) => setVariant(e.target.value)}>
              {variants.map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className={styles.controlGroup}>
          {/* <h3>Size</h3> */}
          <div className={styles.control}>
            <label>Size:</label>
            <select value={size} onChange={(e) => setSize(e.target.value)}>
              {sizes.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className={styles.controlGroup}>
          {/* <h3>State</h3> */}
          <div className={styles.control}>
            <label>
              <input type="checkbox" checked={showClose} onChange={(e) => setShowClose(e.target.checked)} />
              show CloseButton
            </label>
          </div>
        </div>
        <div className={styles.controlGroup}>
          <h3>Content</h3>
          <div className={styles.control}>
            <label>Text:</label>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
          </div>
        </div>

        <div className={styles.controlGroup}>
          <h3>Icons</h3>
          <div className={styles.control}>
            <label>Start Icon:</label>
            <select value={startIcon} onChange={(e) => setStartIcon(e.target.value)}>
              {Object.keys(icons).map((icon) => (
                <option key={icon} value={icon}>
                  {icon || "None"}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.control}>
            <label>End Icon:</label>
            <select value={endIcon} onChange={(e) => setEndIcon(e.target.value)}>
              {Object.keys(icons).map((icon) => (
                <option key={icon} value={icon}>
                  {icon || "None"}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className={styles.preview}>
        <Tag variant={variant} size={size} onClick={() => alert("Button clicked!")}>
          {startIcon && <Tag.Icon>{renderIcon(startIcon)}</Tag.Icon>}
          <Tag.Text>{text}</Tag.Text>
          {endIcon && <Tag.Icon>{renderIcon(endIcon)}</Tag.Icon>}
          {showClose && <Tag.CloseButton />}
        </Tag>
      </div>
      <div className={styles.codeDisplay}>
        <Heading type="h3">Generated Code:</Heading>
        <pre>{generateCode()}</pre>
      </div>
    </Box>
  );
};

export default TagPlayground;
