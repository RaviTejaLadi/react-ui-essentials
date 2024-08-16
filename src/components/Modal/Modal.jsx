import PropTypes from "prop-types";
import React, { forwardRef } from "react";
import styles from "./Modal.module.css";
import CloseButton from "../CloseButton/CloseButton";

const Modal = forwardRef(
  ({ children, openModal, position = "center", size = "md", variant = "", className, style, ...rest }, ref) => {
    const getModalClassNames = () => {
      return [
        styles[`rue_modal_${variant}`] || "",
        styles[`rue_modal_${size}`] || styles.rue_modal_md,
        styles[`rue_modal_${position}`] || styles.rue_modal_center,
      ].join(" ");
    };
    const modalClassName = getModalClassNames();

    return (
      <div
        ref={ref}
        className={`${styles.rue_modal_overlay} ${
          openModal ? styles.rue_modal_open : styles.rue_modal_closed
        } ${className}`}
        role="dialog"
        aria-modal="true"
      >
        <div className={`${styles.rue_modal} ${modalClassName}`} {...rest}>
          <div className={styles.rue_modal_content}>{children}</div>
        </div>
      </div>
    );
  }
);

Modal.propTypes = {
  children: PropTypes.node,
  openModal: PropTypes.bool.isRequired,
  position: PropTypes.oneOf(["top", "right", "bottom", "left", "center"]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "xxl", "fullscreen"]),
  variant: PropTypes.oneOf(["success", "warning", "info", "danger"]),
};

const ModalHeader = ({ children, closeButton, onClose, height, ...rest }) => {
  return (
    <div className={styles.rue_modal_header} style={{ height }} {...rest}>
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

const ModalTitle = ({ children, ...rest }) => {
  return (
    <div className={styles.rue_modal_title} {...rest}>
      {children}
    </div>
  );
};

ModalTitle.propTypes = {
  children: PropTypes.node,
};

const ModalBody = ({ children, height, ...rest }) => {
  return (
    <div className={styles.rue_modal_body} style={{ height }} {...rest}>
      {children}
    </div>
  );
};

ModalBody.propTypes = {
  children: PropTypes.node,
  height: PropTypes.string,
};

const ModalFooter = ({ children, height, ...rest }) => {
  return (
    <div className={styles.rue_modal_footer} style={{ height }} {...rest}>
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
