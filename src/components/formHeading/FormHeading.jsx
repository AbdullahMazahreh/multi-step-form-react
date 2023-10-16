import React from "react";
import styles from "./formHeading.module.scss";

function FormHeading({ heading, description }) {
  return (
    <div className={styles.headingWrapper}>
      <h1 className={styles.headingWrapper_heading}>{heading}</h1>
      <p className={styles.headingWrapper_description}>{description}</p>
    </div>
  );
}

export default FormHeading;
