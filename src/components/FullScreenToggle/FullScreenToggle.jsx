import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { Button } from "react-ui-essentials";
import { TbArrowsMaximize, TbArrowsMinimize } from "react-icons/tb";
// import { TbMaximize, TbMinimize } from "react-icons/tb";
import styles from "./FullScreenToggle.module.css";

const FullScreenToggle = ({ variant, size, text }) => {
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
    <Button variant={variant} size={size} onClick={toggleFullScreen}>
      <span className={styles.rue_fullScreen_container}>
        <span className={styles.rue_fullScreen_icon}>{isFullScreen ? <TbArrowsMinimize /> : <TbArrowsMaximize />}</span>
        <span>{text}</span>
      </span>
    </Button>
  );
};

FullScreenToggle.propTypes = {
  size: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  text: PropTypes.string,
};

export default FullScreenToggle;
