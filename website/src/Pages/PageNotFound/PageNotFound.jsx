import React from "react";
import styles from "./PageNotFound.module.css";
import { Button } from "react-ui-essentials";

const PageNotFound = () => {
  const handleRedricet = () => {
    window.location.href = "/";
  };

  return (
    <div className={styles.rue_page_not_found_container}>
      <h1 className={styles.rue_page_not_found_title}>404</h1>
      <p className={styles.rue_page_not_found_message}>Page Not Found</p>
      <p>Sorry, the page you are looking for does not exist.</p>
      <div className={styles.rue_btn}>
        <Button size="sm" variant="primary" onClick={handleRedricet}>
          Back To Home
        </Button>
      </div>
    </div>
  );
};

export default PageNotFound;
