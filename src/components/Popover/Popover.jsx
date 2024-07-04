import React, { useState, useRef, useEffect } from "react";
import styles from "./Popover.module.css";
import PropTypes from "prop-types";

const Popover = ({ position = "top", size = "sm", width = "", height = "", content, children, ...rest }) => {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef(null);
  const targetRef = useRef(null);

  const togglePopover = () => {
    setIsOpen(!isOpen);
  };

  const getPosition = () => {
    switch (position) {
      case "top":
        return styles.rue_popover_top;
      case "bottom":
        return styles.rue_popover_bottom;
      case "left":
        return styles.rue_popover_left;
      case "right":
        return styles.rue_popover_right;
      default:
        return styles.rue_popover_top;
    }
  };

  const getSizeClass = () => {
    switch (size) {
      case "sm":
        return styles.rue_popover_sm;
      case "md":
        return styles.rue_popover_md;
      case "lg":
        return styles.rue_popover_lg;
      default:
        return styles.rue_popover_sm;
    }
  };

  const handleClickOutside = (event) => {
    if (popoverRef.current && !popoverRef.current.contains(event.target) && !targetRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.rue_popover_container} {...rest} ref={popoverRef}>
      <div className="target" ref={targetRef} onClick={togglePopover}>
        {children}
      </div>
      {isOpen && (
        <div
          className={`${styles.rue_popover} ${getPosition()} ${getSizeClass()}`}
          style={{ width: width, height: height }}
        >
          {content}
        </div>
      )}
    </div>
  );
};

const PopoverContent = ({ children, width, height, ...rest }) => {
  return (
    <div className={styles.rue_popover_content} style={{ width: width, height: height }} {...rest}>
      {children}
    </div>
  );
};

PopoverContent.propTypes = {
  children: PropTypes.node,
  width: PropTypes.string,
  height: PropTypes.string,
};

const PopoverHeader = ({ children, height, ...rest }) => {
  return (
    <div className={styles.rue_popover_header} style={{ height: height }} {...rest}>
      {children}
    </div>
  );
};

PopoverHeader.propTypes = {
  children: PropTypes.node,
  height: PropTypes.string,
};

const PopoverBody = ({ children, height, ...rest }) => {
  return (
    <div className={styles.rue_popover_body} style={{ height: height }} {...rest}>
      {children}
    </div>
  );
};

PopoverBody.propTypes = {
  children: PropTypes.node,
  height: PropTypes.string,
};

const PopoverFooter = ({ children, height, ...rest }) => {
  return (
    <div className={styles.rue_popover_footer} style={{ height: height }} {...rest}>
      {children}
    </div>
  );
};

PopoverFooter.propTypes = {
  children: PropTypes.node,
  height: PropTypes.string,
};

Popover.propTypes = {
  children: PropTypes.node,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  position: PropTypes.oneOf(["top", "right", "bottom", "left"]),
  width: PropTypes.string,
  height: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};

Popover.Content = PopoverContent;
Popover.Header = PopoverHeader;
Popover.Body = PopoverBody;
Popover.Footer = PopoverFooter;
export default Popover;
