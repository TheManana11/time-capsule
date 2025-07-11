import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoLogInOutline } from "react-icons/io5";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <header className="header-container">
      <h1>Capsula</h1>
      <div className="header-links">
        <Link className="header-link">Home</Link>
        <Link className="header-link">Capsules</Link>
        <Link className="header-link">Contact</Link>
      </div>
      <div>
        {isLoggedIn ? (
            <div className="header-user">
            <FaRegCircleUser className="header-user-icon" />
            <button className="header-logout">
              <IoLogInOutline className="logout-icon" /> Logout
            </button>
          </div>
          
        ) : (
          <Link to={"/login-signup"} className="header-login-btn">Login</Link>
        )}
      </div>
    </header>
  );
};

export default Header;
