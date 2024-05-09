import PropTypes from "prop-types";
import React, { Fragment, forwardRef, useEffect, useRef, useState } from "react";
import styles from "./SideBar.module.css";
import DownArrow from "./DownArrow";
import RightArrow from "./RightArrow";
import Link from "../Link/Link";
import Tooltip from "../Tooltip/Tooltip";

const SideBar = ({ children, backgroundColor, color, width }) => {
  return (
    <aside className={styles.rue_sidebar} style={{ backgroundColor: backgroundColor, color: color, width: width }}>
      {children}
    </aside>
  );
};

SideBar.propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.string,
  width: PropTypes.string,
};

SideBar.defaultProps = {
  backgroundColor: "",
  color: "",
  width: "",
};

const SidebarHeader = ({ children }) => {
  return <div className={styles.rue_sidebar_header}>{children}</div>;
};

SidebarHeader.propTypes = {
  children: PropTypes.node,
};

const SideBarBody = forwardRef(({ routes, tooltip, variant }, ref) => {
  let FindActivePathName = routes?.map(({ path }) => {
    return path === window.location.pathname;
  });

  let matchedIndex = FindActivePathName?.findIndex((val) => val);
  let matchedId = matchedIndex !== -1 ? routes?.[matchedIndex]?.id : null;
  const [activeLink, setActiveLink] = useState(matchedId - 1);

  const [activeDropdown, setActiveDropdown] = useState(activeLink);
  const sidebarItemsRefs = useRef([]);
  const dropdownRef = useRef(null);

  useEffect(() => {
    sidebarItemsRefs.current = sidebarItemsRefs.current.slice(0);
  }, []);

  const toggleDropdown = (index) => {
    setActiveLink(index);
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setActiveDropdown(null);
    }
  };

  const getLinkVarient = () => {
    switch (variant) {
      case "primary":
        return styles.rue_active_primary;
      case "secondary":
        return styles.rue_active_secondary;
      case "success":
        return styles.rue_active_success;
      case "danger":
        return styles.rue_active_danger;
      case "warning":
        return styles.rue_active_warning;
      case "info":
        return styles.rue_active_info;
      case "help":
        return styles.rue_active_help;
      case "light":
        return styles.rue_active_light;
      case "dark":
        return styles.rue_active_dark;
      default:
        return styles.rue_active_default;
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <Fragment ref={ref}>
      {routes?.map(({ id, label, path, icons, subMenu }, index) => {
        const isDropdownActive = activeDropdown === index;
        const isActiveLink = window.location.pathname === path;
        return (
          <Fragment key={id}>
            <Link
              id={id}
              to={path}
              className={isDropdownActive || isActiveLink ? `${styles.rue_active} ${getLinkVarient()}` : ""}
              ref={(element) => (sidebarItemsRefs.current[index] = element)}
              onClick={() => toggleDropdown(index)}
            >
              <span className={styles.rue_highlight}></span>
              {icons && (
                <span className={styles.rue_sidebar_icon}>
                  <img src={icons} alt="sidebar_icons" />
                </span>
              )}
              {tooltip && (
                <Tooltip text={label} position="bottom" variant="dark">
                  <span className={styles.rue_sidebar_p}>
                    {label.length > 15 ? <span>{label.slice(0, 15)}...</span> : label}
                  </span>
                </Tooltip>
              )}
              {!tooltip && (
                <span className={styles.rue_sidebar_p}>
                  {label.length > 15 ? <span>{label.slice(0, 15)}...</span> : label}
                </span>
              )}
              {subMenu && (
                <span className={styles.rue_submenu_arrow}>
                  {isDropdownActive ? (
                    <DownArrow size="12px" fill="#ffffff" />
                  ) : (
                    <RightArrow size="12px" fill="#ffffff" />
                  )}
                </span>
              )}
            </Link>
            {subMenu && isDropdownActive && (
              <div className={styles.rue_submenu}>
                {subMenu.map(({ id, label, path }) => (
                  <span key={id}>
                    <Link to={path}>
                      <span role="img" className={styles.rue_highlight}>
                        👉🏻
                      </span>
                      <span className={styles.rue_sidebar_p}>{label}</span>
                    </Link>
                  </span>
                ))}
              </div>
            )}
          </Fragment>
        );
      })}
    </Fragment>
  );
});

SideBarBody.propTypes = {
  routes: PropTypes.shape({
    map: PropTypes.func,
  }),
  tooltip: PropTypes.bool,
  variant: PropTypes.oneOf(["primary", "secondary", "success", "warning", "info", "help", "light", "dark"]),
};

SideBarBody.defaultProps = {
  tooltip: false,
  variant: "primary",
};

const SideBarFooter = ({ children }) => {
  return <div className={styles.rue_sidebar_footer}>{children}</div>;
};

SideBarFooter.propTypes = {
  children: PropTypes.node,
};

SideBar.Header = SidebarHeader;
SideBar.Footer = SideBarFooter;
SideBar.Body = SideBarBody;
export default SideBar;
