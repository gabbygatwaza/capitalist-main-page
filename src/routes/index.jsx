import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/HomePage";
import CPLabConsultancy from "../pages/ConsultancyPage";
import ComingSoon from "../pages/ComingSoon";
const AllRoutes = () => {
    return (
      <Routes>
        {/* Basic Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/cplabconsultancy" element={<CPLabConsultancy />} />
        <Route path="/comingsoon" element={<ComingSoon />} />

        </Routes>
  );
};

export default AllRoutes;