import PropTypes from "prop-types";
import React, { useState, forwardRef } from "react";
import styles from "./SplitButton.module.css";

const DownArrow = (props) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g strokeWidth={0} />
    <g strokeLinecap="round" strokeLinejoin="round" />
    <path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569z" />
  </svg>
);

const SplitButton = forwardRef(
  (
    {
      disabled = false,
      onClick = () => {},
      size = "sm",
      type = "button",
      variant = "primary",
      className = "",
      raised = false,
      style = {},
      children,
      startIcon,
      endIcon,
      rounded,
      dropdownItems,
      dropdownIcon,
      ...rest
    },
    ref
  ) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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

    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };

    const handleDropdownClick = (item) => {
      if (item.onClick) {
        item.onClick();
      }
      setIsDropdownOpen(false);
    };

    return (
      <div ref={ref} className={styles.rue_split_btn_container} {...rest}>
        <button className={buttonClasses} style={buttonStyle} onClick={onClick} disabled={disabled} type={type}>
          {startIcon && <span>{startIcon}</span>}
          {children}
          {endIcon && <span>{endIcon}</span>}
        </button>
        {dropdownItems && (
          <div className={styles.rue_dropdown}>
            <button className={`${styles.rue_dropdown_toggle} ${buttonClasses}`} onClick={toggleDropdown}>
              {dropdownIcon || <DownArrow width="10px" height="10px" fill="#ffffff" />}
            </button>
            {isDropdownOpen && (
              <div className={styles.rue_dropdown_menu}>
                {dropdownItems.map((item, index) => (
                  <button key={index} className={styles.rue_dropdown_item} onClick={() => handleDropdownClick(item)}>
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
);

SplitButton.propTypes = {
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

SplitButton.displayName = "SplitButton";
export default SplitButton;
