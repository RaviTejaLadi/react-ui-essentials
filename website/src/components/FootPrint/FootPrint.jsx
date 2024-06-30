import PropTypes from "prop-types";
import React from "react";
import styles from "./FootPrint.module.css";

const FootPrint = ({ name, flag }) => {
  return (
    <div className={styles.rue_footprint_wrapper}>
      Proudly made in
      <span className={styles.rue_india_svg} title="India">
        {flag}
      </span>
      by {name}
    </div>
  );
};

FootPrint.propTypes = {
  flag: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
};

export default FootPrint;
