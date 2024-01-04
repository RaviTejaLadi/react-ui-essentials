import React from "react";
import { SideNav, TopNav, Content } from "./components";
import styles from "./Layout.module.css";
const Layout = (props) => {
  return (
    <div className={styles.layout_container}>
      <div className={styles.layout_top_nav}>
        <TopNav />{" "}
      </div>{" "}
      <div className={styles.layout_body}>
        {" "}
        <div className={styles.layout_body_side_nav}>
          {" "}
          <SideNav />{" "}
        </div>{" "}
        <div className={styles.layout_body_content}>
          {" "}
          <Content>{props.children}</Content>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
export default Layout;
