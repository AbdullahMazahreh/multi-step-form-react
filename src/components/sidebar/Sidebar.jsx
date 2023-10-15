import React from "react";
import styles from "./sidebar.module.scss";
import { OneStep } from "../";
import { Link } from "react-router-dom";

function Sidebar({ stepNames, currentStep }) {
  const allSteps = stepNames.map((ele, index) => {
    return (
      <OneStep
        stepName={ele}
        index={index}
        currentStep={currentStep}
        key={index}
      />
    );
  });

  return (
    <div className={styles.container}>
      <div className={styles.container_stepsWrapper}>{allSteps}</div>
      <Link to={"/admin-login"} className={styles.container_adminLogin}>
        Admin Login
      </Link>
    </div>
  );
}

export default Sidebar;
