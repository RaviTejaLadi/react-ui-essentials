import PropTypes from "prop-types";
import React, { forwardRef } from "react";
import styles from "./CheckboxCard.module.css";

const CheckboxCard = forwardRef(
  (
    {
      id,
      children,
      checked,
      onCheckboxChange,
      width = "fit-content",
      height = "fit-content",
      margin = "3px",
      padding = "16px",
      className,
      style,
      ...rest
    },
    ref
  ) => {
    const checkStyles = {
      width: width,
      height: height,
      margin: margin,
      padding: padding,
      ...style,
    };

    return (
      <div
        ref={ref}
        className={`${styles.rue_card} ${checked ? styles.rue_cardChecked : ""}  ${className}`}
        style={checkStyles}
        {...rest}
      >
        <div className={styles.rue_checkboxContainer}>
          <input
            type="checkbox"
            checked={checked}
            onChange={() => onCheckboxChange(id)}
            className={styles.rue_checkbox}
          />
        </div>
        <div className={styles.rue_content}>{children}</div>
      </div>
    );
  }
);

CheckboxCard.propTypes = {
  checked: PropTypes.bool,
  children: PropTypes.node.isRequired,
  height: PropTypes.string,
  id: PropTypes.number,
  margin: PropTypes.string,
  onCheckboxChange: PropTypes.func,
  padding: PropTypes.string,
  width: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};

const CheckboxCardContent = ({ children, className, style, ...rest }) => {
  return (
    <div className={className} style={style} {...rest}>
      {children}
    </div>
  );
};

CheckboxCardContent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

CheckboxCard.Content = CheckboxCardContent;
CheckboxCard.displayName = "CheckboxCard";
export default CheckboxCard;
