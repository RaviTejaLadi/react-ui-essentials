import PropTypes from "prop-types";
import React, { useState, useRef, useEffect, forwardRef } from "react";
import styles from "./Dropdown.module.css";
import useMergedRef from "../../hooks/useMergedRef";
import ArrowRight from "../../Icons/Round/ArrowRight";

const Dropdown = forwardRef(
  (
    {
      variant = "primary",
      size = "md",
      children,
      value,
      onChange,
      className,
      style,
      width,
      height,
      placeholder = "Select an option",
      ...rest
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const mergedRef = useMergedRef(ref, dropdownRef);

    const dropdownClass = `${styles.rue_dropdown} ${variant ? `${styles[`rue_dropdown_${variant}`]}` : ""} ${
      size ? `${styles[`rue_dropdown_${size}`]}` : ""
    } ${className || ""}`;

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

    const handleToggle = () => setIsOpen(!isOpen);

    const handleSelect = (option) => {
      onChange(option);
      setIsOpen(false);
    };

    const selectedChild = React.Children.toArray(children).find((child) => child.props.value === value);

    return (
      <div className={styles.rue_dropdownContainer} style={style} ref={mergedRef} {...rest}>
        <button
          className={`${dropdownClass} ${styles.rue_dropdownToggle}`}
          onClick={handleToggle}
          type="button"
          style={{ width, height }}
        >
          <div style={{ width: "80%", fontSize: "15px", fontWeight: "500" }}>
            {selectedChild ? selectedChild.props.children : placeholder}
          </div>
          <div
            style={{
              width: "20%",
            }}
          >
            <ArrowRight
              width="30px"
              height="30px"
              style={{
                marginBottom: "-3px",
                transform: isOpen ? "rotate(90deg)" : "",
                fill: "#fff",
              }}
            />
          </div>
        </button>
        {isOpen && (
          <ul className={styles.rue_dropdownMenu}>
            {React.Children.map(children, (child) => (
              <li
                onClick={() => handleSelect(child.props.value)}
                className={`${styles.rue_dropdownItem} ${styles[`rue_dropdownItem_${variant}`]}`}
              >
                {child}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
);

Dropdown.propTypes = {
  children: PropTypes.node.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  value: PropTypes.string,
  variant: PropTypes.oneOf(["primary", "secondary", "success", "danger", "warning", "info", "help", "light", "dark"]),
  className: PropTypes.string,
  style: PropTypes.object,
  width: PropTypes.string,
  height: PropTypes.string,
};

const DropdownItem = ({ children, className, style, ...rest }) => (
  <div className={`${styles.rue_dropdownItemContent} ${className || ""}`} style={style} {...rest}>
    {children}
  </div>
);

DropdownItem.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

Dropdown.Item = DropdownItem;
Dropdown.displayName = "Dropdown";
export default Dropdown;
