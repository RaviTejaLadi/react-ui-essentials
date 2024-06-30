import React, { useEffect, memo, useState, forwardRef } from "react";
import PropTypes from "prop-types";
import Link from "../../Link/Link";
import styles from "./DynamicBreadCrumb.module.css";

const DynamicBreadCrumb = forwardRef(
  ({ currentPath, seperaterWidth, style, seperaterHeight, seperaterColor, breadCrumStyles, ...rest }, ref) => {
    const [breadcrums, setBreadCrums] = useState();

    useEffect(() => {
      const pathnames = currentPath?.split("/")?.filter((x) => x);
      const updatedBreadcrums = pathnames?.map((path, index) => {
        const route = `/${pathnames?.slice(0, index + 1)?.join("/")}`;
        const isLast = index === pathnames?.length - 1;
        return (
          <span key={route}>
            {isLast ? (
              <span className={styles.rue_dynamic_breadcrum_link} style={style}>
                {path}
              </span>
            ) : (
              <Link to={route} className={styles.rue_dynamic_breadcrum_link} draggable={false} style={style}>
                {path}
              </Link>
            )}
            {index < pathnames?.length - 1 && (
              <svg
                aria-hidden="true"
                data-prefix="fas"
                data-icon="angle-right"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
                width={seperaterWidth}
                height={seperaterHeight}
              >
                <path
                  fill={seperaterColor}
                  d="M246.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256 41.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
                />
              </svg>
            )}
          </span>
        );
      });
      setBreadCrums(updatedBreadcrums);
    }, [window.location.pathname]);

    return (
      <span style={breadCrumStyles} className={styles.rue_dynamic_breadcrum} ref={ref} {...rest}>
        {breadcrums}
      </span>
    );
  }
);

DynamicBreadCrumb.propTypes = {
  breadCrumStyles: PropTypes.object,
  currentPath: PropTypes.shape({ split: PropTypes.func }),
  style: PropTypes.object,
  seperaterColor: PropTypes.string,
  seperaterHeight: PropTypes.string,
  seperaterWidth: PropTypes.string,
};

DynamicBreadCrumb.displayName = "DynamicBreadCrumb";
export default memo(DynamicBreadCrumb);
