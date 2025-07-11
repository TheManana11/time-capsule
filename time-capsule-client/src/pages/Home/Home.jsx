import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import aboutImg from "../../assets/images/time (3).png";

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero">
        <h1>Welcome to Capsula</h1>
        <p>Your digital time capsule for life’s most meaningful moments.</p>
        <div className="home-hero-links">
          <Link className="hero-btn">Capsules</Link>
          <Link className="hero-btn hero-about-btn" to={"#about"}>
            About Us
          </Link>
        </div>
      </div>

      <div id="about" className="about-us">
        <img src={aboutImg} alt="About-us-image" />
        <div className="about-content">
          <div className="about-content-head">

          <p>about us</p>
          <h1>What is Capsula</h1>
          </div>
          <p>
            At Capsula, we create a space where memories transcend time. Our
            platform lets you store personal messages, photos, and audio that
            can be revealed at a future date — for yourself or loved ones.
          </p>
          <p>
            Whether you're capturing a moment, sharing future wisdom, or simply
            sending love across time, Capsula is your digital vault for
            meaningful, time-locked experiences.
          </p>
        </div>
      </div>

      <div className="mission-vision"></div>

      <div className="capture"></div>
    </div>
  );
};

export default Home;
