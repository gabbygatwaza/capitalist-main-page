import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/HomePage";
import CPLabConsultancy from "../pages/ConsultancyPage";
const AllRoutes = () => {
    return (
      <Routes>
        {/* Basic Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/cplabconsultancy" element={<CPLabConsultancy />} />

        </Routes>
  );
};

export default AllRoutes;