import PropTypes from "prop-types";
import React, { forwardRef } from "react";
import styles from "./Spinner.module.css";

const Spinner = forwardRef(({ variant = "primary", size = "md", ...rest }, ref) => {
  const colorMap = {
    primary: "#007bff",
    secondary: "#6c757d",
    success: "#28a745",
    danger: "#dc3545",
    warning: "#ffc107",
    info: "#17a2b8",
    light: "#f8f9fa",
    dark: "#343a40",
  };

  const sizeMap = {
    sm: 24,
    md: 36,
    lg: 48,
    xl: 64,
  };

  const color = colorMap[variant];
  const dimensions = sizeMap[size];

  return (
    <div ref={ref} {...rest} className={styles.spinner}>
      <svg width={dimensions} height={dimensions} viewBox="-1 -1 42 42" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id={`spinner-gradient-${variant}`}>
            <stop stopColor={color} stopOpacity="0" offset="0%" />
            <stop stopColor={color} stopOpacity=".631" offset="63.146%" />
            <stop stopColor={color} offset="100%" />
          </linearGradient>
        </defs>
        <g fill="none" fillRule="evenodd">
          <g transform="translate(1 1)">
            <path d="M36 18c0-9.94-8.06-18-18-18" id="Oval-2" stroke={`#spinner-gradient-${variant}`} strokeWidth="4">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 18 18"
                to="360 18 18"
                dur="0.9s"
                repeatCount="indefinite"
              />
            </path>
            <circle fill={color} cx="36" cy="18" r="1">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 18 18"
                to="360 18 18"
                dur="0.9s"
                repeatCount="indefinite"
              />
            </circle>
          </g>
        </g>
      </svg>
    </div>
  );
});
Spinner.propTypes = {
  size: PropTypes.string,
  variant: PropTypes.string,
};

Spinner.displayName = "Spinner";
export default Spinner;
