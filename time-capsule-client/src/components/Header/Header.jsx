import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { PiUserCircleLight } from "react-icons/pi";
import { IoLogInOutline } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

import Button from '../shared/Button/Button'

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menu, setMenu] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    const token = JSON.parse(user)?.token;
    if(token){
      setIsLoggedIn(true);
    }else{
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false); 
    navigate("/");
  }

  return (
    <header className="header-container">
      <Link to={"/"} className="logo"><h1>Capsula</h1></Link>
        { menu ? <IoMdClose className="burger-menu" onClick={() => setMenu(!menu)}/> : <IoIosMenu className="burger-menu" onClick={() => setMenu(!menu)}/>}
        { menu ? 
          (<div className="mobile-links">
            <Link to={"/"} onClick={() => setMenu(!menu)} className="header-link mobile-link">Home</Link>
            <Link to={"capsules"} onClick={() => setMenu(!menu)} className="header-link mobile-link">Capsules</Link>
            <Link to={"/contact"} onClick={() => setMenu(!menu)} className="header-link mobile-link">Contact</Link>
          </div>) : null
        }
      <div className="header-links">


        <Link to={"/"} className="header-link">Home</Link>
        <Link to={"capsules"} className="header-link">Capsules</Link>
        <Link to={"/contact"} className="header-link">Contact</Link>
      </div>
      <div>
        {isLoggedIn ? (
          <div className="header-user">
            <Link to={"/dashboard"}><PiUserCircleLight className="header-user-icon" /></Link>
            <Button method={handleLogOut} text={"Logout"} className="header-btns"/>
          </div>
        ) : (
          <Link to={"/login-signup"}>
            <Button text={"Login"} className="header-btns"/>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
