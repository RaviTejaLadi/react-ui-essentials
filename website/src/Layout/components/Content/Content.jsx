import React from "react";
import styles from "./Content.module.css";
const Content = (props) => {
  return (
    <div className={styles.content_container}>
      {/* <BreadCrum
        currentPath={window.location.pathname}
        seperaterWidth="12px"
        seperaterHeight="12px"
        seperaterColor="#102447"
        breadCrumStyles={{ border: "1px solid transperent" }}
        linkStyles={{ borderColor: "#ccc" }}
  />*/}
      {props.children}
    </div>
  );
};
export default Content;
