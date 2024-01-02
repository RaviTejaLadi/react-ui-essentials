import React from "react";
import styles from "./Content.module.css";
const Content = (props) => {
  return <div className={styles.content_container}>{props.children}</div>;
};
export default Content;
