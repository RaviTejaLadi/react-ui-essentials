import PropTypes from "prop-types";
import React from "react";
import styles from "./TopNav.module.css";
import topNavData from "../../../data/topNavData";
import { Link } from "react-router-dom";
import { Button } from "react-ui-essentials";
import { collapseSidebar } from "./utils/images";

const TopNav = ({ toggleSidebar }) => {
  return (
    <div className={styles.topnav_container}>
      <div>
        <Button size="sm" variant="light" onClick={toggleSidebar}>
          <Button.Icon>
            <img src={collapseSidebar} width="20px" height="20px" style={{ display: "inline" }} alt="collapseSidebar" />
          </Button.Icon>
        </Button>
      </div>
      <div className={styles.topnav_left_cont}>
        <Link className={styles.topnav_icon} to="/">
          React UI Essentials
        </Link>
        <div className={styles.topnav_links_cont}>
          {topNavData.map((item) => {
            return (
              <span key={item.path}>
                <Link className={styles.topnav_link} to={item.path}>
                  {item.label}
                </Link>
              </span>
            );
          })}
        </div>
      </div>
      <div className={styles.topnav_right_cont}>
        <div className={styles.topnav_version}>Version</div>
        <div className={styles.topnav_btns_cont}>
          <Button variant="info" size="sm">
            <Button.Text>Light</Button.Text>
          </Button>
          <Button variant="light" size="sm">
            <Button.Text>settings</Button.Text>
          </Button>
        </div>
      </div>
    </div>
  );
};

TopNav.propTypes = {
  toggleSidebar: PropTypes.func,
};
export default TopNav;
