import PropTypes from "prop-types";
import React, { Fragment, forwardRef, useEffect, useRef, useState } from "react";
import styles from "./SideBar.module.css";
import Link from "../Link/Link";
import ArrowDropDown from "../../Icons/Round/ArrowDropDown";
import ArrowRight from "../../Icons/Round/ArrowRight";
import Search from "../../Icons/Round/Search";

const SideBar = forwardRef(({ children, backgroundColor = "", color = "", width = "", ...rest }, ref) => {
  return (
    <aside ref={ref} className={styles.rue_sidebar} style={{ backgroundColor, color, width }} {...rest}>
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

const SidebarHeader = ({ children, ...rest }) => (
  <div className={styles.rue_sidebar_header} {...rest}>
    {children}
  </div>
);

SidebarHeader.propTypes = {
  children: PropTypes.node,
};

const SideBarBody = forwardRef(
  ({ routes, variant = "primary", fallbackMessage = "😒 No Components found...", ...rest }, ref) => {
    const [activeLink, setActiveLink] = useState(null);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const dropdownRef = useRef(null);

    useEffect(() => {
      const handleRouteChange = () => {
        const path = window.location.pathname;
        let matchedRoute = routes.find((route) => route.path === path);
        if (!matchedRoute) {
          routes.forEach((route) => {
            if (route.subMenu) {
              const subRoute = route.subMenu.find((sub) => sub.path === path);
              if (subRoute) {
                matchedRoute = route;
                setActiveLink(subRoute.id);
              }
            }
          });
        } else {
          setActiveLink(matchedRoute.id);
        }
        setActiveDropdown(matchedRoute ? matchedRoute.id : null);
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
        // setActiveDropdown(null);
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
      <div ref={ref} {...rest}>
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
        {filteredRoutes.length === 0 ? (
          <div className={styles.rue_fallback_message}>{fallbackMessage}</div>
        ) : (
          filteredRoutes.map(({ id, label, path, icons, subMenu }, index) => {
            const isDropdownActive = activeDropdown === id;
            const isActiveLink = activeLink === id;
            const isParentActive = subMenu && subMenu.some((sub) => sub.id === activeLink);
            return (
              <Fragment key={id}>
                <div className={styles.rue_link_container}>
                  <Link
                    id={id}
                    to={path}
                    className={`${isActiveLink || isParentActive ? `${styles.rue_active} ${getLinkVariant()}` : ""}`}
                    title={label}
                    onClick={() => {
                      setActiveLink(id);
                      if (!subMenu) {
                        setActiveDropdown(null);
                      }
                    }}
                  >
                    <span className={styles.rue_highlight} />
                    {icons && (
                      <span className={styles.rue_sidebar_icon}>
                        <img src={icons} alt="sidebar_icons" />
                      </span>
                    )}
                    <span className={styles.rue_sidebar_p}>
                      {label.length > 15 ? `${label.slice(0, 15)}...` : label}
                    </span>
                    {subMenu && (
                      <span
                        className={styles.rue_submenu_arrow}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          toggleDropdown(id);
                        }}
                      >
                        {isDropdownActive ? (
                          <ArrowDropDown width="30px" height="30px" fill="#151515" />
                        ) : (
                          <ArrowRight width="30px" height="30px" fill="#151515" />
                        )}
                      </span>
                    )}
                  </Link>
                </div>
                {subMenu && isDropdownActive && (
                  <div className={styles.rue_submenu} ref={dropdownRef}>
                    {subMenu.map(({ id, label, path }) => (
                      <Link key={id} to={path} onClick={() => setActiveLink(id)}>
                        <span role="img">🎯</span>
                        <span className={styles.rue_sidebar_p}>{label}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </Fragment>
            );
          })
        )}
      </div>
    );
  }
);

SideBarBody.propTypes = {
  routes: PropTypes.array.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary", "success", "danger", "warning", "info", "help", "light", "dark"]),
  fallbackMessage: PropTypes.string,
};

const SideBarFooter = ({ children, ...rest }) => (
  <div className={styles.rue_sidebar_footer} {...rest}>
    {children}
  </div>
);

SideBarFooter.propTypes = {
  children: PropTypes.node,
};

SideBar.Header = SidebarHeader;
SideBar.Footer = SideBarFooter;
SideBar.Body = SideBarBody;
SideBar.displayName = "SideBar";
SideBarBody.displayName = "SideBarBody";

export default SideBar;
