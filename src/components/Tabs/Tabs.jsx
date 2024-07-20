import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./Tabs.module.css";

const Tabs = ({ children, active, onChange, variant = "primary", size = "sm", ...rest }) => {
  const [activeTab, setActiveTab] = useState(active || children[0]?.props?.value);

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
    <div className={`${styles.rue_tabsContainer} ${styles[variant]} ${styles[size]}`} {...rest}>
      <div className={styles.rue_tabList}>
        {React.Children.map(children, (child) => (
          <button
            key={child.props.value}
            className={`${styles.rue_tabButton} ${child.props.value === activeTab ? styles.rue_activeTab : ""}`}
            onClick={() => handleTabClick(child.props.value)}
          >
            {child.props.label}
          </button>
        ))}
      </div>
      <div className={styles.rue_tabContent}>
        {React.Children.toArray(children).find((child) => child.props.value === activeTab)}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  children: PropTypes.node.isRequired,
  active: PropTypes.string,
  onChange: PropTypes.func,
  variant: PropTypes.oneOf(["primary", "secondary", "success", "danger", "warning", "info", "dark", "light"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};

const Tab = ({ children }) => children;

Tab.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export { Tabs, Tab };
