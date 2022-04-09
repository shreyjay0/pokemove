import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Catch from "./pages/Catch";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App h-screen">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/session/catch" element={<Catch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
