import React from "react";
import { AdminPanel, Main, AdminLogin } from "../pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function ApplicationRoutes() {
  const pages = [
    { path: "/", element: <Main /> },
    { path: "/admin-panel", element: <AdminPanel /> },
    { path: "/admin-login", element: <AdminLogin /> },
  ];

  const displayRoutes = pages.map((ele, index) => {
    return <Route path={ele.path} element={ele.element} key={index}></Route>;
  });

  return (
    <BrowserRouter>
      <Routes>{displayRoutes}</Routes>
    </BrowserRouter>
  );
}

export default ApplicationRoutes;
