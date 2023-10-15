import React, { Fragment } from "react";
import styles from "./planSelector.module.scss";
import { PlanCard } from "../";
import arcade from "../../assets/imgs/icon-arcade.svg";
import advacned from "../../assets/imgs/icon-advanced.svg";
import pro from "../../assets/imgs/icon-pro.svg";
import plans from "../../data/plansData.json";

function PlanSelector({ userInfo, setUserInfo }) {
  const images = [arcade, advacned, pro];

  const displayPlans = plans.map((ele, index) => {
    return (
      <PlanCard
        name={"plan"}
        userInfo={userInfo}
        img={images[index]}
        price={userInfo.planType === "mo" ? ele.moPrice : ele.yrPrice}
        title={ele.title}
        index={index}
        key={index}
        value={ele.title}
        onChange={(e) =>
          setUserInfo({
            ...userInfo,
            plan: e.target.value,
          })
        }
        yearlyDiscount={ele.yearlyDiscount}
        setUserInfo={setUserInfo}
      />
    );
  });

  const planChangeHandler = () => {
    if (userInfo.planType === "mo") {
      setUserInfo({ ...userInfo, planType: "yr" });
    } else {
      setUserInfo({ ...userInfo, planType: "mo" });
    }
  };

  return (
    <Fragment>
      <form id="plan" className={styles.planSelector} value={userInfo.plan}>
        {displayPlans}
      </form>
      <div className={styles.planTypeToggler}>
        <div
          className={
            userInfo.planType === "mo"
              ? `${styles.planTypeToggler_planText} ${styles.planTypeToggler_planText_active}`
              : styles.planTypeToggler_planText
          }
        >
          Monthly
        </div>
        <div
          onClick={planChangeHandler}
          className={
            userInfo.planType === "mo"
              ? styles.planTypeToggler_togglerWrapper
              : `${styles.planTypeToggler_togglerWrapper} ${styles.planTypeToggler_togglerWrapper_yearly}`
          }
        >
          <div className={styles.planTypeToggler_togglerWrapper_ball}></div>
        </div>
        <div
          className={
            userInfo.planType === "yr"
              ? `${styles.planTypeToggler_planText} ${styles.planTypeToggler_planText_active}`
              : styles.planTypeToggler_planText
          }
        >
          Yearly
        </div>
      </div>
    </Fragment>
  );
}

export default PlanSelector;
