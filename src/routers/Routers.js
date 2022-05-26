import React from "react";
import { Route, Routes } from "react-router-dom";
import { DashboardPage } from "../pages/DashboardPage/DashboardPage";
import { Homepage } from "../pages/Homepage/Homepage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { RegisterPage } from "../pages/RegisterPage/RegisterPage";

export const Routers = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<DashboardPage />}>
        <Route path=":first" element={<DashboardPage />} />
      </Route>
    </Routes>
  );
};
