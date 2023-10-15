import React, { useEffect, useState } from "react";
import styles from "./adminPanel.module.scss";
import { Button, Container, TableRow } from "../../components";
import { useNavigate } from "react-router-dom";

function AdminPanel() {
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  const getUsers = () => {
    const data = JSON.parse(localStorage.getItem("users"));
    setUsers(data);
  };

  const displayUsers = users.map((user) => {
    return <TableRow user={user} key={user.email + user.phoneNumber} />;
  });

  const checkIfAdmin = () => {
    const admin = localStorage.getItem("token");

    if (!admin) {
      navigate("/admin-login");
    }
  };

  const logOutHandler = () => {
    localStorage.removeItem("token");
    navigate("/admin-login");
  };

  useEffect(() => {
    checkIfAdmin();
    getUsers();
  }, []);

  return (
    <Container>
      <div className={styles.tableContainer}>
        <Button placeHolder={"Logout"} onClickFunction={logOutHandler}></Button>
        <table className={styles.tableContainer_table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone number</th>
              <th>Subscription</th>
              <th>Period</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{displayUsers}</tbody>
        </table>
      </div>
    </Container>
  );
}

export default AdminPanel;
