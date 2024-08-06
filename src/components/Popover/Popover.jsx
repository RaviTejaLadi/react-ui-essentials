import React, { useState, useRef, useEffect } from "react";
import styles from "./Popover.module.css";
import PropTypes from "prop-types";

const Popover = ({
  position = "top",
  size = "sm",
  width = "",
  height = "",
  content,
  children,
  className,
  style,
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef(null);
  const targetRef = useRef(null);

  const togglePopover = () => {
    setIsOpen(!isOpen);
  };

  const getPosition = () => {
    return styles[`rue_popover_${position}`] || styles.rue_popover_top;
  };

  const getSizeClass = () => {
    return styles[`rue_popover_${size}`] || styles.rue_popover_sm;
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
    <div className={`${styles.rue_popover_container} ${className}`} style={style} {...rest} ref={popoverRef}>
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

const PopoverContent = ({ children, width, height, className, style, ...rest }) => {
  return (
    <div
      className={`${styles.rue_popover_content} ${className}`}
      style={{ width: width, height: height, ...style }}
      {...rest}
    >
      {children}
    </div>
  );
};

PopoverContent.propTypes = {
  children: PropTypes.node,
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};

const PopoverHeader = ({ children, height, className, style, ...rest }) => {
  return (
    <div className={`${styles.rue_popover_header} ${className}`} style={{ height: height, ...style }} {...rest}>
      {children}
    </div>
  );
};

PopoverHeader.propTypes = {
  children: PropTypes.node,
  height: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};

const PopoverBody = ({ children, height, className, style, ...rest }) => {
  return (
    <div className={`${styles.rue_popover_body} ${className}`} style={{ height: height, ...style }} {...rest}>
      {children}
    </div>
  );
};

PopoverBody.propTypes = {
  children: PropTypes.node,
  height: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};

const PopoverFooter = ({ children, height, className, style, ...rest }) => {
  return (
    <div className={`${styles.rue_popover_footer} ${className}`} style={{ height: height, ...style }} {...rest}>
      {children}
    </div>
  );
};

PopoverFooter.propTypes = {
  children: PropTypes.node,
  height: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};

Popover.propTypes = {
  children: PropTypes.node,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  position: PropTypes.oneOf(["top", "right", "bottom", "left"]),
  width: PropTypes.string,
  height: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  className: PropTypes.string,
  style: PropTypes.object,
};

Popover.Content = PopoverContent;
Popover.Header = PopoverHeader;
Popover.Body = PopoverBody;
Popover.Footer = PopoverFooter;
export default Popover;
