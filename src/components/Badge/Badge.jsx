import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import styles from "./Badge.module.css";

const Badge = forwardRef(({ size = "sm", variant = "primary", children, pill, ...rest }, ref) => {
  const getBadgeStyles = () => {
    let sizeClass = styles[`rue_badge_${size}`] || "";
    let variantClass = styles[`rue_badge_${variant}`] || "";
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
