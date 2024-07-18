import React, { useState } from "react";
import { Box, Heading } from "react-ui-essentials";
import styles from "../ButtonPlayground/ButtonPlayground.module.css";
import Spinner from "../../rue/Spinner";

const SpinnerPlayground = () => {
  const [variant, setVariant] = useState("primary");
  const [size, setSize] = useState("md");

  const variants = ["primary", "secondary", "success", "info", "warning", "danger", "light", "dark"];
  const sizes = ["sm", "md", "lg", "xl"];

  const generateCode = () => {
    let code = `<Spinner\n`;
    code += `  variant="${variant}"\n`;
    code += `  size="${size}"\n`;
    code += `/>\n`;
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
      </div>

      <div className={styles.preview}>
        <Spinner variant={variant} size={size} />
      </div>
      <div className={styles.codeDisplay}>
        <Heading type="h3">Generated Code:</Heading>
        <pre>{generateCode()}</pre>
      </div>
    </Box>
  );
};

export default SpinnerPlayground;
