import React, { Fragment } from "react";
import styles from "./formHeading.module.scss";

function FormHeading({ heading, description }) {
  return (
    <Fragment>
      <div className={styles.headingWrapper}>
        <h1 className={styles.headingWrapper_heading}>{heading}</h1>
        <p className={styles.headingWrapper_description}>{description}</p>
      </div>
    </Fragment>
  );
}

export default FormHeading;
