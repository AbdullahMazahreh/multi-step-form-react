import React, { Fragment, useEffect } from "react";
import { TextInput } from "../";
import useValidation from "../../hooks/useValidation";

function PersonalInfo({
  userInfo,
  setUserInfo,
  setValidToGoNext,
  validityChecked,
}) {
  const handelNameChange = (name) => {
    setUserInfo({ ...userInfo, name: name });
  };
  const handleEmailChange = (email) => {
    setUserInfo({ ...userInfo, email: email });
  };
  const handlePhoneNumberChange = (phoneNumber) => {
    setUserInfo({ ...userInfo, phoneNumber });
  };

  const isValidName = useValidation(/^.{3,}$/, userInfo.name);
  const isValidEmail = useValidation(
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    userInfo.email
  );
  const isValidPhoneNumber = useValidation(/^.{6,}$/, userInfo.phoneNumber);

  useEffect(() => {
    setValidToGoNext(isValidEmail & isValidName & isValidPhoneNumber);
  }, [userInfo]);

  return (
    <Fragment>
      <TextInput
        value={userInfo.name}
        setValue={handelNameChange}
        placeHolder={"e.g. Stephan King"}
        labelHolder={"Name"}
        type={"text"}
        isValid={isValidName}
        validityChecked={validityChecked}
      />
      <TextInput
        value={userInfo.email}
        setValue={handleEmailChange}
        placeHolder={"e.g. stephenking@lorem.com"}
        labelHolder={"Email Address"}
        type={"email"}
        isValid={isValidEmail}
        validityChecked={validityChecked}
      />
      <TextInput
        value={userInfo.phoneNumber}
        setValue={handlePhoneNumberChange}
        placeHolder={"e.g. +1 234 567 890"}
        labelHolder={"Phone Number"}
        type={"number"}
        isValid={isValidPhoneNumber}
        validityChecked={validityChecked}
      />
    </Fragment>
  );
}

export default PersonalInfo;
