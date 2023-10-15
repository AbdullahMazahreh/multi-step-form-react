import styles from "./pickAddOns.module.scss";
import { AddOns } from "../";
import addOnsData from "../../data/addOnsData.json";

function PickAddOns({ userInfo, setUserInfo }) {
  const displayAddOns = addOnsData.map((ele, index) => {
    return (
      <AddOns
        index={index}
        title={ele.title}
        description={ele.description}
        price={ele.price[userInfo.planType]}
        userInfo={userInfo}
        setUserInfo={setUserInfo}
        key={index}
        ele={ele}
      />
    );
  });

  return <form className={styles.addOnsForm}>{displayAddOns}</form>;
}

export default PickAddOns;
