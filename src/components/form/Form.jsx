import React, { useState } from "react";
import {
  FormHeading,
  FormNavigation,
  Summary,
  PersonalInfo,
  PlanSelector,
  PickAddOns,
  ThankYou,
} from "../";
import styles from "./form.module.scss";

function Form({ userInfo, setUserInfo, allData, currentStep, setCurrentStep }) {
  const [validToGoNext, setValidToGoNext] = useState(false);
  const [validityChecked, setValidtyChecked] = useState(false);

  const handleUserConfrim = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    users.push(userInfo);
    localStorage.setItem("users", JSON.stringify(users));
  };

  const forms = [
    <PersonalInfo
      userInfo={userInfo}
      setUserInfo={setUserInfo}
      setValidToGoNext={setValidToGoNext}
      validityChecked={validityChecked}
    />,
    <PlanSelector userInfo={userInfo} setUserInfo={setUserInfo} />,
    <PickAddOns userInfo={userInfo} setUserInfo={setUserInfo} />,
    <Summary userInfo={userInfo} setCurrentStep={setCurrentStep} />,
    <ThankYou />,
  ];

  return (
    <div className={styles.formWrapper}>
      {currentStep <= 3 && (
        <FormHeading
          heading={allData[currentStep].title}
          description={allData[currentStep].description}
        />
      )}
      <div className={styles.formWrapper_formBody}>{forms[currentStep]}</div>
      {currentStep <= 3 && (
        <FormNavigation
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          validToGoNext={validToGoNext}
          setValidtyChecked={setValidtyChecked}
          handleUserConfrim={handleUserConfrim}
        />
      )}
    </div>
  );
}

export default Form;
