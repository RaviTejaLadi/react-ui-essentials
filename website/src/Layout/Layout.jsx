import PropTypes from "prop-types";
import React, { useContext, useState } from "react";
import { TopNav, Content } from "./components";
import { SideBar,Divider } from "react-ui-essentials";
import styles from "./Layout.module.css";
import ParentContext from "../context/ParentContext";
import {routes} from "./utils/Links" 

const Layout = (props) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const { state } = useContext(ParentContext);
  const { pageType } = state;

  const shouldDisplaySideNav = !["home", "getStarted"].includes(pageType);

  const layoutBodyContentClass = `${styles.layout_body_content} ${pageType ? `${styles[`component`]}` : ""}`;

  const layoutBodySideNav = `${styles.layout_body_side_nav}
   ${pageType ? `${styles[`component`]}` : ""}`;

  return (
    <div className={styles.layout_container}>
      <div className={styles.layout_top_nav}>
        <TopNav toggleSidebar={toggleSidebar} />
      </div>
      <div className={styles.layout_body}>
        <div className={styles.layout_body_side_nav}>
          <SideBar >
            <SideBar.Body routes={routes} />
          </SideBar>
        </div>
        <div className={styles.layout_body_content}>
          <Content>{props.children}</Content>
        </div>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Layout;
