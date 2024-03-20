import PropTypes from "prop-types";
import React from "react";
import styles from "./Modal.module.css";

const ModalBody = ({ children }) => {
  return <div className={styles.rue_modal_body}>{children}</div>;
};

ModalBody.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ModalBody;
