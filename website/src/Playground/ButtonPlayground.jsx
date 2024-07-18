import React, { useState } from "react";
import { Box, Button, Heading } from "react-ui-essentials";
import styles from "./ButtonPlayground.module.css";

const ButtonPlayground = () => {
  const [variant, setVariant] = useState("primary");
  const [size, setSize] = useState("md");
  const [disabled, setDisabled] = useState(false);
  const [raised, setRaised] = useState(false);
  const [rounded, setRounded] = useState(false);
  const [text, setText] = useState("Button");
  const [startIcon, setStartIcon] = useState("");
  const [endIcon, setEndIcon] = useState("");

  const variants = ["primary", "secondary", "success", "info", "warning", "danger", "help", "light", "dark"];
  const sizes = ["sm", "md", "lg", "xl", "xxl", "custom"];
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
    let code = `<Button\n`;
    code += `  variant="${variant}"\n`;
    code += `  size="${size}"\n`;
    if (disabled) code += `  disabled\n`;
    if (raised) code += `  raised\n`;
    if (rounded) code += `  rounded\n`;
    code += `  onClick={() => {}}\n`;
    code += `>\n`;
    if (startIcon) {
      code += `  <Button.Icon>${renderIcon(startIcon)}</Button.Icon>\n`;
    }
    code += `  <Button.Text>${text}</Button.Text>\n`;
    if (endIcon) {
      code += `  <Button.Icon>${renderIcon(endIcon)}</Button.Icon>\n`;
    }
    code += `</Button>`;
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
          <div className={styles.control}>
            <label>
              <input type="checkbox" checked={raised} onChange={(e) => setRaised(e.target.checked)} />
              Raised
            </label>
          </div>
          <div className={styles.control}>
            <label>
              <input type="checkbox" checked={rounded} onChange={(e) => setRounded(e.target.checked)} />
              Rounded
            </label>
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
              <input type="checkbox" checked={disabled} onChange={(e) => setDisabled(e.target.checked)} />
              Disabled
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
        <Button
          variant={variant}
          size={size}
          disabled={disabled}
          raised={raised}
          rounded={rounded}
          onClick={() => alert("Button clicked!")}
        >
          {startIcon && <Button.Icon>{renderIcon(startIcon)}</Button.Icon>}
          <Button.Text>{text}</Button.Text>
          {endIcon && <Button.Icon>{renderIcon(endIcon)}</Button.Icon>}
        </Button>
      </div>
      <div className={styles.codeDisplay}>
        <Heading type="h3">Generated Code:</Heading>
        <pre>{generateCode()}</pre>
      </div>
    </Box>
  );
};

export default ButtonPlayground;
