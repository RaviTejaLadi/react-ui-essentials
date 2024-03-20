import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import styles from "./Dropdown.module.css";

const Dropdown = ({ title, options, selectedOption, handleSelect, width }) => {
  const [isOpen, setIsOpen] = useState(false);

  const dropDownRef = useRef();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOnchange = (option) => {
    handleSelect(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        handleToggle();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={styles.rue_dropdoen_container} style={{ width: width }}>
      <div className={styles.rue_dropdown_Title}>
        <span style={{ fontSize: "0.8125rem", fontWeight: "500" }}> {title} </span>
      </div>
      <div className={styles.rue_dropdown}>
        <div className={styles.rue_dropdown_header} onClick={handleToggle}>
          <span>{selectedOption}</span> <span>{isOpen ? "🔺" : "🔻"}</span>
        </div>
        {isOpen && (
          <div className={styles.rue_dropdown_list} ref={dropDownRef}>
            {options.map((option, index) => (
              <div key={index} onClick={() => handleOnchange(option)} className={styles.rue_dropdown_list_items}>
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  width: PropTypes.string,
  title: PropTypes.string,
  handleSelect: PropTypes.func.isRequired,
  options: PropTypes.shape({
    map: PropTypes.func.isRequired,
  }),
  selectedOption: PropTypes.string,
};

Dropdown.defaultProps = {
  width: "auto",
  title: "select",
};

export default Dropdown;
