import PropTypes from "prop-types";
import React, { forwardRef, memo } from "react";
import styles from "./BasicCard.module.css";

const BasicCard = forwardRef(({ title, content, key, ...rest }, ref) => {
  return (
    <div key={key} className={styles.rue_basic_card} ref={ref} {...rest}>
      {title && <p>{title}</p>}
      {content && <span>{content}</span>}
    </div>
  );
});

BasicCard.propTypes = {
  content: PropTypes.string,
  title: PropTypes.string,
};
BasicCard.displayName = "BasicCard";
export default memo(BasicCard);
