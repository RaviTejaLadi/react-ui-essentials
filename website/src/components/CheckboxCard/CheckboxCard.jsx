import PropTypes from "prop-types";
import React from "react";
import styles from "./CheckboxCard.module.css";

const CheckboxCard = ({
  id,
  children,
  checked,
  onCheckboxChange,
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
    >
      <div className={styles.checkboxContainer}>
        <input type="checkbox" checked={checked} onChange={() => onCheckboxChange(id)} className={styles.checkbox} />
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

CheckboxCard.propTypes = {
  checked: PropTypes.bool,
  children: PropTypes.node,
  height: PropTypes.string,
  id: PropTypes.number,
  margin: PropTypes.string,
  onCheckboxChange: PropTypes.func,
  padding: PropTypes.string,
  width: PropTypes.string,
};

const CheckboxCardContent = ({ children, ...rest }) => {
  return <div {...rest}>{children}</div>;
};

CheckboxCardContent.propTypes = {
  children: PropTypes.node,
};

CheckboxCard.Content = CheckboxCardContent;

export default CheckboxCard;
