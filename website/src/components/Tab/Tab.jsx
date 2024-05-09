import PropTypes from "prop-types";
import React, { useState } from "react";
import CustomButton from "../Button/CustomButton";
import styles from "./Tab.module.css";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";

const Tab = ({ tabs, orientation }) => {
  const initialActiveTab = tabs.find((tab) => tab.active && !tab.disabled)
    ? tabs.find((tab) => tab.active && !tab.disabled).label
    : tabs.find((tab) => !tab.disabled)?.label || tabs[0].label;

  const [activeTab, setActiveTab] = useState(initialActiveTab);

  const handleClick = (tab) => {
    if (!tab.disabled) {
      setActiveTab(tab.label);
    }
  };

  const handleNext = () => {
    const currentTabIndex = tabs.findIndex((tab) => tab.label === activeTab);
    let nextIndex = (currentTabIndex + 1) % tabs.length;
    while (tabs[nextIndex].disabled) {
      nextIndex = (nextIndex + 1) % tabs.length;
    }
    setActiveTab(tabs[nextIndex].label);
  };

  const handlePrev = () => {
    const currentTabIndex = tabs.findIndex((tab) => tab.label === activeTab);
    let prevIndex = (currentTabIndex - 1 + tabs.length) % tabs.length;
    while (tabs[prevIndex].disabled) {
      prevIndex = (prevIndex - 1 + tabs.length) % tabs.length;
    }
    setActiveTab(tabs[prevIndex].label);
  };

  const getTabListClassName = () => {
    if (orientation === "vertical") {
      return styles.rue_vertical_tab_lists;
    } else {
      return styles.rue_horizontal_tab_lists;
    }
  };

  return (
    <div className={`${styles.rue_tab} ${orientation === "vertical" ? styles.rue_vertical : styles.rue_horizontal}`}>
      <div className={getTabListClassName()}>
        {orientation === "horizontal" && (
          <CustomButton size="sm" variant="dark" onClick={handlePrev}>
            <LeftArrow width="14px" height="14px" />
          </CustomButton>
        )}
        {tabs.map((tab, index) => (
          <CustomButton
            key={index}
            className={`${styles.rue_tab_list_items} ${activeTab === tab.label ? `${styles.active}` : ""}`}
            onClick={() => handleClick(tab)}
            disabled={tab.disabled}
          >
            {tab.icon} {tab.label.slice(0, 25)}
          </CustomButton>
        ))}
        {orientation === "horizontal" && (
          <CustomButton size="sm" variant="dark" onClick={handleNext}>
            <RightArrow width="14px" height="14px" />
          </CustomButton>
        )}
      </div>
      <div className={styles.rue_tab_contents}>
        {tabs.map((tab, index) => {
          if (tab.label === activeTab) {
            return <div key={index}>{tab.content}</div>;
          }
          return null;
        })}
      </div>
    </div>
  );
};

Tab.propTypes = {
  orientation: PropTypes.string,
  tabs: PropTypes.shape({
    findIndex: PropTypes.func,
    length: PropTypes.any,
    map: PropTypes.func,
  }),
};

Tab.defaultProps = {
  orientation: "vertical",
  tabs: [],
};

export default Tab;
