import React, { useContext, useEffect } from "react";
import ParentContext from "../../context/ParentContext";
import styles from "./Home.module.css";
import { BasicCard,LinkButton } from "react-ui-essentials";
import { cardData, footerLinks } from "../../data/homeData";
import { Link } from "react-router-dom";

const Home = () => {
  const { dispatch } = useContext(ParentContext);

  useEffect(() => {
    dispatch({ type: "SET_PAGE_TYPE", payload: "home" });
  }, []);

  const currentYear = new Date().getFullYear();
  return (
    <div className={styles.home_container}>
      <div className={styles.home_cont1}>
        <div className={styles.home_cont1_div1}>
          <p>React UI Essentials</p>
          <span>Best Package For All Your Ui Needs</span>
        </div>
        <div className={styles.home_cont1_div2}>
          <LinkButton path="/getStarted" variant="primary" size="md">
            Get Started
          </LinkButton>
          <LinkButton path="/components" variant="primary" size="md">
            Components
          </LinkButton>
        </div>
      </div>
      <div className={styles.home_cont2}>
        {cardData.map((item) => (
          <BasicCard key={item.id} title={item.title} content={item.para} />
        ))}
      </div>
      <div className={styles.home_cont3}>
        <div>
          {footerLinks.map((item) => (
            <Link key={item.id} to={item.path}>
              {item.label}
            </Link>
          ))}
        </div>
        <p>Copyright © {currentYear} React UI Essentials.</p>
      </div>
    </div>
  );
};

export default Home;
