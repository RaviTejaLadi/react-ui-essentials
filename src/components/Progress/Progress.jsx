import PropTypes from "prop-types";
import React, { forwardRef } from "react";
import styles from "./Progress.module.css";

const Progress = forwardRef(
  ({ progress, size = "sm", variant = "primary", className, style, zigzag = false, ...rest }, ref) => {
    const validSizes = ["sm", "md", "lg"];
    const validVariants = ["primary", "secondary", "success", "danger", "warning", "info", "help", "light", "dark"];

    const sizeClass = validSizes.includes(size) ? styles[size] : styles.md;
    const variantClass = validVariants.includes(variant) ? styles[variant] : styles.primary;
    const zigzagClass = zigzag ? styles.zigzag : "";
    const clampedProgress = Math.min(Math.max(progress, 0), 100);

    return (
      <div
        ref={ref}
        className={`${styles.progressBarContainer} ${sizeClass} ${className || ""}`}
        style={style}
        {...rest}
      >
        <div
          className={`${styles.progressBar} ${variantClass} ${zigzagClass}`}
          style={{ width: `${clampedProgress}%` }}
          role="progressbar"
          aria-valuenow={clampedProgress}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <span className={styles.progressText}>{`${clampedProgress}%`}</span>
        </div>
      </div>
    );
  }
);

Progress.propTypes = {
  className: PropTypes.string,
  progress: PropTypes.number,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  style: PropTypes.object,
  variant: PropTypes.oneOf(["primary", "secondary", "success", "danger", "warning", "info", "help", "light", "dark"]),
  zigzag: PropTypes.bool,
};
Progress.displayName = "ProgressBar";
export default Progress;
