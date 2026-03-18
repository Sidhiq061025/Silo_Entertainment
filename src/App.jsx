import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BlackPage from "./pages/BlackPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<BlackPage />} />
      <Route path="/gamejam" element={<HomePage />} />
    </Routes>
  );
};

export default App;
