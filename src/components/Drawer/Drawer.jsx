import PropTypes from "prop-types";
import React, { forwardRef } from "react";
import CloseButton from "../CloseButton/CloseButton";
import styles from "./Drawer.module.css";

const Drawer = forwardRef(
  (
    {
      position,
      children,
      isOpen,
      onClose,
      width,
      height,
      overLayColor = "rgb(204 204 204 / 39%)",
      className,
      style,
      ...rest
    },
    ref
  ) => {
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
      ...style,
    };

    return (
      <div ref={ref} {...rest}>
        <div
          className={`${styles.rue_drawer_overlay} ${isOpen ? styles.rue_open : ""}`}
          style={{ backgroundColor: overLayColor }}
          onClick={handleClose}
        />
        <div
          className={`${styles.rue_drawer} ${getPositionClass()} ${isOpen ? styles.rue_open : ""} ${className || ""}`}
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
  style: PropTypes.object,
  className: PropTypes.string,
};

const DrawerHeader = ({ children, closeButton, onClose, className, style, ...rest }) => {
  return (
    <div className={`${styles.rue_drawer_header} ${className || ""}`} style={style} {...rest}>
      <div>{children}</div>
      {closeButton && <CloseButton onClick={onClose} />}
    </div>
  );
};

DrawerHeader.propTypes = {
  children: PropTypes.node,
  closeButton: PropTypes.bool,
  onClose: PropTypes.func,
  style: PropTypes.object,
  className: PropTypes.string,
};

const DrawerTitle = ({ children, className, style, ...rest }) => {
  return (
    <div className={`${styles.rue_drawer_title} ${className || ""}`} style={style} {...rest}>
      {children}
    </div>
  );
};

DrawerTitle.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  className: PropTypes.string,
};

const DrawerBody = ({ children, style, className, ...rest }) => {
  return (
    <div className={`${styles.rue_drawer_body} ${className || ""}`} style={style} {...rest}>
      {children}
    </div>
  );
};

DrawerBody.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  className: PropTypes.string,
};

Drawer.Header = DrawerHeader;
Drawer.Title = DrawerTitle;
Drawer.Body = DrawerBody;
Drawer.displayName = "Drawer";
export default Drawer;
