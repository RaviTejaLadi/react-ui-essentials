import PropTypes from "prop-types";
import React from "react";
import styles from "./Radio.module.css";

const Radio = ({ name, value, onChange, size = "sm", ...props }) => {
  const sizeClass = styles[size] || styles.sm;

  return (
    <input
      type="radio"
      name={name}
      value={value}
      checked={value}
      onChange={onChange}
      className={`${styles.rue_radio} ${sizeClass}`}
      {...props}
    />
  );
};

Radio.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};

export default Radio;
