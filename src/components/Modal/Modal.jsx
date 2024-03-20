import React from "react";
import PropTypes from "prop-types";
import styles from "./Modal.module.css";
import { ModalHeader, ModalBody, ModalFooter } from "./index";

const Modal = React.memo(({ isOpen, variant, size, placement, children, className }) => {
  const getModalClass = () => {
    const variantClass = variant ? styles[`rue_modal_${variant}`] : "";
    const sizeClass = size ? styles[`rue_modal_${size}`] : "";
    const placementClass = placement ? styles[`rue_modal_${placement}`] : "";

    return `${styles.rue_modal} ${variantClass} ${sizeClass} ${placementClass} ${className}`.trim();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.rue_modal_overlay}>
      <div className={getModalClass()} role="dialog" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
});

Modal.propTypes = {
  className: PropTypes.any,
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  placement: PropTypes.oneOf(["top", "bottom", "left", "right", "center", "custom"]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "xxl", "custom"]),
  variant: PropTypes.oneOf(["default", "success", "danger", "warning", "info", "custom"]),
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;
