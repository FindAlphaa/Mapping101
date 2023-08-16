import React, { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// screens
import MainPage from "./screens/MainPage";
import GraphPage from "./screens/GraphPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/graph/:id" element={<GraphPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
