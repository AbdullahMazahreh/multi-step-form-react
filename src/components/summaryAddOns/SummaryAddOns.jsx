import React from "react";
import styles from "./summaryAddOns.module.scss";

function SummaryAddOns({ title, price, planType }) {
  return (
    <div className={styles.container}>
      <div className={styles.container_title}>{title}</div>
      <div className={styles.container_price}>
        +${price}/{planType}
      </div>
    </div>
  );
}

export default SummaryAddOns;
