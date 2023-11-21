import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import DashBoard from "./dashboard";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<DashBoard />} />
    </Routes>
  );
};

export default AllRoutes;
