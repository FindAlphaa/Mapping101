import React, { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./screens/MainPage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
