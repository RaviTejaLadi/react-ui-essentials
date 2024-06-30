import PropTypes from "prop-types";
import React, { forwardRef } from "react";
import Toast from "./Toast";
import styles from "./ToastContainer.module.css";

let id = 0;

const showToast = (variant = "primary", message, options) => {
  const defaultOptions = {
    autoClose: 5000,
  };
  const toastOptions = { ...defaultOptions, ...options };
  const newToast = {
    id: id++,
    variant,
    message,
    autoClose: toastOptions.autoClose,
  };
  toastOptions.setToasts((prevToasts) => [...prevToasts, newToast]);

  setTimeout(() => {
    removeToast(newToast.id, toastOptions.setToasts);
  }, toastOptions.autoClose);
};

const removeToast = (toastId, setToasts) => {
  setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== toastId));
};

const ToastContainer = forwardRef(({ toasts, setToasts, position, showClose, startIcon, ...rest }, ref) => {
  const handleClose = (id) => {
    removeToast(id, setToasts);
  };

  return (
    <div ref={ref} className={`${styles.rue_toast_container} ${styles[position]}`} {...rest}>
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          variant={toast.variant}
          message={toast.message}
          onClose={() => handleClose(toast.id)}
          position={position}
          showClose={showClose}
          autoClose={toast.autoClose}
          startIcon={startIcon}
        />
      ))}
    </div>
  );
});

ToastContainer.propTypes = {
  position: PropTypes.oneOf(["top-right", "top-center", "top-left", "bottom-right", "bottom-center", "bottom-left"]),
  setToasts: PropTypes.func,
  toasts: PropTypes.array,
  showClose: PropTypes.bool,
  startIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export { showToast, ToastContainer };
