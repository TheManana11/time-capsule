import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Auth from "./pages/Auth/Auth.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./pages/Home/Home.jsx";

function App() {
  const path = useLocation().pathname;

  return (
    <div className="App">
      {path === "/login-signup" ? null : <Header />}
      <Routes>
        <Route path="/login-signup" element={<Auth />} />
        <Route path="/" element={<Home />} />
      </Routes>
      {path === "/login-signup" ? null : <Footer />}
    </div>
  );
}

export default App;
