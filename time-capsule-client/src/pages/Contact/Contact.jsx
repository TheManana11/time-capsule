import React, { useState } from "react";
import "./Contact.css";
import contactImg from "../../assets/images/Vector (1).png";
import { LuPhone } from "react-icons/lu";
import { MdMailOutline } from "react-icons/md";
import Button from '../../components/shared/Button/Button'
import axios from "axios";
// import Response from '../../components/shared/Response/Response'

const Contact = () => {
  const backend_url = "http://127.0.0.1:8000/api/guest/contact";
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

  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
      const response = await axios.post(`${backend_url}`, formData);
      console.log(response);
      setFormData({
      name: "",
      email: "",
      message: ""
  })
    } catch (error) {
      console.log(error);
    }
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
            <form className="contact-form">
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
              <Button method={handleSubmit} text={"Submit"} />
            </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
