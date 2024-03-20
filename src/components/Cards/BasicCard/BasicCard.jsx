import PropTypes from "prop-types";
import React from "react";
import styles from "./BasicCard.module.css";

const BasicCard = ({ title, content, key }) => {
  return (
    <div key={key} className={styles.rue_basic_card}>
      {title && <p>{title}</p>}
      {content && <span>{content}</span>}
    </div>
  );
};

BasicCard.propTypes = {
  content: PropTypes.string,
  title: PropTypes.string,
};

export default BasicCard;
