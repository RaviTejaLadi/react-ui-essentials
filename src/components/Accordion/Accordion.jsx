import React, { createContext, forwardRef, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./Accordion.module.css";
import ArrowDropDown from "../../icons/ArrowDropDown/ArrowDropDown";

const AccordionContext = createContext(null);

const Accordion = forwardRef(({ children, variant = "primary", size = "sm", ...rest }, ref) => {
  const [activeKeys, setActiveKeys] = useState(new Set());

  const toggleItem = (eventKey) => {
    setActiveKeys((prevActiveKeys) => {
      const newActiveKeys = new Set(prevActiveKeys);
      if (newActiveKeys.has(eventKey)) {
        newActiveKeys.delete(eventKey);
      } else {
        newActiveKeys.add(eventKey);
      }
      return newActiveKeys;
    });
  };

  const openItem = (eventKey) => {
    setActiveKeys((prevActiveKeys) => {
      const newActiveKeys = new Set(prevActiveKeys);
      newActiveKeys.add(eventKey);
      return newActiveKeys;
    });
  };

  return (
    <AccordionContext.Provider value={{ activeKeys, toggleItem, openItem, variant, size }}>
      <div
        ref={ref}
        className={`${styles.rue_accordion} ${styles[`rue_accordion_${variant}`]} ${styles[`rue_size_${size}`]}`}
        {...rest}
      >
        {children}
      </div>
    </AccordionContext.Provider>
  );
});

Accordion.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary", "success", "danger", "warning", "help", "info", "dark", "light"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};
const AccordionItem = ({ children, ...rest }) => {
  return <div {...rest}>{children}</div>;
};

AccordionItem.propTypes = {
  children: PropTypes.node.isRequired,
};

const AccordionHeader = ({ children, icon, eventKey, open, ...rest }) => {
  const { activeKeys, toggleItem, openItem, variant } = useContext(AccordionContext);
  const isActive = activeKeys.has(eventKey);

  useEffect(() => {
    if (open && !isActive) {
      openItem(eventKey);
    }
  }, [open, eventKey, openItem, isActive]);

  return (
    <div
      className={`${styles.rue_accordionHeader} ${isActive ? styles.rue_active : ""} ${
        styles[`rue_header_${variant}`]
      }`}
      onClick={() => toggleItem(eventKey)}
      {...rest}
    >
      {children}
      {icon || <ArrowDropDown className={`${styles.rue_icon} ${isActive ? styles.rue_iconActive : ""}`} />}
    </div>
  );
};

AccordionHeader.propTypes = {
  children: PropTypes.node.isRequired,
  eventKey: PropTypes.string.isRequired,
  icon: PropTypes.node,
  open: PropTypes.bool,
};

const AccordionBody = ({ children, eventKey, ...rest }) => {
  const { activeKeys } = useContext(AccordionContext);
  const isActive = activeKeys.has(eventKey);

  return (
    <div className={`${styles.rue_accordionBody} ${isActive ? styles.rue_bodyActive : ""}`} {...rest}>
      <div className={styles.rue_bodyContent}>{children}</div>
    </div>
  );
};

AccordionBody.propTypes = {
  children: PropTypes.node.isRequired,
  eventKey: PropTypes.string.isRequired,
};

Accordion.Header = AccordionHeader;
Accordion.Body = AccordionBody;
Accordion.Item = AccordionItem;
Accordion.displayName = "Accordion";
export default Accordion;
