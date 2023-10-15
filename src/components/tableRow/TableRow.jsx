import React from "react";

function TableRow({ user }) {
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phoneNumber}</td>
      <td>{user.plan}</td>
      <td>{user.planType === "mo" ? "Monthly" : "Yearly"}</td>
      <td>{user.planPrice}$</td>
    </tr>
  );
}

export default TableRow;
