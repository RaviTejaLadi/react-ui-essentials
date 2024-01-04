import React from "react";
import PropTypes from "prop-types";
import styles from "./RueBadge.module.css";

const RueBadge = ({ size, variant, children }) => {
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
      case "xl":
        sizeClass = `${styles.rue_badge_xl}`;
        break;
      case "xxl":
        sizeClass = `${styles.rue_badge_xxl}`;
        break;
      case "xxxl":
        sizeClass = `${styles.rue_badge_xxxl}`;
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

  return <span className={getBadgeStyles()}>{children}</span>;
};
RueBadge.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "xxl", "xxxl"]),
  variant: PropTypes.oneOf(["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"]),
  children: PropTypes.node.isRequired,
};

export default RueBadge;
