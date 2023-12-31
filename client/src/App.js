import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// screens
import MainPage from "./screens/MainPage";
import GraphPage from "./screens/GraphPage";
import CompanyPage from "./screens/CompanyPage";

// components
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/graph/:id" element={<GraphPage />} />
        <Route path="/company" element={<CompanyPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
