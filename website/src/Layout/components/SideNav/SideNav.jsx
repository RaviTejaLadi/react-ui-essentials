import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Links } from "./utils/Links";
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";
import styles from "./SideNav.module.css";

const SideNav = () => {
  let FindActivePathName = Links.map(({ path }) => {
    return path === window.location.pathname;
  });

  let matchedIndex = FindActivePathName.findIndex((val) => val);
  let matchedId = matchedIndex !== -1 ? Links[matchedIndex].id : null;
  const [activeLink, setActiveLink] = React.useState(matchedId - 1);

  const [activeDropdown, setActiveDropdown] = React.useState(activeLink);
  const sidebarItemsRefs = React.useRef([]);
  const dropdownRef = React.useRef(null);
  const location = useLocation();

  React.useEffect(() => {
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

  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.sidebar} ref={dropdownRef}>
      {Links.map(({ id, label, path, icons, subMenu }, index) => {
        const isDropdownActive = activeDropdown === index;
        const isActiveLink = location.pathname === path;
        return (
          <div key={id}>
            <Link
              id={id}
              to={path}
              className={isDropdownActive || isActiveLink ? `${styles.active}` : ""}
              ref={(element) => (sidebarItemsRefs.current[index] = element)}
              onClick={() => toggleDropdown(index)}
            >
              <span className={styles.highlight}></span>
              {icons && (
                <span className={styles.sidebar_icon}>
                  <img src={icons} alt="icons" />
                </span>
              )}
              <span className={styles.sidebar_p}>{label}</span>
              {subMenu && (
                <span className={styles.submenu_arrow}>{isDropdownActive ? <FaAngleDown /> : <FaAngleRight />}</span>
              )}
            </Link>
            {subMenu && isDropdownActive && (
              <div className={styles.submenu}>
                {subMenu.map(({ id, label, path }) => (
                  <span key={id}>
                    <Link to={path}>
                      <span role="img" className={styles.highlight}>🔖</span>
                      <span className={styles.sidebar_p}>{label}</span>
                    </Link>
                  </span>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SideNav;
