import PropTypes from "prop-types";
import React, { useState, useEffect, forwardRef } from "react";
import styles from "./Toast.module.css";

const Toast = forwardRef(
  (
    {
      variant = "default",
      message,
      onClose,
      showClose = true,
      autoClose = 5000,
      startIcon,
      rounded = false,
      className,
      style,
      ...rest
    },
    ref
  ) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isHiding, setIsHiding] = useState(false);

    useEffect(() => {
      const showTimeout = setTimeout(() => setIsVisible(true), 100);
      const hideTimeout = setTimeout(() => {
        setIsHiding(true);
        setTimeout(onClose, 500);
      }, autoClose);

      return () => {
        clearTimeout(showTimeout);
        clearTimeout(hideTimeout);
      };
    }, [onClose, autoClose]);

    const toastClasses = [
      styles.rue_toast,
      styles[variant],
      isVisible && styles.show,
      isHiding && styles.hide,
      rounded && styles.rounded,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div ref={ref} className={toastClasses} style={style} {...rest}>
        {startIcon && <div className={styles.rue_toast_icon}>{startIcon}</div>}
        <div className={styles.rue_toast_content}>{message}</div>
        {showClose && (
          <button className={styles.rue_toast_close} onClick={onClose} aria-label="Close">
            &times;
          </button>
        )}
      </div>
    );
  }
);

Toast.propTypes = {
  message: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  variant: PropTypes.oneOf([
    "default",
    "primary",
    "secondary",
    "success",
    "info",
    "warning",
    "danger",
    "help",
    "light",
    "dark",
  ]),
  showClose: PropTypes.bool,
  autoClose: PropTypes.number,
  startIcon: PropTypes.node,
  rounded: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
};

Toast.displayName = "Toast";

export default Toast;
