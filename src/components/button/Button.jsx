import React from "react";
import styles from "./button.module.scss";

function Button({ onClickFunction, placeHolder, type }) {
  return (
    <button
      className={
        type === "next"
          ? `${styles.button} ${styles.next}`
          : `${styles.button} ${styles.confirm}`
      }
      onClick={onClickFunction}
    >
      {placeHolder}
    </button>
  );
}

export default Button;
