import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login-signup.css";

import axios from "axios";

import { CiUser } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { CiLock } from "react-icons/ci";

const Signup = ({ isLogin, setIsLogin }) => {
  const backend_url = "http://127.0.0.1:8000/api";
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleAuthChange = () => {
    setIsLogin(!isLogin);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFormSubmission = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${backend_url}/guest/register`, formData);
      console.log(response);

      const user = response.data.payload;
      setFormData({
        name: "",
        email: "",
        country: "",
        password: "",
      });
      localStorage.setItem("user", JSON.stringify(user));
      navigate('/');
    } catch (error) {
      setError(error?.response?.data?.message);
      console.log(error?.response?.data?.message);
      console.log(error.response);
    }
  };

  return (
    <div className="login-body">
      <h1>Signup</h1>
      <form className="login-form">
        <div className="form-item">
          <label htmlFor="name">Name</label>
          <div className="input">
            <CiUser className="icon" />
            <input
              type="text"
              name="name"
              placeholder="e.g. Ahmad Manana"
              onChange={handleChange}
              value={formData.name}
            />
          </div>
        </div>

        <div className="form-item">
          <label htmlFor="country">Country</label>
          <div className="input">
            <IoLocationOutline className="icon" />
            <input
              type="text"
              name="country"
              placeholder="e.g. Lebanon"
              onChange={handleChange}
              value={formData.country}
            />
          </div>
        </div>

        <div className="form-item">
          <label htmlFor="email">Email</label>
          <div className="input">
            <CiMail className="icon" />
            <input
              type="text"
              name="email"
              placeholder="e.g. example@gmail.com"
              onChange={handleChange}
              value={formData.email}
            />
          </div>
        </div>

        <div className="form-item">
          <label htmlFor="password">Password</label>
          <div className="input">
            <CiLock className="icon" />
            <input
              type="password"
              name="password"
              placeholder="enter your password"
              onChange={handleChange}
              value={formData.password}
            />
          </div>
          <span className="error">{error}</span>
        </div>

        <button onClick={handleFormSubmission}>Signup</button>
      </form>
      <div className="not-member">
        <p>Already a member?</p>
        <p onClick={handleAuthChange} className="sign">
          Login
        </p>
      </div>
    </div>
  );
};

export default Signup;
