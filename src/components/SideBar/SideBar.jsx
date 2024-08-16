import PropTypes from "prop-types";
import React, { Fragment, forwardRef, useEffect, useRef, useState } from "react";
import styles from "./SideBar.module.css";
import Link from "../Link/Link";
import ArrowRight from "../../Icons/Round/ArrowRight";
import Search from "../../Icons/Round/Search";

const SideBar = forwardRef(
  ({ children, backgroundColor = "", color = "", width = "", className, style, ...rest }, ref) => {
    return (
      <aside
        ref={ref}
        className={`${styles.rue_sidebar} ${className}`}
        style={{ backgroundColor, color, width, ...style }}
        {...rest}
      >
        {children}
      </aside>
    );
  }
);

SideBar.propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.string,
  width: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};

const SidebarHeader = ({ children, className, style, ...rest }) => (
  <div className={`${styles.rue_sidebar_header} ${className}`} style={style} {...rest}>
    {children}
  </div>
);

SidebarHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
};

const SideBarBody = forwardRef(
  ({ routes, variant = "primary", fallbackMessage = "😒 No Components found...", className, style, ...rest }, ref) => {
    const [activeLink, setActiveLink] = useState(null);
    const [openDropdowns, setOpenDropdowns] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const dropdownRef = useRef(null);

    useEffect(() => {
      const handleRouteChange = () => {
        const path = window.location.pathname;
        let matchedRoute = routes.find((route) => route.path === path);
        if (!matchedRoute) {
          routes.forEach((route) => {
            if (route.subMenu) {
              route.subMenu.forEach((category) => {
                const subRoute = category.items.find((sub) => sub.path === path);
                if (subRoute) {
                  matchedRoute = route;
                  setActiveLink(subRoute.id);
                  if (!openDropdowns.includes(route.id)) {
                    setOpenDropdowns((prev) => [...prev, route.id]);
                  }
                }
              });
            }
          });
        } else {
          setActiveLink(matchedRoute.id);
        }
      };

      window.addEventListener("popstate", handleRouteChange);
      handleRouteChange();

      return () => {
        window.removeEventListener("popstate", handleRouteChange);
      };
    }, [routes, openDropdowns]);

    const toggleDropdown = (id) => {
      setOpenDropdowns((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
    };

    const getLinkVariant = () => {
      return styles[`rue_active_${variant}`] || styles.rue_active_default;
    };

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        // Removed setOpenDropdowns([]); to prevent closing on outside click
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
      <div ref={ref} className={className} style={style} {...rest}>
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
          filteredRoutes.map(({ id, label, path, icons, subMenu }) => {
            const isDropdownOpen = openDropdowns.includes(id);
            const isActiveLink = activeLink === id;
            const isParentActive =
              subMenu && subMenu?.some((category) => category?.items?.some((item) => item.id === activeLink));
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
                      toggleDropdown(id);
                    }}
                  >
                    <div>
                      <span className={styles.rue_highlight} />
                      {icons && (
                        <span className={styles.rue_sidebar_icon}>
                          <img src={icons} alt="sidebar_icons" />
                        </span>
                      )}
                      <span className={styles.rue_sidebar_p}>
                        {label.length > 15 ? `${label.slice(0, 15)}...` : label}
                      </span>
                    </div>
                    <div>
                      {subMenu && (
                        <span className={styles.rue_submenu_arrow}>
                          <ArrowRight
                            width="30px"
                            height="30px"
                            style={{ transform: isDropdownOpen ? "rotate(90deg)" : "", fill: "#fff" }}
                          />
                        </span>
                      )}
                    </div>
                  </Link>
                </div>
                {subMenu && isDropdownOpen && (
                  <div className={styles.rue_submenu} ref={dropdownRef}>
                    {subMenu.map((category, categoryIndex) => (
                      <div key={categoryIndex} className={styles.rue_submenu_category}>
                        {category.category && (
                          <div className={styles.rue_submenu_category_label}>{category.category}</div>
                        )}
                        {category.items.map(({ id: itemId, label: itemLabel, path: itemPath, icons }) => (
                          <Link
                            key={itemId}
                            to={itemPath}
                            onClick={() => setActiveLink(itemId)}
                            className={activeLink === itemId ? `${styles.rue_active}` : ""}
                          >
                            <span role="img" className={styles.rue_sidebar_icon}>
                              {icons ? <img src={icons} alt="sidebar_icons" /> : "🎯"}
                            </span>
                            <span className={styles.rue_sidebar_p}>{itemLabel}</span>
                          </Link>
                        ))}
                      </div>
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
  className: PropTypes.string,
  style: PropTypes.object,
};

const SideBarFooter = ({ children, className, style, ...rest }) => (
  <div className={`${styles.rue_sidebar_footer} ${className}`} style={style} {...rest}>
    {children}
  </div>
);

SideBarFooter.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
};

SideBar.Header = SidebarHeader;
SideBar.Footer = SideBarFooter;
SideBar.Body = SideBarBody;
SideBar.displayName = "SideBar";
SideBarBody.displayName = "SideBarBody";

export default SideBar;
