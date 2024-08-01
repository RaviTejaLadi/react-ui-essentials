import PropTypes from "prop-types";
import React, { useContext } from "react";
import styles from "./Content.module.css";
import ParentContext from "../../../context/ParentContext";

const Content = ({ children }) => {
  const { state } = useContext(ParentContext);
  const { pageType } = state;

  const contentContainer = `${styles.content_container} ${pageType ? `${styles[`home`]}` : ""} ${
    pageType ? `${styles[`component`]}` : ""
  }`;

  return (
    <div className={contentContainer}>
      {children}
    </div>
  );
};

Content.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Content;
