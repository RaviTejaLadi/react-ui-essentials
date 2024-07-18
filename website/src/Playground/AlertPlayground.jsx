import React, { useState } from "react";
import { Box, Heading, Alert, Divider } from "react-ui-essentials";
import styles from "./AlertPlayground.module.css";

const AlertPlayground = () => {
  const [variant, setVariant] = useState("primary");
  const [headerContent, setHeaderContent] = useState("Alert Header");
  const [bodyContent, setBodyContent] = useState("This is the alert body content.");
  const [footerContent, setFooterContent] = useState("Alert Footer");
  const [showHeader, setShowHeader] = useState(true);
  const [showFooter, setShowFooter] = useState(true);

  const generateCode = () => {
    let code = `<Alert variant="${variant}">\n`;
    if (showHeader) {
      code += `  <Alert.Header>${headerContent}</Alert.Header>\n`;
      code += `  <Divider style={{marginBottom:"5px"}}/>\n`;
    }
    code += `  <Alert.Body>${bodyContent}</Alert.Body>\n`;
    if (showFooter) {
      code += `  <Divider style={{marginBottom:"5px"}}/>\n`;
      code += `  <Alert.Footer>${footerContent}</Alert.Footer>\n`;
    }
    code += `</Alert>`;
    return code;
  };

  return (
    <Box className={styles.playground} padding="20px" elevation={2} rounded>
      <Heading type="h1" className={styles.title}>
        Alert Playground
      </Heading>

      <div className={styles.controls}>
        <div className={styles.controlGroup}>
          <label>Variant:</label>
          <select value={variant} onChange={(e) => setVariant(e.target.value)}>
            <option value="primary">Primary</option>
            <option value="secondary">Secondary</option>
            <option value="success">Success</option>
            <option value="danger">Danger</option>
            <option value="warning">Warning</option>
            <option value="info">Info</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
        <div className={styles.controlGroup}>
          <label>
            <input type="checkbox" checked={showHeader} onChange={(e) => setShowHeader(e.target.checked)} />
            Show Header
          </label>
        </div>
        <div className={styles.controlGroup}>
          <label>Header Content:</label>
          <input value={headerContent} onChange={(e) => setHeaderContent(e.target.value)} disabled={!showHeader} />
        </div>
        <div className={styles.controlGroup}>
          <label>Body Content:</label>
          <textarea value={bodyContent} onChange={(e) => setBodyContent(e.target.value)} />
        </div>
        <div className={styles.controlGroup}>
          <label>
            <input type="checkbox" checked={showFooter} onChange={(e) => setShowFooter(e.target.checked)} />
            Show Footer
          </label>
        </div>
        <div className={styles.controlGroup}>
          <label>Footer Content:</label>
          <input value={footerContent} onChange={(e) => setFooterContent(e.target.value)} disabled={!showFooter} />
        </div>
      </div>

      <div className={styles.preview}>
        <Alert variant={variant}>
          {showHeader && (
            <>
              <Alert.Header>{headerContent}</Alert.Header>
              <Divider style={{ marginBottom: "5px" }} />
            </>
          )}
          <Alert.Body>{bodyContent}</Alert.Body>
          {showFooter && (
            <>
              <Divider style={{ marginBottom: "5px" }} />
              <Alert.Footer>{footerContent}</Alert.Footer>
            </>
          )}
        </Alert>
      </div>

      <div className={styles.codeDisplay}>
        <Heading type="h3">Generated Code:</Heading>
        <pre>{generateCode()}</pre>
      </div>
    </Box>
  );
};

export default AlertPlayground;
