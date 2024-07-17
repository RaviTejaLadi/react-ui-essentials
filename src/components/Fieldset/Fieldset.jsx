import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import styles from "./Fieldset.module.css";

const Fieldset = forwardRef(({ children, height = "auto", width = "100%", variant, ...rest }, ref) => {
  const getTitleStyle = () => {
    switch (variant) {
      case "primary":
        return styles.rue_fieldset_content_primary;
      case "secondary":
        return styles.rue_fieldset_content_secondary;
      case "success":
        return styles.rue_fieldset_content_success;
      case "warning":
        return styles.rue_fieldset_content_warning;
      case "danger":
        return styles.rue_fieldset_content_danger;
      case "info":
        return styles.rue_fieldset_content_info;
      case "light":
        return styles.rue_fieldset_content_light;
      case "dark":
        return styles.rue_fieldset_content_dark;
      default:
        return styles.rue_fieldset_title;
    }
  };
  return (
    <div
      ref={ref}
      className={`${styles.rue_fieldset} ${getTitleStyle()}`}
      style={{ width: width, height: height }}
      {...rest}
    >
      {children}
    </div>
  );
});

const FieldsetHeader = ({ children, ...rest }) => {
  return (
    <div className={styles.rue_fieldset_header} {...rest}>
      {children}
    </div>
  );
};

FieldsetHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

const FieldsetBody = ({ children, ...rest }) => {
  return (
    <div className={styles.rue_fieldset_content_ontent} {...rest}>
      {children}
    </div>
  );
};

FieldsetBody.propTypes = {
  children: PropTypes.node.isRequired,
};

Fieldset.propTypes = {
  children: PropTypes.node.isRequired,
  height: PropTypes.string,
  variant: PropTypes.oneOf(["primary", "secondary", "success", "warning", "danger", "info", "light", "dark"]),
  width: PropTypes.string,
};
Fieldset.Header = FieldsetHeader;
Fieldset.Body = FieldsetBody;
Fieldset.displayName = "Fieldset";
export default Fieldset;
