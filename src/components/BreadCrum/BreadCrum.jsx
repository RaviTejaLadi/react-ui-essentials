import React, { useEffect, memo, useState } from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import styles from "./BreadCrum.module.css";
const BreadCrum = ({ currentPath, seperaterWidth, linkStyles, seperaterHeight, seperaterColor, breadCrumStyles }) => {
  const [breadcrums, setBreadCrums] = useState();
  const location = useLocation();
  useEffect(() => {
    const pathnames = currentPath.split("/").filter((x) => x);
    const updatedBreadcrums = pathnames.map((path, index) => {
      const route = `/${pathnames.slice(0, index + 1).join("/")}`;
      const isLast = index === pathnames.length - 1;
      return (
        <span key={route}>
          {" "}
          {isLast ? (
            <span className={styles.breadcrum_link} style={linkStyles}>
              {" "}
              {path}{" "}
            </span>
          ) : (
            <Link to={route} className={styles.breadcrum_link} draggable={false} style={linkStyles}>
              {" "}
              {path}{" "}
            </Link>
          )}
          {index < pathnames.length - 1 && (
            <svg
              aria-hidden="true"
              data-prefix="fas"
              data-icon="angle-right"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 512"
              width={seperaterWidth}
              height={seperaterHeight}
            >
              {" "}
              <path
                fill={seperaterColor}
                d="M246.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256 41.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
              />{" "}
            </svg>
          )}{" "}
        </span>
      );
    });
    setBreadCrums(updatedBreadcrums);
  }, [location]);
  return (
    <span style={breadCrumStyles} className={styles.breadcrum}>
      {breadcrums}{" "}
    </span>
  );
};
BreadCrum.propTypes = {
  breadCrumStyles: PropTypes.object,
  currentPath: PropTypes.shape({ split: PropTypes.func }),
  linkStyles: PropTypes.object,
  seperaterColor: PropTypes.string,
  seperaterHeight: PropTypes.string,
  seperaterWidth: PropTypes.string,
};
export default memo(BreadCrum);
