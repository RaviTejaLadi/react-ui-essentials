import React from "react";
import styles from "./OverViewCard.module.css";

const OverViewCard = ({ data }) => {
  return (
    <div className={styles.rue_cardContainer}>
      {data.slice(0, 3).map((item) => (
        <div key={item.id} className={styles.rue_overview_card}>
          <div className={styles.rue_overview_card_svg}>{item.icon}</div>
          <h4 className={styles.rue_overview_card_label}>{item.label}</h4>
        </div>
      ))}
    </div>
  );
};

export default OverViewCard;
