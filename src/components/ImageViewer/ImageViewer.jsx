import React, { useState, useRef, useEffect, forwardRef } from "react";
import styles from "./ImageViewer.module.css";
import Box from "../Box/Box";
import CloseButton from "../CloseButton/CloseButton";
import Button from "../Button/Button";
import Heading from "../Typography/Heading/Heading";
import Paragraph from "../Typography/Paragraph/Paragraph";
import Tooltip from "../Tooltip/Tooltip";
import ZoomIn from "../../Icons/Round/ZoomIn/ZoomIn";
import ZoomOut from "../../Icons/Round/ZoomOut/ZoomOut";
import Autorenew from "../../Icons/Round/Autorenew/Autorenew";
import Refresh from "../../Icons/Round/Refresh/Refresh";

const ImageViewer = forwardRef(({ src, alt, caption, ...rest }, ref) => {
  const [fullScreen, setFullScreen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const imgRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && fullScreen) {
        setFullScreen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [fullScreen]);

  const toggleFullScreen = () => {
    setFullScreen(!fullScreen);
    setZoom(1);
    setRotation(0);
  };

  const handleZoom = (delta) => {
    setZoom(Math.max(0.1, zoom + delta));
  };

  const handleRotate = (delta) => {
    setRotation((rotation + delta) % 360);
  };

  const resetImage = () => {
    setZoom(1);
    setRotation(0);
  };

  const fullScreenImageStyle = {
    transform: `scale(${zoom}) rotate(${rotation}deg)`,
  };

  const controlsButtonData = [
    {
      text: "ZoomIn",
      action: () => handleZoom(0.1),
      icon: <ZoomIn width="20px" height="20px" />,
    },
    {
      text: "ZoomOut",
      action: () => handleZoom(-0.1),
      icon: <ZoomOut width="20px" height="20px" />,
    },
    {
      text: "Rotate",
      action: () => handleRotate(90),
      icon: <Autorenew width="20px" height="20px" />,
    },
    {
      text: "Reset",
      action: resetImage,
      icon: <Refresh width="20px" height="20px" />,
    },
  ];

  return (
    <div ref={ref} className={styles.rue_image_viewer_container} onClick={toggleFullScreen} {...rest}>
      <Box elevation={0} margin="4px" padding="4px" rounded width="fit-content" height="fit-content" outlined>
        <img ref={imgRef} title="Click to View" src={src} alt={alt} className={styles.rue_image_viewer_image} />
        <Paragraph variant="secondary" italic>
          {caption}
        </Paragraph>
      </Box>
      {fullScreen && (
        <div className={styles.rue_image_viewer_fullScreen_container} onClick={(e) => e.stopPropagation()}>
          <div className={styles.rue_image_viewer_fullScreen_imageContainer}>
            <img
              ref={imgRef}
              src={src}
              alt={alt}
              className={styles.rue_image_viewer_fullScreenImage}
              style={fullScreenImageStyle}
            />
          </div>
          <Box padding="8px" className={styles.rue_image_viewer_fullScreen_controls}>
            <div style={{ width: "30%" }}>
              <Heading type="h2" variant="secondary">
                Preview
              </Heading>
            </div>
            <div
              style={{
                width: "70%",
                display: "flex",
                justifyContent: "space-between",
                gap: "10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                }}
              >
                {controlsButtonData.map((button, index) => (
                  <Tooltip key={index} position="bottom" text={button.text} variant="light">
                    <Button size="sm" variant="primary" onClick={button.action}>
                      <Button.Icon>{button.icon}</Button.Icon>
                    </Button>
                  </Tooltip>
                ))}
              </div>
              <div>
                <CloseButton size="md" variant="dark" onClick={toggleFullScreen} />
              </div>
            </div>
          </Box>
        </div>
      )}
    </div>
  );
});

export default ImageViewer;
