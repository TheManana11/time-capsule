import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Auth from "./pages/Auth/Auth.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./pages/Home/Home.jsx";
import Capsules from "./pages/Capsules/Capsules.jsx";
import SingleCapsule from "./pages/Single Capsule/SingleCapsule.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";

function App() {
  const path = useLocation().pathname;

  return (
    <div className="App">
      {path === "/login-signup" ? null : <Header />}
      <Routes>
        <Route path="/login-signup" element={<Auth />} />
        <Route path="/" element={<Home />} />
        <Route path="/capsules" element={<Capsules />} />
        <Route path="/single-capsule" element={<SingleCapsule />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      {path === "/login-signup" ? null : <Footer />}
    </div>
  );
}

export default App;
