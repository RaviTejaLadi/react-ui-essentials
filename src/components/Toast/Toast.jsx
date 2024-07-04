import PropTypes from "prop-types";
import React, { useState, useEffect, forwardRef } from "react";
import styles from "./Toast.module.css";

const Toast = forwardRef(({ variant, message, onClose, showClose, autoClose, startIcon, ...rest }, ref) => {
  const [showToast, setShowToast] = useState(false);
  const [hideToast, setHideToast] = useState(false);

  useEffect(() => {
    setShowToast(true);

    const timeout = setTimeout(() => {
      const hideTimeout = setTimeout(() => {
        onClose();
      }, 1500);
      setHideToast(true);
      return () => clearTimeout(hideTimeout);
    }, autoClose);

    return () => clearTimeout(timeout);
  }, [onClose, autoClose]);

  const getToastType = () => {
    switch (variant) {
      case "primary":
        return styles.primary;
      case "secondary":
        return styles.secondary;
      case "success":
        return styles.success;
      case "info":
        return styles.info;
      case "warning":
        return styles.warning;
      case "danger":
        return styles.danger;
      case "help":
        return styles.help;
      case "light":
        return styles.light;
      case "dark":
        return styles.dark;
      default:
        return styles.default;
    }
  };

  return (
    <div
      ref={ref}
      className={`${styles.rue_toast} ${getToastType()} ${showToast ? styles.show : ""} ${
        hideToast ? styles.hide : ""
      }`}
      {...rest}
    >
      {startIcon && <div>{startIcon}</div>}
      <div className={styles.rue_toast_content}>{message}</div>
      {showClose && (
        <button className={styles.rue_toast_close} onClick={onClose}>
          &times;
        </button>
      )}
    </div>
  );
});

Toast.propTypes = {
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  onClose: PropTypes.func,
  variant: PropTypes.string,
  showClose: PropTypes.bool,
  autoClose: PropTypes.number,
  startIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

Toast.displayName = "Toast";
export default Toast;
