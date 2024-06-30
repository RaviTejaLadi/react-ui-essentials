import PropTypes from "prop-types";
import React, { memo, forwardRef } from "react";
import CloseButton from "../CloseButton/CloseButton";
import styles from "./Drawer.module.css";

const Drawer = forwardRef(({ position, children, isOpen, onClose, width, height }, ref) => {
  const getPositionClass = () => {
    switch (position) {
      case "top":
        return styles.rue_drawer_top;
      case "right":
        return styles.rue_drawer_right;
      case "bottom":
        return styles.rue_drawer_bottom;
      case "left":
        return styles.rue_drawer_left;
      default:
        return styles.rue_drawer_right;
    }
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
    <div ref={ref}>
      <div className={`${styles.rue_drawer_overlay} ${isOpen ? styles.rue_open : ""}`} onClick={handleClose} />
      <div
        className={`${styles.rue_drawer} ${getPositionClass()} ${isOpen ? styles.rue_open : ""}`}
        style={positionStyles[position]}
      >
        {children}
      </div>
    </div>
  );
});

Drawer.propTypes = {
  children: PropTypes.node,
  height: PropTypes.string,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  position: PropTypes.oneOf(["top", "right", "bottom", "left"]),
  width: PropTypes.string,
};

const DrawerHeader = ({ children, closeButton, onClose }) => {
  return (
    <div className={styles.rue_drawer_header}>
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

const DrawerTitle = ({ children }) => {
  return <div className={styles.rue_drawer_title}>{children}</div>;
};

DrawerTitle.propTypes = {
  children: PropTypes.node,
};

const DrawerBody = ({ children }) => {
  return <div className={styles.rue_drawer_body}>{children}</div>;
};

DrawerBody.propTypes = {
  children: PropTypes.node,
};

Drawer.Header = DrawerHeader;
Drawer.Title = DrawerTitle;
Drawer.Body = DrawerBody;

export default memo(Drawer);
