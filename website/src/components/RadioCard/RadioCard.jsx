import React from "react";
import PropTypes from "prop-types";
import styles from "./RadioCard.module.css";

const RadioCard = ({
  id,
  children,
  checked,
  onRadioChange,
  width = "fit-content",
  height = "fit-content",
  margin = "3px",
  padding = "16px",
  ...rest
}) => {
  return (
    <div
      className={`${styles.card} ${checked ? styles.cardChecked : ""}`}
      style={{ width: width, height: height, margin: margin, padding: padding }}
      {...rest}
      onClick={() => onRadioChange(id)} 
    >
      <div className={styles.radioContainer}>
        <input type="radio" checked={checked} onChange={() => onRadioChange(id)} className={styles.radio} />
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

RadioCard.propTypes = {
  checked: PropTypes.bool,
  children: PropTypes.node,
  height: PropTypes.string,
  id: PropTypes.number.isRequired, 
  margin: PropTypes.string,
  onRadioChange: PropTypes.func.isRequired, 
  padding: PropTypes.string,
  width: PropTypes.string,
};

const RadioCardContent = ({ children, ...rest }) => {
  return <div {...rest}>{children}</div>;
};

RadioCardContent.propTypes = {
  children: PropTypes.node,
};

RadioCard.Content = RadioCardContent;
export default RadioCard;
