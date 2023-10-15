import React, { useState } from "react";
import { Container, Sidebar, Form } from "../../components";
import styles from "./main.module.scss";
import allData from "../../data/allData.json";

function Main() {
  const [currentStep, setCurrentStep] = useState(0);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    planType: "mo",
    plan: "Arcade",
    planPrice: null,
    addOns: [],
  });

  const stepNames = allData.map((ele) => ele.stepName);

  return (
    <Container>
      <div className={styles.container}>
        <Sidebar stepNames={stepNames} currentStep={currentStep} />
        <div className={styles.container_formWrapper}>
          <Form
            currentStep={currentStep}
            userInfo={userInfo}
            setUserInfo={setUserInfo}
            allData={allData}
            setCurrentStep={setCurrentStep}
          />
        </div>
      </div>
    </Container>
  );
}

export default Main;
