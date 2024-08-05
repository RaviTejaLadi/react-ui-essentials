import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import styles from "./Badge.module.css";

const Badge = forwardRef(({ size = "sm", variant = "primary", children, pill, className, style, ...rest }, ref) => {
  const getBadgeStyles = () => {
    const sizeClass = styles[`rue_badge_${size}`] || "";
    const variantClass = styles[`rue_badge_${variant}`] || "";
    return `badge ${sizeClass} ${variantClass} ${className}`;
  };

  const pillStyles = {
    borderRadius: pill ? "1rem" : "",
    ...style,
  };

  return (
    <span className={getBadgeStyles()} style={pillStyles} ref={ref} {...rest}>
      {children}
    </span>
  );
});

Badge.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  variant: PropTypes.oneOf(["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

Badge.displayName = "Badge";
export default Badge;
