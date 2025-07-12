import React, { useState } from "react";
import './login-signup.css';
import { CiMail } from "react-icons/ci";
import { CiLock } from "react-icons/ci";

const Login = ({isLogin, setIsLogin}) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const handleAuthChange = () => {
    setIsLogin(!isLogin);
  } 

  const handleChange = (e) => {
    setFormData(prev=>({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <div className="login-body">
      <h1>Login</h1>
      <form className="login-form" onSubmit={handleFormSubmission}>
        <div className="form-item">
          <label htmlFor="email">Email:</label>
          <div className="input">
            <CiMail className="icon"/>
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
          <label htmlFor="password">Password:</label>
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

        <button>Login</button>
      </form>
      <div className="not-member">
        <p>Not a member?</p>
        <p onClick={handleAuthChange} className="sign">Sign up</p>
      </div>
    </div>
  );
};

export default Login;
