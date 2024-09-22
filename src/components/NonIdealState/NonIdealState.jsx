import PropTypes from "prop-types";
import React, { forwardRef } from "react";
import styles from "./NonIdealState.module.css";

const StatusCode = ({ children, className, style, ...rest }) => (
  <div className={`${styles.rue_non_ideal_state_status_code} ${className || ""}`} style={style} {...rest}>
    {children}
  </div>
);

StatusCode.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
};

const Title = ({ children, className, style, ...rest }) => (
  <div className={`${styles.rue_non_ideal_state_title} ${className || ""}`} style={style} {...rest}>
    {children}
  </div>
);

Title.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
};

const Desc = ({ children, className, style, ...rest }) => (
  <div className={`${styles.rue_non_ideal_state_description} ${className || ""}`} style={style} {...rest}>
    {children}
  </div>
);

Desc.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
};

const Actions = ({ children, className, style, ...rest }) => (
  <div className={`${styles.rue_non_ideal_state_buttons} ${className || ""}`} style={style} {...rest}>
    {children}
  </div>
);

Actions.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
};

const NonIdealState = forwardRef(
  (
    {
      children,
      backgroundColor = "#1971c2",
      textColor = "#fff",
      accentColor = "#74c0fc",
      width = "100%",
      height = "100%",
      className,
      style,
      ...rest
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={`${styles.rue_non_ideal_state} ${className || ""}`}
        style={{ backgroundColor, width, height, color: textColor, ...style }}
        {...rest}
      >
        <div className={styles.rue_non_ideal_state_header}>
          {React.Children.map(children, (child) => {
            if (child.type === StatusCode) {
              return React.cloneElement(child, {
                style: { ...child.props.style, color: accentColor },
              });
            }
            return child;
          })}
        </div>
      </div>
    );
  }
);

NonIdealState.propTypes = {
  children: PropTypes.node,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  accentColor: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};

NonIdealState.StatusCode = StatusCode;
NonIdealState.Title = Title;
NonIdealState.Desc = Desc;
NonIdealState.Actions = Actions;

NonIdealState.displayName = "NonIdealState";

export default NonIdealState;
