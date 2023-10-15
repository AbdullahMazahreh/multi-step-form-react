import React, { Fragment } from "react";
import styles from "./addOns.module.scss";
import checkMark from "../../assets/imgs/icon-checkmark.svg";

function AddOns({
  index,
  title,
  description,
  price,
  userInfo,
  setUserInfo,
  ele,
}) {
  const handleAddOns = () => {
    if (userInfo.addOns.some((element) => element.title === ele.title)) {
      setUserInfo({
        ...userInfo,
        addOns: userInfo.addOns.filter(
          (element) => element.title !== ele.title
        ),
      });
    } else {
      setUserInfo({ ...userInfo, addOns: [...userInfo.addOns, ele] });
    }
  };

  return (
    <Fragment>
      <label className={styles.addOnWrapper} htmlFor={`addOn-label-${index}`}>
        <input
          type="checkbox"
          className={styles.addOnWrapper_addOn}
          id={`addOn-label-${index}`}
          value={ele}
          checked={userInfo.addOns.some(
            (element) => element.title === ele.title
          )}
          onChange={handleAddOns}
        />
        <div className={styles.addOnWrapper_label}>
          <img
            src={checkMark}
            alt="checkmark"
            className={styles.addOnWrapper_label_checkmark}
          />
        </div>
        <div className={styles.addOnWrapper_content}>
          <div className={styles.addOnWrapper_content_heading}>
            <div className={styles.addOnWrapper_content_heading_title}>
              {title}
            </div>
            <div className={styles.addOnWrapper_content_heading_description}>
              {description}
            </div>
          </div>
          <div className={styles.addOnWrapper_content_price}>
            +${price}/{userInfo.planType}
          </div>
        </div>
      </label>
    </Fragment>
  );
}

export default AddOns;
