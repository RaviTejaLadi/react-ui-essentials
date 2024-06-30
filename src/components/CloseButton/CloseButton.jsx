import PropTypes from "prop-types";
import React, { forwardRef, memo } from "react";
import styles from "./CloseButton.module.css";
import Close from "./Close";

const CloseButton = forwardRef(
  ({ variant = "light", size = "sm", onClick, disabled, className, style, ...rest }, ref) => {
    const buttonClasses = `${styles.rue_close_btn} ${variant ? styles[`rue_close_btn_${variant}`] : ""} ${
      size ? styles[`rue_close_btn_${size}`] : ""
    } ${className} `;

    const closeIconSize = {
      height: size === "sm" ? "15px" : size === "md" ? "20px" : size === "lg" ? "25px" : "20px",
      width: size === "sm" ? "15px" : size === "md" ? "20px" : size === "lg" ? "25px" : "20px",
      marginBottom: "-2px",
    };

    return (
      <button className={buttonClasses} ref={ref} onClick={onClick} disabled={disabled} style={style} {...rest}>
        <Close style={closeIconSize} />
      </button>
    );
  }
);

CloseButton.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.string,
  style: PropTypes.object,
  variant: PropTypes.string,
};

export default memo(CloseButton);
