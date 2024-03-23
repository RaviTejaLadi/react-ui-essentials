import React, { useContext, useEffect } from "react";
import ParentContext from "../../context/ParentContext";
import { Content } from "../../Layout/components";
import styles from "./Component.module.css";

const Component = () => {
  const { dispatch } = useContext(ParentContext);

  useEffect(() => {
    dispatch({ type: "SET_PAGE_TYPE", payload: "component" });
  }, []);
  return (
    <div className={styles.component_container}>
      <Content />
    </div>
  );
};

export default Component;
