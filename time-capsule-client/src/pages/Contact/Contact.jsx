import React from "react";
import "./Contact.css";
import contactImg from "../../assets/images/Vector (1).png";
import { LuPhone } from "react-icons/lu";
import { CiMail } from "react-icons/ci";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-hero">
        <img src={contactImg} alt="Contact-Hero-Image" />
        <h1>Contact Us</h1>
      </div>

      <div className="contact-content">
        <div className="contact-details">
          <h1>Contact Details</h1>
          <p><LuPhone /> +961 71 236 842</p>
          <p><CiMail /> manana.ahmad.17@gmail.com</p>
          <p>or fill the following from ... </p>
        </div>
        <div className="contact-from">
          <h1>Contact Form</h1>
            <form>
              <div className="form-element">
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" />
              </div>
               <div className="form-element">
                <label htmlFor="email">Email:</label>
                <input type="text" name="email" />
              </div>
               <div className="form-element">
                <label htmlFor="message">Message:</label>
                <input type="text" name="message" />
              </div>
              <button>Submit</button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
