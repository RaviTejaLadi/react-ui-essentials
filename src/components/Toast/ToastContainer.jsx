import PropTypes from "prop-types";
import React, { forwardRef } from "react";
import Toast from "./Toast";
import styles from "./ToastContainer.module.css";

let id = 0;

const showToast = (variant = "default", message, options = {}) => {
  const { setToasts, autoClose = 5000, ...toastProps } = options;
  const newToast = {
    id: id++,
    variant,
    message,
    autoClose,
    ...toastProps,
  };
  setToasts((prevToasts) => [...prevToasts, newToast]);
};

const removeToast = (toastId, setToasts) => {
  setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== toastId));
};

const ToastContainer = forwardRef(
  (
    {
      toasts,
      setToasts,
      position = "bottom-right",
      showClose = true,
      rounded = false,
      startIcon,
      className = "",
      style,
      ...rest
    },
    ref
  ) => {
    const handleClose = (id) => removeToast(id, setToasts);
    const containerClasses = [styles.rue_toast_container, styles[position], className].filter(Boolean).join(" ");
    return (
      <div ref={ref} className={containerClasses} style={style} {...rest}>
        {toasts?.map((toast) => (
          <Toast
            key={toast.id}
            {...toast}
            onClose={() => handleClose(toast.id)}
            showClose={showClose}
            rounded={rounded}
            startIcon={startIcon}
          />
        ))}
      </div>
    );
  }
);

ToastContainer.propTypes = {
  setToasts: PropTypes.func.isRequired,
  toasts: PropTypes.array.isRequired,
  position: PropTypes.oneOf(["top-right", "top-center", "top-left", "bottom-right", "bottom-center", "bottom-left"]),
  showClose: PropTypes.bool,
  rounded: PropTypes.bool,
  startIcon: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
};

ToastContainer.displayName = "ToastContainer";

export { showToast, ToastContainer };
