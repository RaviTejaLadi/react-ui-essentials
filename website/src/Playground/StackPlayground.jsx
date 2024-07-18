import React, { useState } from "react";
import Stack from "../../rue/Stack";
import { Box, Heading } from "react-ui-essentials";
import styles from "./StackPlayground.module.css";

const StackPlayground = () => {
  const [direction, setDirection] = useState("row");
  const [justifyContent, setJustifyContent] = useState("start");
  const [alignItems, setAlignItems] = useState("stretch");
  const [alignContent, setAlignContent] = useState("stretch");
  const [flexWrap, setFlexWrap] = useState("nowrap");
  const [spacing, setSpacing] = useState(4);
  const [padding, setPadding] = useState("");
  const [itemCount, setItemCount] = useState(3);

  const generateCode = () => {
    let code = `<Stack\n`;
    code += `  direction="${direction}"\n`;
    code += `  justifyContent="${justifyContent}"\n`;
    code += `  alignItems="${alignItems}"\n`;
    code += `  alignContent="${alignContent}"\n`;
    code += `  flexWrap="${flexWrap}"\n`;
    code += `  spacing={${spacing}}\n`;
    if (padding) code += `  padding="${padding}"\n`;
    code += `>\n`;
    for (let i = 0; i < itemCount; i++) {
      code += `  <Stack.Item>Item ${i + 1}</Stack.Item>\n`;
    }
    code += `</Stack>`;
    return code;
  };

  return (
    <Box className={styles.playground} padding="20px" elevation={2} rounded>
      <Heading type="h1" className={styles.title}>
        Stack Playground
      </Heading>

      <div className={styles.controls}>
        <div className={styles.controlGroup}>
          <label>Direction:</label>
          <select value={direction} onChange={(e) => setDirection(e.target.value)}>
            <option value="row">Row</option>
            <option value="column">Column</option>
          </select>
        </div>
        <div className={styles.controlGroup}>
          <label>Justify Content:</label>
          <select value={justifyContent} onChange={(e) => setJustifyContent(e.target.value)}>
            <option value="start">Start</option>
            <option value="center">Center</option>
            <option value="end">End</option>
            <option value="between">Between</option>
            <option value="around">Around</option>
          </select>
        </div>
        <div className={styles.controlGroup}>
          <label>Align Items:</label>
          <select value={alignItems} onChange={(e) => setAlignItems(e.target.value)}>
            <option value="start">Start</option>
            <option value="center">Center</option>
            <option value="end">End</option>
            <option value="stretch">Stretch</option>
          </select>
        </div>
        <div className={styles.controlGroup}>
          <label>Align Content:</label>
          <select value={alignContent} onChange={(e) => setAlignContent(e.target.value)}>
            <option value="start">Start</option>
            <option value="center">Center</option>
            <option value="end">End</option>
            <option value="stretch">Stretch</option>
          </select>
        </div>
        <div className={styles.controlGroup}>
          <label>Flex Wrap:</label>
          <select value={flexWrap} onChange={(e) => setFlexWrap(e.target.value)}>
            <option value="nowrap">No Wrap</option>
            <option value="wrap">Wrap</option>
          </select>
        </div>
        <div className={styles.controlGroup}>
          <label>Spacing:</label>
          <input type="number" value={spacing} onChange={(e) => setSpacing(Number(e.target.value))} />
        </div>
        <div className={styles.controlGroup}>
          <label>Padding:</label>
          <input value={padding} onChange={(e) => setPadding(e.target.value)} placeholder="e.g. 10px or 1rem" />
        </div>
        <div className={styles.controlGroup}>
          <label>Item Count:</label>
          <input
            type="number"
            value={itemCount}
            onChange={(e) => setItemCount(Number(e.target.value))}
            min="1"
            max="10"
          />
        </div>
      </div>

      <div className={styles.preview}>
        <Stack
          direction={direction}
          justifyContent={justifyContent}
          alignItems={alignItems}
          alignContent={alignContent}
          flexWrap={flexWrap}
          spacing={spacing}
          padding={padding}
        >
          {[...Array(itemCount)].map((_, index) => (
            <Stack.Item key={index}>
              <Box padding="10px" elevation={1} rounded className={styles.item}>
                Item {index + 1}
              </Box>
            </Stack.Item>
          ))}
        </Stack>
      </div>

      <div className={styles.codeDisplay}>
        <Heading type="h3">Generated Code:</Heading>
        <pre>{generateCode()}</pre>
      </div>
    </Box>
  );
};

export default StackPlayground;
