import PropTypes from "prop-types";
import React from "react";
import styles from "./Switch.module.css";

const Switch = ({
  id,
  label,
  checked,
  variant,
  size,
  reverse,
  disabled,
  ...rest
}) => {
  const getSizeClass = () => {
    switch (size) {
      case "sm":
        return styles.small;
      case "md":
        return styles.medium;
      case "lg":
        return styles.large;
      default:
        return styles.medium;
    }
  };

  const getVariantClass = () => {
    switch (variant) {
      case "default":
        return styles.default;
      case "primary":
        return styles.primary;
      case "secondary":
        return styles.secondary;
      case "success":
        return styles.success;
      case "info":
        return styles.info;
      case "warning":
        return styles.warning;
      case "danger":
        return styles.danger;
      default:
        return styles.default;
    }
  };

  const handleCheckboxChange = (event) => {
    if (disabled) {
      event.preventDefault();
      return;
    }
  };

  return (
    <div className={styles.rue_checkbox_wrapper}>
      {label && reverse && (
        <label
          htmlFor={id}
          className={`${styles.rue_checkbox_label} ${getSizeClass()}`}
        >
          {label}
        </label>
      )}
      <div
        className={`${styles.rue_checkbox} ${
          checked ? styles.checked : ""
        } ${getVariantClass()} ${getSizeClass()} ${
          disabled ? styles.disabled : ""
        }`}
        onClick={!disabled ? handleCheckboxChange : undefined}
      >
        <input
          id={id}
          type="checkbox"
          className={styles.rue_checkbox_input}
          {...rest}
          disabled={disabled}
        />
        <div className={styles.rue_checkbox_circle}></div>
      </div>
      {label && !reverse && (
        <label
          htmlFor={id}
          className={`${styles.rue_checkbox_label} ${getSizeClass()}`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

Switch.propTypes = {
  checked: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  variant: PropTypes.oneOf([
    "default",
    "primary",
    "success",
    "warning",
    "danger",
  ]),
  reverse: PropTypes.bool,
  disabled: PropTypes.bool,
};

Switch.defaultProps = {
  size: "sm",
  variant: "default",
  label: "",
  checked: false,
  id: "",
  reverse: false,
  disabled: false,
};

export default Switch;