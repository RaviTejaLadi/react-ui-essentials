import PropTypes from "prop-types";
import React, { useState, useEffect, forwardRef, memo } from "react";
import Button from "../Button/Button";
import { ZoomInMap, ZoomOutMap } from "../../Icons/Round";
import styles from "./FullScreenToggle.module.css";

const FullScreenToggle = forwardRef(({ variant, size, text }, ref) => {
  const [isFullScreen, setFullScreen] = useState(false);

  const toggleFullScreen = () => {
    const doc = document.documentElement;
    if (!isFullScreen) {
      if (doc.requestFullscreen) {
        doc.requestFullscreen();
      } else if (doc.mozRequestFullScreen) {
        doc.mozRequestFullScreen();
      } else if (doc.webkitRequestFullscreen) {
        doc.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      }
      setFullScreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch((err) => {
          console.error("Exit fullscreen error:", err);
        });
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
      setFullScreen(false);
    }
  };
  useEffect(() => {
    return () => {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch((err) => {
          console.error("Exit fullscreen error during cleanup:", err);
        });
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    };
  }, []);
  return (
    <Button ref={ref} variant={variant} size={size} onClick={toggleFullScreen}>
      <span className={styles.rue_fullScreen_container}>
        <span className={styles.rue_fullScreen_icon}>
          {isFullScreen ? <ZoomInMap width="20px" height="20px" /> : <ZoomOutMap width="20px" height="20px" />}
        </span>
        <span>{text}</span>
      </span>
    </Button>
  );
});

FullScreenToggle.propTypes = {
  size: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  text: PropTypes.string,
};

export default memo(FullScreenToggle);
