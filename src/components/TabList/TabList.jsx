import PropTypes from "prop-types";
import React, { useState, forwardRef } from "react";
import Button from "../Button/Button";
import Box from "../Box/Box";
import styles from "./TabList.module.css";
import { ArrowLeft, ArrowRight } from "../../Icons/Round";

const TabList = forwardRef(
  (
    {
      tabButtonSize = "sm",
      orientation = "horizontal",
      tabs = [],
      width = "auto",
      height = "auto",
      margin,
      controls,
      outlined,
      elevation,
      ...rest
    },
    ref
  ) => {
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
      <Box
        ref={ref}
        elevation={elevation}
        outlined={outlined}
        className={`${styles.rue_tab} ${orientation === "vertical" ? styles.rue_vertical : styles.rue_horizontal}`}
        width={width}
        height={height}
        margin={margin}
        {...rest}
      >
        <Box
          rounded
          outlined
          padding="5px"
          margin={orientation === "horizontal" ? "5px 5px 0px 5px" : "5px"}
          className={getTabListClassName()}
        >
          {orientation === "horizontal" && controls && (
            <Button size="sm" variant="light" onClick={handlePrev}>
              <Button.Icon>
                <ArrowLeft width="14px" height="14px" />
              </Button.Icon>
            </Button>
          )}
          {tabs.map((tab, index) => (
            <Button
              size={tabButtonSize}
              key={index}
              className={`${styles.rue_tab_list_items} ${activeTab === tab.label ? `${styles.active}` : ""}`}
              variant="light"
              onClick={() => handleClick(tab)}
              disabled={tab.disabled}
            >
              <Button.Icon>{tab.icon}</Button.Icon>
              <Button.Text>{tab.label}</Button.Text>
            </Button>
          ))}
          {orientation === "horizontal" && controls && (
            <Button size="sm" variant="light" onClick={handleNext}>
              <Button.Icon>
                <ArrowRight width="14px" height="14px" />
              </Button.Icon>
            </Button>
          )}
        </Box>
        <Box
          rounded
          outlined
          padding="5px"
          margin={orientation === "vertical" ? "5px 5px 5px 0px" : "5px"}
          className={styles.rue_tab_contents}
        >
          {tabs.map((tab, index) => {
            if (tab.label === activeTab) {
              return <div key={index}>{tab.content}</div>;
            }
            return null;
          })}
        </Box>
      </Box>
    );
  }
);

TabList.propTypes = {
  height: PropTypes.string,
  margin: PropTypes.string,
  orientation: PropTypes.string,
  tabs: PropTypes.shape({
    find: PropTypes.func,
    findIndex: PropTypes.func,
    length: PropTypes.number,
    map: PropTypes.func,
  }),
  width: PropTypes.string,
  outlined: PropTypes.bool,
  elevation: PropTypes.number,
  tabButtonSize: PropTypes.string,
};
TabList.displayName = "TabList";
export default TabList;
