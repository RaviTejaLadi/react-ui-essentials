import React from "react";
import styles from "./SideNav.module.css";
import SideNavData from "../../../data/SideNavData";
import { NavLink } from "react-router-dom";
const SideNav = () => {
  return (
    <aside className={styles.sidenav_container}>
      {" "}
      <div className={styles.sidenav_body}>
        {" "}
        {SideNavData.map((item) => {
          return (
            <NavLink className={styles.sidenav_body_link} to={item.path} key={item.id}>
              {" "}
              <span className={styles.sidenav_body_link_span}> {item.label} </span>{" "}
            </NavLink>
          );
        })}{" "}
      </div>{" "}
    </aside>
  );
};
export default SideNav;
