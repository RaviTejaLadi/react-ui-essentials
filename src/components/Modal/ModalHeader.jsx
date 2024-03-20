import React from "react";
import PropTypes from "prop-types";
import styles from "./Modal.module.css";

const ModalHeader = ({ children }) => {
  return <div className={styles.rue_modal_header}>{children}</div>;
};

ModalHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ModalHeader;
