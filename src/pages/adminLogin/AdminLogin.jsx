import React, { useEffect, useState } from "react";
import styles from "./adminLogin.module.scss";
import { Button, Container, TextInput } from "../../components";
import { useNavigate } from "react-router-dom";
import data from "../../data/adminLogin.json";

function AdminLogin() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [validityChecked, setValidityChecked] = useState(false);
  const [isValidUser, setIsValidUser] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("token"))) {
      navigate("/admin-panel");
    }
  }, []);

  const handleLogin = async () => {
    try {
      if (userName === data.username && password === data.password) {
        localStorage.setItem("token", JSON.stringify(data.username));
        return navigate("/admin-panel");
      } else {
        setValidityChecked(true);
        setIsValidUser(false);
        setIsValidPassword(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <div className={styles.loginForm}>
        <div className={styles.loginForm_loginWrapper}>
          <TextInput
            value={userName}
            setValue={setUserName}
            placeHolder={"Username"}
            labelHolder={"Username"}
            isValid={isValidUser}
            validityChecked={validityChecked}
            type={"text"}
          />
          <TextInput
            value={password}
            setValue={setPassword}
            placeHolder={"Password"}
            labelHolder={"Password"}
            isValid={isValidPassword}
            validityChecked={validityChecked}
            type={"password"}
          />
          <Button placeHolder={"Login"} onClickFunction={handleLogin} />
        </div>
      </div>
    </Container>
  );
}

export default AdminLogin;
