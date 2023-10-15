import React from "react";
import styles from "./formNavigation.module.scss";
import { Button } from "../";

function FormNavigation({
  currentStep,
  setCurrentStep,
  validToGoNext,
  setValidtyChecked,
  handleUserConfrim,
}) {
  const moveToNextFormHandler = () => {
    if (validToGoNext & (currentStep < 4)) {
      setCurrentStep(currentStep + 1);
      setValidtyChecked(false);
    } else {
      setValidtyChecked(true);
    }

    if (currentStep === 3) {
      handleUserConfrim();
    }
  };

  const moveToPreviousFormHandler = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className={styles.navigationContainer}>
      <Button
        placeHolder={currentStep < 3 ? "Next Step" : "Confirm"}
        onClickFunction={moveToNextFormHandler}
        type={currentStep < 3 ? "next" : "confirm"}
      />
      {currentStep > 0 && (
        <button
          onClick={moveToPreviousFormHandler}
          className={styles.navigationContainer_button}
        >
          Go Back
        </button>
      )}
    </div>
  );
}

export default FormNavigation;
