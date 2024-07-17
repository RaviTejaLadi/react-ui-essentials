import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import styles from "./Badge.module.css";

const Badge = forwardRef(({ size = "sm", variant = "primary", children, pill, ...rest }, ref) => {
  const getBadgeStyles = () => {
    let sizeClass = "";
    switch (size) {
      case "sm":
        sizeClass = `${styles.rue_badge_sm}`;
        break;
      case "md":
        sizeClass = `${styles.rue_badge_md}`;
        break;
      case "lg":
        sizeClass = `${styles.rue_badge_lg}`;
        break;
      default:
        break;
    }

    let variantClass = "";
    switch (variant) {
      case "primary":
        variantClass = `${styles.rue_badge_primary}`;
        break;
      case "secondary":
        variantClass = `${styles.rue_badge_secondary}`;
        break;
      case "success":
        variantClass = `${styles.rue_badge_success}`;
        break;
      case "danger":
        variantClass = `${styles.rue_badge_danger}`;
        break;
      case "warning":
        variantClass = `${styles.rue_badge_warning}`;
        break;
      case "info":
        variantClass = `${styles.rue_badge_info}`;
        break;
      case "light":
        variantClass = `${styles.rue_badge_light}`;
        break;
      case "dark":
        variantClass = `${styles.rue_badge_dark}`;
        break;
      default:
        break;
    }

    return `badge ${sizeClass} ${variantClass}`;
  };

  return (
    <span className={getBadgeStyles()} style={{ borderRadius: pill ? "1rem" : "" }} ref={ref} {...rest}>
      {children}
    </span>
  );
});

Badge.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  variant: PropTypes.oneOf(["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"]),
  children: PropTypes.node.isRequired,
};

Badge.displayName = "Badge";
export default Badge;
