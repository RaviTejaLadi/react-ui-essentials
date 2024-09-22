import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./Tabs.module.css";
import Box from "../Box/Box";

const Tabs = ({
  children,
  active,
  onChange,
  variant = "primary",
  size = "sm",
  headerStyles,
  bodyStyles,
  className,
  style,
  ...rest
}) => {
  const getInitialActiveTab = () => {
    const firstEnabledTab = React.Children.toArray(children).find((child) => !child.props.disabled);
    return active || firstEnabledTab?.props?.value;
  };
  const [activeTab, setActiveTab] = useState(getInitialActiveTab);

  useEffect(() => {
    if (active !== undefined) {
      setActiveTab(active);
    }
  }, [active]);

  const handleTabClick = (value) => {
    setActiveTab(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <Box padding="5px" rounded className={`${styles.rue_tabsContainer} ${className || ""}`} style={style} {...rest}>
      <div className={`${styles.rue_tabList} ${styles[`rue_${variant}`]}`} style={headerStyles}>
        {React.Children.map(children, (child) => (
          <button
            key={child.props.value}
            className={`${styles.rue_tabButton} ${styles[`rue_${size}`]} ${
              child.props.value === activeTab ? styles.rue_activeTab : ""
            } ${styles[`rue_${variant}Button`]}`}
            onClick={() => !child.props.disabled && handleTabClick(child.props.value)}
            disabled={child.props.disabled}
            title={child.props.label}
          >
            {child.props.leftIcon && <span className={styles.rue_leftIcon}>{child.props.leftIcon}</span>}
            <span className={styles.rue_buttonText}>{child.props.label.slice(0, 18)}</span>
            {child.props.rightIcon && <span className={styles.rue_rightIcon}>{child.props.rightIcon}</span>}
          </button>
        ))}
      </div>
      <div className={styles.rue_tabContent} style={bodyStyles}>
        {React.Children.toArray(children).find((child) => child.props.value === activeTab)}
      </div>
    </Box>
  );
};

Tabs.propTypes = {
  active: PropTypes.string,
  bodyStyles: PropTypes.object,
  children: PropTypes.node.isRequired,
  headerStyles: PropTypes.object,
  onChange: PropTypes.func,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  variant: PropTypes.oneOf(["primary", "secondary", "success", "danger", "warning", "help", "info", "dark", "light"]),
};

const Tab = ({ children }) => children;

Tab.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
};

export { Tabs, Tab };
