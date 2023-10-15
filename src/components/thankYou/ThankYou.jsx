import React from "react";
import styles from "./thankYou.module.scss";
import checkSign from "../../assets/imgs/icon-thank-you.svg";

function ThankYou() {
  return (
    <div className={styles.container}>
      <img
        src={checkSign}
        alt="thank you"
        className={styles.container_checkSign}
      />
      <div className={styles.container_title}>Thank you!</div>
      <p className={styles.container_para}>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
}

export default ThankYou;
