import PropTypes from "prop-types";
import React, { forwardRef, memo } from "react";
import styles from "./Button.module.css";

const Button = forwardRef(
  (
    {
      disabled = false,
      onClick = () => {},
      size = "sm",
      type = "button",
      variant = "primary",
      className = "",
      raised = false,
      boxShadow = "",
      style = {},
      children,
      startIcon,
      endIcon,
      rounded,
      ...rest
    },
    ref
  ) => {
    const buttonStyle = {
      boxShadow: raised
        ? "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)"
        : "",
      borderRadius: rounded && "2rem",
      ...style,
    };
    const buttonClasses = `${styles.rue_btn} ${variant ? `${styles[`rue_btn_${variant}`]}` : ""}  ${
      size ? `${styles[`rue_btn_${size}`]}` : ""
    } ${className}`;

    return (
      <button
        className={buttonClasses}
        style={buttonStyle}
        onClick={onClick}
        disabled={disabled}
        type={type}
        ref={ref}
        {...rest}
      >
        {startIcon && <span>{startIcon}</span>}
        {children}
        {endIcon && <span>{endIcon}</span>}
      </button>
    );
  }
);

Button.propTypes = {
  boxShadow: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  endIcon: PropTypes.node,
  onClick: PropTypes.func,
  raised: PropTypes.bool,
  rounded: PropTypes.bool,
  size: PropTypes.string,
  startIcon: PropTypes.node,
  style: PropTypes.object,
  type: PropTypes.string,
  variant: PropTypes.string,
};
Button.displayName = "Button";
export default memo(Button);
