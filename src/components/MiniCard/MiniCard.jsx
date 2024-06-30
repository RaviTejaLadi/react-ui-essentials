import PropTypes from "prop-types";
import React, { memo, forwardRef } from "react";
import styles from "./MiniCard.module.css";

const MiniCard = forwardRef(({ svg, title, ...rest }, ref) => {
  return (
    <div ref={ref} className={styles.rue_svg_preview_container} {...rest}>
      <div className={styles.rue_svg}>{svg}</div>
      <div className={styles.rue_label}>
        <h6>{title}</h6>
      </div>
    </div>
  );
});

MiniCard.propTypes = {
  svg: PropTypes.node,
  title: PropTypes.string,
};

MiniCard.displayName = "MiniCard";
export default memo(MiniCard);
