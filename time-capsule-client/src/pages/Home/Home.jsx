import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import aboutImg from "../../assets/images/time (3).png";
import captureImg from "../../assets/images/time.png";
import missionImg from "../../assets/images/time (4).png";
import Button from "../../components/shared/Button/Button.jsx";

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero">
        <h1>Welcome to Capsula</h1>
        <p>Your digital time capsule for life’s most meaningful moments.</p>
        <div className="home-hero-links">
          <Link to={"/capsules"}><Button text={"Capsules"}/></Link>
          <a href="#about">
            <Button text={"About us"} className={"hero-about-btn"} />
          </a>
        </div>
      </div>

      <div id="about" className="home-sections">
        <img src={aboutImg} alt="page-sections-image" />
        <div className="home-sections-content">
          <div className="home-sections-head">
            <p>about us</p>
            <h1>What is Capsula</h1>
          </div>
          <p>
            At Capsula, we create a space where memories transcend time. Our
            platform lets you store personal messages, photos, and audio that
            can be revealed at a future date for yourself or loved ones.
          </p>
          <p>
            Whether you're capturing a moment, sharing future wisdom, or simply
            sending love across time, Capsula is your digital vault for
            meaningful, time-locked experiences.
          </p>
        </div>
      </div>

      <div className="home-sections reverse">
        <div className="home-sections-content">
          <div className="mission">
            <div className="home-sections-head">
              <p>our mission</p>
              <h1>Preserving the Present, Inspiring the Future</h1>
            </div>
            <p>
              Our mission is to help people capture meaningful moments and
              deliver them through time in a secure, personal way.
            </p>
          </div>

          <div className="vision">
            <div className="home-sections-head">
              <p>our vision</p>
              <h1>A Future Filled with Memories</h1>
            </div>
            <p>
              Our vision is to become the trusted space where people from around
              the world connect across time through digital memory capsules.
            </p>
          </div>
        </div>
        <img src={missionImg} alt="page-sections-image" />
      </div>

      <div className="home-sections">
        <img
          className="capture-img"
          src={captureImg}
          alt="page-sections-image"
        />
        <div className="home-sections-content">
          <div className="home-sections-head">
            <h1>Capture the Moment</h1>
          </div>
          <p>
            Some moments deserve more than a photo they deserve to be
            remembered, relived, and rediscovered. At Capsula, we help you
            capture life’s most meaningful memories and send them forward in
            time. Write a message, record a feeling, save a thought and unlock
            it when the time is right.
          </p>
          <p>Because the best moments are the ones worth waiting for.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
