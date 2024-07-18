import React, { useState } from "react";
import { ToastContainer, showToast } from "../../Toast/ToastContainer";
import styles from "./ToastPlayground.module.css";
import { Box, Button, Heading } from "react-ui-essentials";

const variants = ["default", "primary", "secondary", "success", "info", "warning", "danger", "help", "light", "dark"];

const positions = ["top-left", "top-center", "top-right", "bottom-left", "bottom-center", "bottom-right"];

const ToastPlayground = () => {
  const [toasts, setToasts] = useState([]);
  const [position, setPosition] = useState("top-right");
  const [rounded, setRounded] = useState(false);
  const [width, setWidth] = useState(320);
  const [height, setHeight] = useState(50);
  const [selectedVariant, setSelectedVariant] = useState("default");

  const handleShowToast = (variant) => {
    const message = `This is a ${variant} toast message`;
    showToast(variant, message, {
      setToasts,
      autoClose: 3000,
      showClose: true,
      rounded,
      startIcon: "🚀",
      style: { width: `${width}px`, height: `${height}px` },
    });
    setSelectedVariant(variant);
  };

  const handlePositionChange = (newPosition) => {
    setPosition(newPosition);
  };

  return (
    <Box margin="10px" padding="10px" elevation={1} rounded style={{ backgroundColor: "#f0f4f8" }}>
      <Heading type="h1" style={{ textAlign: "center", marginBottom: "30px" }}>
        Playground
      </Heading>

      <Box
        margin="10px"
        padding="10px"
        elevation={1}
        rounded
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className={styles.controlGroup}>
          <label>
            <input type="checkbox" checked={rounded} onChange={(e) => setRounded(e.target.checked)} />
            Rounded corners
          </label>
        </div>
        <div className={styles.controlGroup}>
          <label>
            Width (px):
            <input type="number" value={width} onChange={(e) => setWidth(Number(e.target.value))} min="100" />
          </label>
        </div>
        <div className={styles.controlGroup}>
          <label>
            Height (px):
            <input type="number" value={height} onChange={(e) => setHeight(Number(e.target.value))} min="40" />
          </label>
        </div>
      </Box>

      <Box rounded style={{ display: "flex" }}>
        <Box margin="10px" padding="10px" elevation={1} rounded style={{ flex: 1 }}>
          <Heading type="h2">Toast Variants</Heading>
          {variants.map((variant) => (
            <Button
              key={variant}
              variant={variant}
              className={`${styles.showToastBtn}`}
              onClick={() => handleShowToast(variant)}
              style={{ margin: "5px 0", width: "100%" }}
            >
              Show {variant.charAt(0).toUpperCase() + variant.slice(1)} Toast
            </Button>
          ))}
        </Box>

        <Box margin="10px" padding="10px" elevation={1} rounded style={{ flex: 2 }}>
          <Heading type="h2">Code Snippet</Heading>
          {selectedVariant && (
            <pre className={styles.codeSnippet}>
              {`showToast('${selectedVariant}', 'Message', {
  setToasts,
  autoClose: 3000,
  showClose: true,
  rounded: ${rounded},
  startIcon: '🚀',
  style: { 
    width: '${width}px', 
    height: '${height}px' 
  }
});`}
            </pre>
          )}
        </Box>
      </Box>

      <Box margin="10px" padding="10px" elevation={1} rounded>
        <Heading type="h2" style={{ marginBottom: "15px" }}>
          Toast Container Position
        </Heading>
        <div className={styles.positionGrid}>
          {positions.map((pos) => (
            <button
              key={pos}
              className={`${styles.positionBtn} ${position === pos ? styles.active : ""}`}
              onClick={() => handlePositionChange(pos)}
            >
              {pos}
            </button>
          ))}
        </div>
      </Box>

      <ToastContainer toasts={toasts} setToasts={setToasts} position={position} showClose={true} rounded={rounded} />
    </Box>
  );
};

export default ToastPlayground;
