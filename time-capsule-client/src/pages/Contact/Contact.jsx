import React, { useState } from "react";
import "./Contact.css";
import contactImg from "../../assets/images/Vector (1).png";
import { LuPhone } from "react-icons/lu";
import { MdMailOutline } from "react-icons/md";

const Contact = () => {
  const[formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData);
     setFormData({
      name: "",
      email: "",
      message: ""
  })
  } 

  return (
    <div className="contact-container">
      <div className="contact-hero">
        <img src={contactImg} alt="Contact-Hero-Image" />
        <h1>Contact Us</h1>
      </div>

      <div className="contact-content">
        <div className="contact-details">
          <h1>Contact Details</h1>
          <p><LuPhone className="contact-icons"/> +961 71 236 842</p>
          <p><MdMailOutline  className="contact-icons"/> manana.ahmad.17@gmail.com</p>
          <p className="right-align-text">or fill the following from ... </p>
        </div>
        <div className="contactUs-form">
          <h1>Contact Form</h1>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-element">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" placeholder="e.g. Ahmad Manana" onChange={handleChange} value={formData.name}/>
              </div>
               <div className="form-element">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" placeholder="e.g. example@gmail.com" onChange={handleChange} value={formData.email}/>
              </div>
               <div className="form-element">
                <label htmlFor="message">Message</label>
                <textarea name="message" rows={6} placeholder="write you concerns or feedback here ... " onChange={handleChange} value={formData.message}></textarea>
              </div>
              <button>Submit</button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
