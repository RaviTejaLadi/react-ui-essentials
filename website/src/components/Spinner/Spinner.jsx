import React, { Fragment } from "react";
import styles from "./Spinner.module.css";

const Spinner = ({ className, style, color, type }) => {
  const spinnerTypes = {
    dots: styles.rue_dots_container,
    barWave: styles.rue_bar_wave_container,
    dotSpinner: styles.rue_dot_spinner,
    newtonsCradle: styles.rue_newtons_cradle,
  };

  const spinnerClass = spinnerTypes[type] || styles.rue_dots_container;

  const renderDots = () => {
    switch (type) {
      case "dots":
        return (
          <Fragment>
            <div className={styles.rue_dot}></div>
            <div className={styles.rue_dot}></div>
            <div className={styles.rue_dot}></div>
            <div className={styles.rue_dot}></div>
            <div className={styles.rue_dot}></div>
          </Fragment>
        );
      case "barWave":
        return <div className={styles.rue_primary_loading}></div>;
      case "dotSpinner":
        return (
          <Fragment>
            <div className={styles.rue_dot_spinner_dot}></div>
            <div className={styles.rue_dot_spinner_dot}></div>
            <div className={styles.rue_dot_spinner_dot}></div>
            <div className={styles.rue_dot_spinner_dot}></div>
            <div className={styles.rue_dot_spinner_dot}></div>
            <div className={styles.rue_dot_spinner_dot}></div>
            <div className={styles.rue_dot_spinner_dot}></div>
            <div className={styles.rue_dot_spinner_dot}></div>
          </Fragment>
        );
      case "newtonsCradle":
        return (
          <Fragment>
            <div className={styles.rue_newtons_cradle_dot}></div>
            <div className={styles.rue_newtons_cradle_dot}></div>
            <div className={styles.rue_newtons_cradle_dot}></div>
            <div className={styles.rue_newtons_cradle_dot}></div>
          </Fragment>
        );
      default:
        return null;
    }
  };

  return (
    <section style={{ color, ...style }} className={`${spinnerClass} ${className}`}>
      {renderDots()}
    </section>
  );
};

export default Spinner;
