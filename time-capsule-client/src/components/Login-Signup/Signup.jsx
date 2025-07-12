import React, {useState} from "react";
import './login-signup.css';
import { CiUser } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { CiLock } from "react-icons/ci";

const Signup = ({isLogin, setIsLogin}) => {
  const [formData, setFormData] = useState({
      name: "",
      country: "",
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
      <h1>Signup</h1>
      <form className="login-form" onSubmit={handleFormSubmission}>
        <div className="form-item">
          <label htmlFor="name">Name:</label>
          <div className="input">
            <CiUser className="icon"/>
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
          <label htmlFor="country">Country:</label>
          <div className="input">
            <IoLocationOutline className="icon"/>
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
          <label htmlFor="email">Email:</label>
          <div className="input">
            <CiMail className="icon"/>
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
          <label htmlFor="password">Password:</label>
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
        </div>

        <button>Signup</button>
      </form>
      <div className="not-member">
        <p>Already a member?</p>
        <p onClick={handleAuthChange} className="sign">Login</p>
      </div>
    </div>
  );
};

export default Signup;
