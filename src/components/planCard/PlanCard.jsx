import React, { Fragment, useEffect } from "react";
import styles from "./planCard.module.scss";

function PlanCard({
  name,
  userInfo,
  img,
  title,
  price,
  index,
  value,
  onChange,
  yearlyDiscount,
  setUserInfo,
}) {
  useEffect(() => {
    if (userInfo.plan === title) {
      setUserInfo({ ...userInfo, planPrice: price });
    }
  }, [price, userInfo.plan]);

  return (
    <Fragment>
      <input
        name={name}
        type="radio"
        className={styles.planInput}
        id={`planCard-${index}`}
        value={value}
        checked={userInfo.plan === title}
        onChange={onChange}
      />
      <label className={styles.planCard} htmlFor={`planCard-${index}`}>
        <img src={img} alt="plan" className={styles.planCard_image} />
        <div className={styles.planCard_planInfo}>
          <div className={styles.planCard_planInfo_planName}>{title}</div>
          <div
            className={styles.planCard_planInfo_planPrice}
          >{`$${price}/${userInfo.planType}`}</div>
          {userInfo.planType === "yr" && yearlyDiscount && (
            <div className={styles.planCard_planInfo_discount}>
              {yearlyDiscount} free
            </div>
          )}
        </div>
      </label>
    </Fragment>
  );
}

export default PlanCard;
