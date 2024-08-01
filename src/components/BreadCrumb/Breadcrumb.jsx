import PropTypes from "prop-types";
import React, { forwardRef } from "react";
import styles from "./Breadcrumb.module.css";
import Link from "../Link/Link";
import Box from "../Box/Box";
import ArrowRight from "../../Icons/Round/ArrowRight";

const Breadcrumb = forwardRef(
  (
    {
      children,
      fontSize = "12px",
      fontWeight = "500",
      separator = <ArrowRight width="25px" height="25px" style={{ marginBottom: "-8px" }} />,
      variant,
      color,
      margin,
      ...rest
    },
    ref
  ) => {
    const getBreadcrumbVariant = () => {
      return styles[`rue_breadcrumb_${variant}`] || styles.rue_breadcrumb_default;
    };

    const TextStyles = {
      borderRadius: "20px",
      padding: "1px 8px",
      fontSize: fontSize,
      fontWeight: fontWeight,
      color: color,
    };

    return (
      <Box
        aria-label="breadcrumb"
        className={styles.rue_breadcrumb_container}
        style={{ margin: margin }}
        ref={ref}
        {...rest}
      >
        <ol className={styles.rue_breadcrumb}>
          {React.Children.map(children, (child, index) => (
            <li key={index} className={`${styles.rue_breadcrumb_item} ${child.props.active ? "active" : ""}`}>
              <div className={styles.breadcrumb_link}>
                {index > 0 && <span className={styles.rue_breadcrumb_separator}>{separator}</span>}
                {React.cloneElement(child, {
                  className: `${styles.rue_breadcrumb_text}  ${getBreadcrumbVariant()}`,
                  style: TextStyles,
                })}
              </div>
            </li>
          ))}
        </ol>
      </Box>
    );
  }
);

Breadcrumb.propTypes = {
  children: PropTypes.node.isRequired,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  separator: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  variant: PropTypes.oneOf(["primary", "secondary", "success", "warning", "danger", "info", "help", "light", "dark"]),
  color: PropTypes.string,
};

Breadcrumb.displayName = "Breadcrumb";

const BreadcrumbItem = ({ to, active, children, ...rest }) => {
  if (active) {
    return <span {...rest}>{children}</span>;
  }
  return (
    <Link to={to} {...rest}>
      {children}
    </Link>
  );
};

BreadcrumbItem.propTypes = {
  to: PropTypes.string,
  active: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Breadcrumb.Item = BreadcrumbItem;

export default Breadcrumb;
