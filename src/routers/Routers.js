import React from "react";
import { Route, Routes } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage/LandingPage";

export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
};
