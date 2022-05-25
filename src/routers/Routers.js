import React from "react";
import { Route, Routes } from "react-router-dom";
import { Homepage } from "../pages/Homepage/Homepage";

export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
  );
};
