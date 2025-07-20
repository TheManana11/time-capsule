import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login-signup.css";
import { CiMail } from "react-icons/ci";
import { CiLock } from "react-icons/ci";

const Login = ({ isLogin, setIsLogin }) => {
  const backend_url = "http://127.0.0.1:8000/api";
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
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
      const response = await axios.post(`${backend_url}/guest/login`, formData);
      const user = response.data.payload;
      setFormData({
        email: "",
        password: "",
      });
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/");
    } catch (error) {
      setError(error?.response?.data?.message);
      console.log(error?.response?.data?.message);
      console.log(error.response);
    }
    console.log(formData);
  };

  return (
    <div className="login-body">
      <h1>Login</h1>
      <form className="login-form">
        <div className="form-item">
          <label htmlFor="email">Email</label>
          <div className="input">
            <CiMail className="icon" />
            <input
              type="text"
              name="email"
              placeholder="e.g. example@gmail.com"
              value={formData.email}
              onChange={handleChange}
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
              value={formData.password}
              onChange={handleChange}
            />
          </div>
        </div>
        <span className="error">{error}</span>

        <button onClick={handleFormSubmission}>Login</button>
      </form>
      <div className="not-member">
        <p>Not a member?</p>
        <p onClick={handleAuthChange} className="sign">
          Sign up
        </p>
      </div>
    </div>
  );
};

export default Login;
