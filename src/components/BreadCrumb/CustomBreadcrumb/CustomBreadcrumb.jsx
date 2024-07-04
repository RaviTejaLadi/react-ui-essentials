import PropTypes from "prop-types";
import React, { forwardRef } from "react";
import styles from "./CustomBreadcrumb.module.css";
import Link from "../../Link/Link";

const RightArrowFilled = ({ size, ...rest }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} xmlns="http://www.w3.org/2000/svg" {...rest}>
    <g strokeWidth={0} />
    <g strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5.536 21.886a1 1 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886" />
  </svg>
);

const CustomBreadcrumb = forwardRef(
  (
    {
      items,
      size = "md",
      fontSize = "",
      fontWeight = "",
      seperator = <RightArrowFilled size="10px" fill="#2d3748" />,
      variant,
      ...rest
    },
    ref
  ) => {
    const getBreadcrumbSize = () => {
      switch (size) {
        case "sm":
          return styles.rue_breadcrumb_sm;
        case "md":
          return styles.rue_breadcrumb_md;
        case "lg":
          return styles.rue_breadcrumb_lg;
        default:
          return styles.rue_breadcrumb_sm;
      }
    };

    const getBreadcrumbVarient = () => {
      switch (variant) {
        case "primary":
          return styles.rue_breadcrumb_primary;
        case "secondary":
          return styles.rue_breadcrumb_secondary;
        case "success":
          return styles.rue_breadcrumb_success;
        case "danger":
          return styles.rue_breadcrumb_danger;
        case "warning":
          return styles.rue_breadcrumb_warning;
        case "info":
          return styles.rue_breadcrumb_info;
        case "help":
          return styles.rue_breadcrumb_help;
        case "light":
          return styles.rue_breadcrumb_light;
        case "dark":
          return styles.rue_breadcrumb_dark;
        default:
          return styles.rue_breadcrumb_default;
      }
    };

    const TextStyles = {
      borderRadius: "20px",
      padding: "1px 8px",
      fontSize: fontSize,
      fontWeight: fontWeight,
    };

    return (
      <nav aria-label="breadcrumb" className={styles.rue_breadcrumb_container} ref={ref} {...rest}>
        <ol className={styles.rue_breadcrumb}>
          {items?.map((item, index) => (
            <li key={index} className={`${styles.rue_breadcrumb_item} ${index === items.length - 1 ? "active" : ""}`}>
              <div className={styles.breadcrumb_link}>
                {index > 0 && (
                  <span className={styles.rue_breadcrumb_separator}>
                    {seperator || <RightArrowFilled size="10px" fill="#2d3748" />}
                  </span>
                )}
                {index === items?.length - 1 ? (
                  <span
                    className={`${styles.rue_breadcrumb_text} ${getBreadcrumbSize()} ${getBreadcrumbVarient()}`}
                    style={TextStyles}
                  >
                    {item.icon} {item.label}
                  </span>
                ) : (
                  <Link
                    to={item.link}
                    className={`${styles.rue_breadcrumb_text} ${getBreadcrumbSize()} ${getBreadcrumbVarient()}`}
                    style={TextStyles}
                  >
                    {item.icon} {item.label}
                  </Link>
                )}
              </div>
            </li>
          ))}
        </ol>
      </nav>
    );
  }
);

CustomBreadcrumb.propTypes = {
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  items: PropTypes.shape({
    length: PropTypes.number,
    map: PropTypes.func,
  }),
  seperator: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  variant: PropTypes.oneOf(["primary", "secondary", "success", "warning", "info", "help", "light", "dark"]),
};
CustomBreadcrumb.displayName = "CustomBreadcrumb";
export default CustomBreadcrumb;
