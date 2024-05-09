import PropTypes from "prop-types";
import React, { useState } from "react";
import styles from "./Tooltip.module.css";

const Tooltip = ({ text, position, children, variant, className, style }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  const getTooltipStyle = () => {
    let tooltipStyles = { ...style };
    switch (position) {
      case "top":
        tooltipStyles = {
          bottom: "110%",
          left: "50%",
          transform: "translateX(-50%)",
        };
        break;
      case "bottom":
        tooltipStyles = {
          top: "110%",
          left: "50%",
          transform: "translateX(-50%)",
        };
        break;
      case "right":
        tooltipStyles = {
          top: "50%",
          left: "110%",
          transform: "translateY(-50%)",
        };
        break;
      case "left":
        tooltipStyles = {
          top: "50%",
          right: "110%",
          transform: "translateY(-50%)",
        };
        break;
      default:
        break;
    }

    switch (variant) {
      case "dark":
        tooltipStyles = {
          ...tooltipStyles,
          backgroundColor: "#302c27",
          color: "#fff",
        };
        break;
      case "light":
        tooltipStyles = {
          ...tooltipStyles,
          backgroundColor: "#f4f4f4",
          color: "#333",
        };
        break;
      case "success":
        tooltipStyles = {
          ...tooltipStyles,
          backgroundColor: "#4caf50",
          color: "#fff",
        };
        break;
      case "warning":
        tooltipStyles = {
          ...tooltipStyles,
          backgroundColor: "#ff9800",
          color: "#fff",
        };
        break;
      case "error":
        tooltipStyles = {
          ...tooltipStyles,
          backgroundColor: "#f44336",
          color: "#fff",
        };
        break;
      case "info":
        tooltipStyles = {
          ...tooltipStyles,
          backgroundColor: "#2196f3",
          color: "#fff",
        };
        break;
      default:
        break;
    }

    return tooltipStyles;
  };

  return (
    <div className={styles.rue_tooltip_container} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
      {isVisible && (
        <div className={`${styles.rue_tooltip} ${position} ${className}`} style={getTooltipStyle()}>
          {text}
        </div>
      )}
    </div>
  );
};

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  position: PropTypes.string,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  variant: PropTypes.oneOf(["dark", "light", "success", "warning", "error", "info"]),
  className: PropTypes.string,
  style: PropTypes.object,
};

Tooltip.defaultProps = {
  text: "Tooltip",
  position: "top",
  variant: "dark",
  className: "",
  style: {},
};

export default Tooltip;
