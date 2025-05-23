import PropTypes from "prop-types";
import React, { useState, useEffect, forwardRef } from "react";
import Button from "../Button/Button";
import { ZoomInMap, ZoomOutMap } from "../../Icons/Round";

const FullScreenToggle = forwardRef(({ variant, size, text, ...rest }, ref) => {
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
      // Check if the document is currently in fullscreen mode before exiting
      if (document.fullscreenElement) {
        if (document.exitFullscreen) {
          document.exitFullscreen().catch((err) => {
            console.error("Exit fullscreen error during cleanup:", err);
          });
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        }
      }
    };
  }, []);

  return (
    <Button ref={ref} variant={variant} size={size} onClick={toggleFullScreen} {...rest}>
      <Button.Icon>
        {isFullScreen ? <ZoomInMap width="20px" height="20px" /> : <ZoomOutMap width="20px" height="20px" />}
      </Button.Icon>
      <Button.Text>{text}</Button.Text>
    </Button>
  );
});

FullScreenToggle.propTypes = {
  size: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  text: PropTypes.string,
};

FullScreenToggle.displayName = "FullScreenToggle";
export default FullScreenToggle;
