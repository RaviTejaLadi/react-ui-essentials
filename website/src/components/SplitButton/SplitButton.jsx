import React,{useState} from "react";
import "./SplitButton.css";

const DownArrow = (props) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g strokeWidth={0} />
    <g strokeLinecap="round" strokeLinejoin="round" />
    <path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569z" />
  </svg>
);

const SplitButton = ({
  variant,
  outline,
  size,
  onClick,
  disabled,
  children,
  type,
  className,
  style,
  dropdownItems,
  dropdownIcon,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const buttonClasses = `cbtn ${variant ? ` cbtn-${variant}` : ""} ${
    size ? `cbtn-${size}` : ""
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
    <div className="split-btn-container">
      <button
        className={buttonClasses}
        onClick={onClick}
        disabled={disabled}
        type={type}
        style={style}
      >
        {children}
      </button>
      {dropdownItems && (
        <div className="dropdown">
          <button
            className={`dropdown-toggle ${buttonClasses}`}
            onClick={toggleDropdown}
          >
            {dropdownIcon ? (
              dropdownIcon
            ) : (
              <DownArrow width="10px" height="10px" fill="#ffffff" />
            )}
          </button>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              {dropdownItems.map((item, index) => (
                <button
                  key={index}
                  className="dropdown-item"
                  onClick={() => handleDropdownClick(item)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SplitButton;