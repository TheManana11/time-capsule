import styled from "styled-components";
import img from "../images/login-cover.png";

const Wrapper = styled.div`
  * {
    margin: 0;
    padding: 0;
  }

  :root{
    font-size: 16px;
  }

  height: 100dvh;
  width: 100dvw;
  background-image: linear-gradient(to right, #5d737e, #000000);
  display: flex;
  align-items: center;
  justify-content: center;

  .auth-container {
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    background-color: white;
    height: 80%;
    width: 75%;
    border-radius: 20px;
  }

  .auth-img {
    background-image: url(${img});
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: right;
    justify-content: center;
    gap: 3rem;
    color: white;
    border-radius: 20px;
    transition: transform 1.2s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  }
  .auth-img > h1 {
    font-size: 2.5rem;
  }
  .auth-img > p {
    font-size: 1.5rem;
    max-width: 60%;
  }
  .auth-content {
    width: 50%;
    transition: transform 1.2s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  }

  .signup-mode-img {
    transform: translateX(100%);
  }
  .signup-mode-content {
    transform: translateX(-100%);
  }

  @media (max-width:1000px) {
    :root{
        font-size: 14px;
    }
     .auth-img > p {
    font-size: 1.5rem;
    max-width: 90%;
  }
  }

  @media (max-width:768px) {
:root{
    font-size: 12px;
  }

  .auth-container {
    height: 80%;
    width: 80%;
  }

  .auth-img {
    display: none;
  }
  .auth-img > p {
    display: none;
  }
  .auth-content {
    width: 85%;
    transition: transform 1.2s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  }
  .signup-mode-img {
    transform: translateX(0);
  }
  .signup-mode-content {
    transform: translateX(0);
  }
  
  }
`;

export default Wrapper;
