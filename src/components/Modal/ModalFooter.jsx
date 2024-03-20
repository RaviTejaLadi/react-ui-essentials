import React from "react";
import PropTypes from "prop-types";
import styles from "./Modal.module.css";

const ModalFooter = ({ children }) => {
  return <div className={styles.rue_modal_footer}>{children}</div>;
};

ModalFooter.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ModalFooter;
