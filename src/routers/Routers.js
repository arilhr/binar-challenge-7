import React from "react";
import { Route, Routes } from "react-router-dom";
import SearchCarPage from "../pages/CarPage/SearchCarPage";
import CarDetailPage from "../pages/CarPage/CarDetailPage";
import { DashboardPage } from "../pages/DashboardPage/DashboardPage";
import { Homepage } from "../pages/Homepage/Homepage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { RegisterPage } from "../pages/RegisterPage/RegisterPage";
import { PaymentPage } from "../pages/PaymentPage/PaymentPage";

export const Routers = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route path="/search" element={<SearchCarPage />} />
      <Route path="/car" element={<CarDetailPage />}>
        <Route path="/car/:id" element={<CarDetailPage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<DashboardPage />}>
        <Route path=":first" element={<DashboardPage />} />
      </Route>
      <Route path="/order" element={<PaymentPage />} />
    </Routes>
  );
};
