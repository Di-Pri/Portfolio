import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.scss";
import App from "./App";
import ProjectOne from "./components/ProjectOne";
import ProjectTwo from "./components/ProjectTwo";
import ProjectThree from "./components/ProjectThree";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/impactinvest" element={<ProjectOne />} />
        <Route path="/makeimpact" element={<ProjectTwo />} />
        <Route path="/hogwarts" element={<ProjectThree />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
