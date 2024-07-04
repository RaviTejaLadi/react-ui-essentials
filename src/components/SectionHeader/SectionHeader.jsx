import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import styles from "./SectionHeader.module.css";

const SectionHeader = forwardRef(
  ({ title, subtitle, placement = "center", size = "sm", padding = "20px", margin = "0", controls, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={`${styles.rue_sectionHeader} ${styles[placement]}`}
        style={{ padding: padding, margin: margin }}
        {...rest}
      >
        <div>
          <h2 className={`${styles.rue_title} ${styles[size]}`}>{title}</h2>
          {subtitle && <p className={`${styles.rue_subtitle} ${styles[size]}`}>{subtitle}</p>}
        </div>
        {controls && <div>{controls}</div>}
      </div>
    );
  }
);

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  placement: PropTypes.oneOf(["left", "right", "center"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  margin: PropTypes.string,
  padding: PropTypes.string,
  controls: PropTypes.node,
};

SectionHeader.displayName = "SectionHeader";
export default SectionHeader;
