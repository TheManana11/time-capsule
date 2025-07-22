import React from "react";

import { Routes, Route, useLocation } from "react-router-dom";

// reusable routes
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";

// main routes
import Auth from "../pages/Auth/Auth.jsx";
import Home from "../pages/Home/Home.jsx";
import Capsules from "../pages/Capsules/Capsules.jsx";
import SingleCapsule from "../pages/Single Capsule/SingleCapsule.jsx";
import Contact from "../pages/Contact/Contact.jsx";
import Dashboard from "../pages/Dashboard/Dashboard.jsx";

// user routes
import UserProfile from "../pages/User Profile/UserProfile.jsx";
import EditUser from "../pages/Edit User/EditUser.jsx";
import AddCapsule from "../pages/Add Capsule/AddCapsule.jsx";
import UserCapsules from "../pages/User Capsules/UserCapsule.jsx";

const MainRoutes = () => {
  const path = useLocation().pathname;
  const exclude = ["/login-signup", "/dashboard", "/dashboard/user-profile", "/dashboard/edit-user", "/dashboard/add-capsule", "/dashboard/user-capsules"]

  return (
    <div>
      {path === "/login-signup" ? null : <Header />}
      <Routes>
        <Route path="/login-signup" element={<Auth />} />
        <Route path="/" element={<Home />} />
        <Route path="/capsules" element={<Capsules />} />
        <Route path="/capsules/:id" element={<SingleCapsule />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="user-profile" element={<UserProfile />} />
          <Route path="edit-user" element={<EditUser />} />
          <Route path="add-capsule" element={<AddCapsule />} />
          <Route path="user-capsules" element={<UserCapsules />} />
        </Route>
      </Routes>
      {exclude.includes(path) ? null : <Footer />}
    </div>
  );
};

export default MainRoutes;
