import React from "react";
import styles from "./textInput.module.scss";

function TextInput({
  value,
  setValue,
  isValid,
  placeHolder,
  labelHolder,
  type,
  validityChecked,
}) {
  return (
    <div className={styles.textInputWrapper}>
      <label className={styles.textInputWrapper_label}>
        <div className={styles.label_title}>{labelHolder}</div>
        {!isValid & validityChecked ? (
          <div className={styles.label_error}>This field is required</div>
        ) : null}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeHolder}
        className={
          !isValid & validityChecked
            ? `${styles.textInputWrapper_inputField} ${styles.error}`
            : styles.textInputWrapper_inputField
        }
      />
    </div>
  );
}

export default TextInput;
