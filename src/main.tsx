import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import ChildrenProgram from "./pages/ChildrenProgram";
import SchoolsProgram from "./pages/SchoolsProgram";
import ResidentialProgram from "./pages/ResidentialProgram";
import CoachAcademy from "./pages/CoachAcademy";
import VirtualTraining from "./pages/VirtualTraining";
import CorporateProgram from "./pages/CorporateProgram";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route
          path="/programs/children"
          element={<ChildrenProgram />}
        />

        <Route
          path="/programs/schools"
          element={<SchoolsProgram />}
        />

        <Route
          path="/programs/residential"
          element={<ResidentialProgram />}
        />

        <Route
          path="/programs/coaches"
          element={<CoachAcademy />}
        />

        <Route
          path="/programs/virtual"
          element={<VirtualTraining />}
        />

        <Route
          path="/programs/corporates"
          element={<CorporateProgram />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);