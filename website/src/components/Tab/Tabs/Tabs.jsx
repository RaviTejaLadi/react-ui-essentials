import PropTypes from "prop-types";
import React, { useState } from "react";
import styles from "./Tabs.module.css";
import { Button, Box } from "react-ui-essentials";

export const Tabs = ({ children, controls, controlsButtonSize, controlsButtonVariant }) => {
  const firstChildEventKey = children?.[0]?.props?.eventKey;

  const [activeTab, setActiveTab] = useState(
    children?.find((child) => child?.props?.defaultActiveKey)?.props?.eventKey || firstChildEventKey
  );

  const handleTabClick = (eventKey) => {
    setActiveTab(eventKey);
  };

  const handleLeftClick = () => {
    const enabledTabs = children?.filter((child) => !child?.props?.disabled);
    const currentIndex = enabledTabs?.findIndex((tab) => tab?.props?.eventKey === activeTab);
    const newIndex = (currentIndex - 1 + enabledTabs?.length) % enabledTabs?.length;
    setActiveTab(enabledTabs?.[newIndex]?.props?.eventKey);
  };

  const handleRightClick = () => {
    const enabledTabs = children?.filter((child) => !child?.props?.disabled);
    const currentIndex = enabledTabs?.findIndex((tab) => tab?.props?.eventKey === activeTab);
    const newIndex = (currentIndex + 1) % enabledTabs?.length;
    setActiveTab(enabledTabs?.[newIndex]?.props?.eventKey);
  };

  return (
    <Box margin="5px" elevation={0} padding="5px" width="98%" height="auto" rounded outlined>
      <Box elevation={0} padding="5px" rounded outlined className={styles.tab_nav}>
        {controls && (
          <Button size={controlsButtonSize} variant={controlsButtonVariant} onClick={handleLeftClick}>
            &lt;
          </Button>
        )}
        <div className={styles.tab_buttons}>
          {children?.map((child) => (
            <Button
              size={child?.props?.size || "sm"}
              variant={`${child?.props?.variant || "light"} ${activeTab === child?.props?.eventKey ? "primary" : ""}`}
              key={child?.props?.eventKey}
              className={`${styles.tab_button}`}
              onClick={() => handleTabClick(child?.props?.eventKey)}
              disabled={child?.props?.disabled}
            >
              {child?.props?.title}
            </Button>
          ))}
        </div>
        {controls && (
          <Button size={controlsButtonSize} variant={controlsButtonVariant} onClick={handleRightClick}>
            &gt;
          </Button>
        )}
      </Box>
      <Box margin="5px 0px 0px 0px" padding="10px" rounded outlined elevation={0} className={styles.tab_content}>
        {children?.map(
          (child) =>
            activeTab === child?.props?.eventKey && (
              <div key={child?.props?.eventKey} className={styles.tab_pane}>
                {child?.props?.children}
              </div>
            )
        )}
      </Box>
    </Box>
  );
};

Tabs.propTypes = {
  children: PropTypes.shape({
    filter: PropTypes.func,
    find: PropTypes.func,
    map: PropTypes.func,
  }),
  controls: PropTypes.bool,
  controlsButtonSize: PropTypes.string,
  controlsButtonVariant: PropTypes.string,
};

Tabs.defaultProps = {
  controls: false,
  controlsButtonSize: "sm",
  controlsButtonVariant: "success",
};

export const Tab = ({ eventKey, title, children, variant, defaultActiveKey, disabled, size, ...rest }) => {
  return (
    <div
      eventKey={eventKey}
      title={title}
      defaultActiveKey={defaultActiveKey}
      disabled={disabled}
      variant={variant}
      size={size}
      {...rest}
    >
      {children}
    </div>
  );
};

Tab.propTypes = {
  children: PropTypes.node,
  defaultActiveKey: PropTypes.bool,
  disabled: PropTypes.bool,
  eventKey: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

Tab.defaultProps = {
  disabled: false,
  variant: "light",
  size: "sm",
};
