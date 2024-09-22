import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import styles from "./Fieldset.module.css";

const Fieldset = forwardRef(
  ({ children, height = "auto", width = "100%", variant = "primary", className, style, ...rest }, ref) => {
    const getTitleStyle = () => {
      return styles[`rue_fieldset_content_${variant}`] || styles.rue_fieldset_content_primary;
    };

    return (
      <div
        ref={ref}
        className={`${styles.rue_fieldset} ${getTitleStyle()} ${className || ""}`}
        style={{ width: width, height: height, ...style }}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

const FieldsetHeader = ({ children, className, style, ...rest }) => {
  return (
    <div className={`${styles.rue_fieldset_header} ${className || ""}`} style={style} {...rest}>
      {children}
    </div>
  );
};

FieldsetHeader.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

const FieldsetBody = ({ children, className, style, ...rest }) => {
  return (
    <div className={`${styles.rue_fieldset_content_ontent} ${className || ""}`} style={style} {...rest}>
      {children}
    </div>
  );
};

FieldsetBody.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

Fieldset.propTypes = {
  children: PropTypes.node.isRequired,
  height: PropTypes.string,
  variant: PropTypes.oneOf(["primary", "secondary", "success", "warning", "danger", "info", "light", "dark"]),
  width: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};

Fieldset.Header = FieldsetHeader;
Fieldset.Body = FieldsetBody;

Fieldset.displayName = "Fieldset";
export default Fieldset;
