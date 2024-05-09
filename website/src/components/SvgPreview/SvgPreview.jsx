import PropTypes from "prop-types";
import React from "react";
import styles from "./SvgPreview.module.css";

const SvgPreview = ({ svg, title, ...rest }) => {
  return (
    <div className={styles.rue_svg_preview_container} {...rest}>
      <div className={styles.rue_svg}>{svg}</div>
      <div className={styles.rue_label}>
        <h6>{title}</h6>
      </div>
    </div>
  );
};

SvgPreview.propTypes = {
  svg: PropTypes.node,
  title: PropTypes.string,
};

export default SvgPreview;
