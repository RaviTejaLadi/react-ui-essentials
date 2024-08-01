import PropTypes from "prop-types";
import React, { forwardRef } from "react";
import CloseButton from "../CloseButton/CloseButton";
import styles from "./Drawer.module.css";

const Drawer = forwardRef(
  ({ position, children, isOpen, onClose, width, height, overLayColor = "rgb(204 204 204 / 39%)", ...rest }, ref) => {
    const getPositionClass = () => {
      return styles[`rue_drawer_${position}`] || styles.rue_drawer_right;
    };

    const handleClose = () => {
      onClose();
    };

    const positionStyles = {
      top: position === "top" ? { height: `${height}`, width: "100%" } : {},
      right: position === "right" ? { height: "100%", width: `${width}` } : {},
      bottom: position === "bottom" ? { height: `${height}`, width: "100%" } : {},
      left: position === "left" ? { height: "100%", width: `${width}` } : {},
    };

    return (
      <div ref={ref} {...rest}>
        <div
          className={`${styles.rue_drawer_overlay} ${isOpen ? styles.rue_open : ""}`}
          style={{ backgroundColor: overLayColor }}
          onClick={handleClose}
        />
        <div
          className={`${styles.rue_drawer} ${getPositionClass()} ${isOpen ? styles.rue_open : ""}`}
          style={positionStyles[position]}
        >
          {children}
        </div>
      </div>
    );
  }
);

Drawer.propTypes = {
  children: PropTypes.node,
  height: PropTypes.string,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  position: PropTypes.oneOf(["top", "right", "bottom", "left"]),
  width: PropTypes.string,
  overLayColor: PropTypes.string,
};

const DrawerHeader = ({ children, closeButton, onClose, ...rest }) => {
  return (
    <div className={styles.rue_drawer_header} {...rest}>
      <div>{children}</div>
      {closeButton && <CloseButton onClick={onClose} />}
    </div>
  );
};

DrawerHeader.propTypes = {
  children: PropTypes.node,
  closeButton: PropTypes.bool,
  onClose: PropTypes.func,
};

const DrawerTitle = ({ children, ...rest }) => {
  return (
    <div className={styles.rue_drawer_title} {...rest}>
      {children}
    </div>
  );
};

DrawerTitle.propTypes = {
  children: PropTypes.node,
};

const DrawerBody = ({ children, ...rest }) => {
  return (
    <div className={styles.rue_drawer_body} {...rest}>
      {children}
    </div>
  );
};

DrawerBody.propTypes = {
  children: PropTypes.node,
};

Drawer.Header = DrawerHeader;
Drawer.Title = DrawerTitle;
Drawer.Body = DrawerBody;
Drawer.displayName = "Drawer";
export default Drawer;
