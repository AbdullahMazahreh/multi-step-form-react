import React from "react";
import styles from "./summary.module.scss";
import { SummaryAddOns } from "../";

function Summary({ userInfo, setCurrentStep }) {
  const displaySummaryAddOns = userInfo.addOns.map((ele, index) => {
    return (
      <SummaryAddOns
        title={ele.title}
        price={userInfo.planType === "mo" ? ele.price.mo : ele.price.yr}
        planType={userInfo.planType}
        key={index}
      />
    );
  });

  const totalPrice =
    userInfo.planPrice +
    userInfo.addOns.reduce(
      (acc, current) => acc + current.price[userInfo.planType],
      0
    );

  return (
    <div className={styles.summaryWrapper}>
      <div className={styles.summaryWrapper_specificPrice}>
        <div className={styles.summaryWrapper_specificPrice_planType}>
          <div className={styles.summaryWrapper_specificPrice_planType_title}>
            <div
              className={
                styles.summaryWrapper_specificPrice_planType_title_text
              }
            >
              {userInfo.plan} (
              {userInfo.planType === "mo" ? "Monthly" : "Yearly"})
            </div>
            <div
              className={
                styles.summaryWrapper_specificPrice_planType_title_edit
              }
              onClick={() => setCurrentStep(1)}
            >
              Change
            </div>
          </div>
          <div className={styles.summaryWrapper_specificPrice_planType_price}>
            ${userInfo.planPrice}/{userInfo.planType}
          </div>
        </div>
        <div className={styles.summaryWrapper_specificPrice_addOns}>
          {displaySummaryAddOns}
        </div>
      </div>
      <div className={styles.summaryWrapper_totalPrice}>
        <div className={styles.summaryWrapper_totalPrice_title}>
          Total (per {userInfo.planType === "mo" ? "month" : "year"})
        </div>
        <div className={styles.summaryWrapper_totalPrice_price}>
          +${totalPrice}/{userInfo.planType}
        </div>
      </div>
    </div>
  );
}

export default Summary;
