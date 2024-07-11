import PropTypes from "prop-types";
import React, { forwardRef } from "react";
import styles from "./Modal.module.css";
import CloseButton from "../CloseButton/CloseButton";

const Modal = forwardRef(({ children, openModal, position = "center", size = "md", variant = "", ...rest }, ref) => {
  const getModalVariant = () => {
    switch (variant) {
      case "success":
        return styles.rue_modal_success;
      case "danger":
        return styles.rue_modal_danger;
      case "warning":
        return styles.rue_modal_warning;
      case "info":
        return styles.rue_modal_info;
      default:
        return "";
    }
  };

  const getModalSize = () => {
    switch (size) {
      case "sm":
        return styles.rue_modal_sm;
      case "md":
        return styles.rue_modal_md;
      case "lg":
        return styles.rue_modal_lg;
      case "xl":
        return styles.rue_modal_xl;
      case "xxl":
        return styles.rue_modal_xxl;
      case "fullscreen":
        return styles.rue_modal_fullscreen;
      default:
        return styles.rue_modal_md;
    }
  };

  const getModalPosition = () => {
    switch (position) {
      case "top":
        return styles.rue_modal_top;
      case "right":
        return styles.rue_modal_right;
      case "bottom":
        return styles.rue_modal_bottom;
      case "left":
        return styles.rue_modal_left;
      case "center":
        return styles.rue_modal_center;
      default:
        return styles.rue_modal_center;
    }
  };

  return (
    <div
      ref={ref}
      className={`${styles.rue_modal_overlay} ${openModal ? styles.rue_modal_open : styles.rue_modal_closed}`}
      role="dialog"
      aria-modal="true"
    >
      <div className={`${styles.rue_modal} ${getModalSize()} ${getModalPosition()} ${getModalVariant()}`} {...rest}>
        <div className={styles.rue_modal_content}>{children}</div>
      </div>
    </div>
  );
});

Modal.propTypes = {
  children: PropTypes.node,
  openModal: PropTypes.bool.isRequired,
  position: PropTypes.oneOf(["top", "right", "bottom", "left", "center"]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "xxl", "fullscreen"]),
  variant: PropTypes.oneOf(["success", "warning", "info", "danger"]),
};

const ModalHeader = ({ children, closeButton, onClose, height }) => {
  return (
    <div className={styles.rue_modal_header} style={{ height }}>
      <div>{children}</div>
      <div>{closeButton && <CloseButton onClick={onClose} />}</div>
    </div>
  );
};

ModalHeader.propTypes = {
  children: PropTypes.node,
  closeButton: PropTypes.bool,
  height: PropTypes.string,
  onClose: PropTypes.func,
};

const ModalTitle = ({ children }) => {
  return <div className={styles.rue_modal_title}>{children}</div>;
};

ModalTitle.propTypes = {
  children: PropTypes.node,
};

const ModalBody = ({ children, height }) => {
  return (
    <div className={styles.rue_modal_body} style={{ height }}>
      {children}
    </div>
  );
};

ModalBody.propTypes = {
  children: PropTypes.node,
  height: PropTypes.string,
};

const ModalFooter = ({ children, height }) => {
  return (
    <div className={styles.rue_modal_footer} style={{ height }}>
      {children}
    </div>
  );
};

ModalFooter.propTypes = {
  children: PropTypes.node,
  height: PropTypes.string,
};

Modal.Header = ModalHeader;
Modal.Title = ModalTitle;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
Modal.displayName = "Modal";
export default Modal;
