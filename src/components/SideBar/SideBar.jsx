import PropTypes from "prop-types";
import React, { Fragment, forwardRef, useEffect, useRef, useState } from "react";
import styles from "./SideBar.module.css";
import { Link, RoundedIcons } from "react-ui-essentials";
const { ArrowDropDown, ArrowRight, Search } = RoundedIcons;

const SideBar = forwardRef(({ children, backgroundColor = "", color = "", width = "" }, ref) => {
  return (
    <aside ref={ref} className={styles.rue_sidebar} style={{ backgroundColor, color, width }}>
      {children}
    </aside>
  );
});

SideBar.propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.string,
  width: PropTypes.string,
};

const SidebarHeader = ({ children }) => <div className={styles.rue_sidebar_header}>{children}</div>;

SidebarHeader.propTypes = {
  children: PropTypes.node,
};

const SideBarBody = forwardRef(({ routes, variant = "primary" }, ref) => {
  const [activeLink, setActiveLink] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleRouteChange = () => {
      const path = window.location.pathname;
      const matchedRoute = routes.find((route) => route.path === path);
      setActiveLink(matchedRoute ? matchedRoute.id : null);
    };

    window.addEventListener("popstate", handleRouteChange);
    handleRouteChange();

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, [routes]);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const getLinkVariant = () => {
    return styles[`rue_active_${variant}`] || styles.rue_active_default;
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setActiveDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const filteredRoutes = routes.filter((route) => route.label.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div ref={ref}>
      <div className={styles.rue_search_container}>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.rue_search_input}
        />
        <Search width="20px" height="20px" className={styles.rue_search_icon} />
      </div>
      {filteredRoutes.map(({ id, label, path, icons, subMenu }, index) => {
        const isDropdownActive = activeDropdown === index;
        const isActiveLink = activeLink === id;
        return (
          <Fragment key={id}>
            <Link
              id={id}
              to={path}
              className={`${isDropdownActive || isActiveLink ? `${styles.rue_active} ${getLinkVariant()}` : ""}`}
              onClick={() => toggleDropdown(index)}
              title={label}
            >
              <span className={styles.rue_highlight} />
              {icons && (
                <span className={styles.rue_sidebar_icon}>
                  <img src={icons} alt="sidebar_icons" />
                </span>
              )}
              <span className={styles.rue_sidebar_p}>{label.length > 15 ? `${label.slice(0, 15)}...` : label}</span>
              {subMenu && (
                <span className={styles.rue_submenu_arrow}>
                  {isDropdownActive ? (
                    <ArrowDropDown width="30px" height="30px" fill="#151515" />
                  ) : (
                    <ArrowRight width="30px" height="30px" fill="#151515" />
                  )}
                </span>
              )}
            </Link>
            {subMenu && isDropdownActive && (
              <div className={styles.rue_submenu} ref={dropdownRef}>
                {subMenu.map(({ id, label, path }) => (
                  <Link key={id} to={path}>
                    <span role="img" className={styles.rue_highlight}>
                      🎯
                    </span>
                    <span className={styles.rue_sidebar_p}>{label}</span>
                  </Link>
                ))}
              </div>
            )}
          </Fragment>
        );
      })}
    </div>
  );
});

SideBarBody.propTypes = {
  routes: PropTypes.array.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary", "success", "danger", "warning", "info", "help", "light", "dark"]),
};

const SideBarFooter = ({ children }) => <div className={styles.rue_sidebar_footer}>{children}</div>;

SideBarFooter.propTypes = {
  children: PropTypes.node,
};

SideBar.Header = SidebarHeader;
SideBar.Footer = SideBarFooter;
SideBar.Body = SideBarBody;
SideBar.displayName = "SideBar";
SideBarBody.displayName = "SideBarBody";

export default SideBar;
