import PropTypes from "prop-types";
import React, { useState, useRef, useEffect, forwardRef } from "react";
import styles from "./Popover.module.css";
import Box from "../Box/Box";
import useMergedRef from "../../hooks/useMergedRef";

const Popover = forwardRef(({ content, position = "top", action = "onClick", children }, ref) => {
  const [isVisible, setIsVisible] = useState(false);
  const popoverRef = useRef();
  const mergedRef = useMergedRef(ref, popoverRef);

  const togglePopover = (value) => {
    setIsVisible(value);
  };

  const handleClickOutside = (event) => {
    if (popoverRef.current && !popoverRef.current.contains(event.target)) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    if (isVisible) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isVisible]);

  const handleTriggerAction = () => {
    if (action === "onClick") {
      togglePopover(!isVisible);
    }
  };

  const handleMouseOver = () => {
    if (action === "onMouseOver") {
      togglePopover(true);
    }
  };

  const handleMouseOut = () => {
    if (action === "onMouseOver") {
      togglePopover(false);
    }
  };

  return (
    <div
      className={styles.rue_popoverContainer}
      ref={mergedRef}
      onClick={handleTriggerAction}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {children}
      {isVisible && <div className={`${styles.rue_popover} ${styles[position]}`}>{content}</div>}
    </div>
  );
});

const PopoverContent = ({ children, className, style, ...rest }) => {
  return (
    <Box className={`${className || ""}`} style={{ style }} {...rest}>
      {children}
    </Box>
  );
};

PopoverContent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
};

Popover.propTypes = {
  children: PropTypes.any,
  content: PropTypes.any,
  position: PropTypes.string,
  action: PropTypes.oneOf(["onClick", "onMouseOver"]),
};

Popover.Content = PopoverContent;
Popover.displayName = "Popover";
export default Popover;
