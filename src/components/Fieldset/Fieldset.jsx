import React from "react";
import PropTypes from "prop-types";
import styles from "./Fieldset.module.css";

const Fieldset = ({ title, children, height, width, variant }) => {
  const fieldsetStyle = {
    height: height || "auto",
    width: width || "100%",
  };

  const getTitleStyle = () => {
    switch (variant) {
      case "primary":
        return styles.rue_fieldset_title_primary;
      case "secondary":
        return styles.rue_fieldset_title_secondary;
      case "success":
        return styles.rue_fieldset_title_success;
      case "warning":
        return styles.rue_fieldset_title_warning;
      case "danger":
        return styles.rue_fieldset_title_danger;
      case "info":
        return styles.rue_fieldset_title_info;
      case "light":
        return styles.rue_fieldset_title_light;
      case "dark":
        return styles.rue_fieldset_title_dark;
      default:
        return styles.rue_fieldset_title;
    }
  };

  return (
    <div className={styles.rue_fieldset} style={fieldsetStyle}>
      <div className={getTitleStyle()}>{title}</div>
      <div className={styles.rue_fieldset_content}>{children}</div>
    </div>
  );
};

Fieldset.propTypes = {
  children: PropTypes.node.isRequired,
  height: PropTypes.string,
  title: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary", "success", "warning", "danger", "info", "light", "dark"]),
  width: PropTypes.string,
};

export default Fieldset;
