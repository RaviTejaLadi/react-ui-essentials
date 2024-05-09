import PropTypes from "prop-types";
import React from "react";
import styles from "./NonIdealState.module.css";

const NonIdealState = ({ statusCode, title, description, actions, backgroundColor, width, height, ...rest }) => {
  return (
    <div
      className={styles.rue_non_ideal_state}
      style={{ backgroundColor: backgroundColor, width: width, height: height }}
      {...rest}
    >
      <div className={styles.rue_non_ideal_state_header}>
        <div className={styles.rue_non_ideal_state_status_code}>{statusCode}</div>
        <div className={styles.rue_non_ideal_state_title}>{title}</div>
        <div className={styles.rue_non_ideal_state_description}>{description}</div>
      </div>
      <div className={styles.rue_non_ideal_state_buttons}>{actions}</div>
    </div>
  );
};

NonIdealState.propTypes = {
  actions: PropTypes.node,
  backgroundColor: PropTypes.string,
  description: PropTypes.string,
  height: PropTypes.string,
  statusCode: PropTypes.string,
  title: PropTypes.string,
  width: PropTypes.string,
};

NonIdealState.defaultProps = {
  backgroundColor: "#1971c2",
  width: "100%",
  height: "100%",
};

export default NonIdealState;
