import React from "react";
import { SideNav, TopNav, Content } from "./components";
import styles from "./Layout.module.css";

const Layout = (props) => {
  return (
    <div className={styles.layout_container}>
      <aside className={styles.layout_container}>
        <SideNav />
      </aside>
      <section className={styles.layout_container}>
        <nav>
          <TopNav />
        </nav>
        <article>
          <Content>{props.children}</Content>
        </article>
      </section>
    </div>
  );
};
export default Layout;
