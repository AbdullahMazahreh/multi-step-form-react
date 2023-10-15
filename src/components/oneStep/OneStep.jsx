import React from "react";
import styles from "./oneStep.module.scss";

function OneStep({ stepName, currentStep, index }) {
  const stepIndicaterHandler = () => {
    return currentStep === index
      ? `${styles.oneStep_indicater} ${styles.oneStep_indicater_active}`
      : styles.oneStep_indicater;
  };

  return (
    <div className={styles.oneStep}>
      <div className={stepIndicaterHandler()}>{index + 1}</div>
      <div className={styles.oneStep_nameWrapper}>
        <div className={styles.oneStep_nameWrapper_stepCount}>
          STEP {index + 1}
        </div>
        <div className={styles.oneStep_nameWrapper_stepName}>{stepName}</div>
      </div>
    </div>
  );
}

export default OneStep;
