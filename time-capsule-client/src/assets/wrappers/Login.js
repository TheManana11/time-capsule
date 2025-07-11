import styled from "styled-components";

const Wrapper = styled.div`
  * {
    margin: 0;
    padding: 0;
  }

  :root {
    font-size: 16px;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin-bottom: 3rem;
    color: #5d737e;
    font-size: 2.5rem;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 60%;
    margin-bottom: 0.5rem;
  }

  .form-item {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .form-item > label {
    color: #5d737e;
    font-weight: bold;
  }
  .input > input {
    padding: 0.3rem;
    width: 100%;
    border: none;
    outline: none;
    border-bottom: 1px solid black;
  }

  .input > input:focus {
    border-bottom: 1px solid #5d737e;
  }

  .not-member {
    display: flex;
    justify-content: space-between;
    width: 60%;
  }
  .sign {
    cursor: pointer;
  }
  .sign:hover {
    color: #5d737e;
    cursor: pointer;
  }

  form > button {
    font-size: 1.2rem;
    padding: 0.5rem;
    background-color: #5d737e;
    border: 1px solid #5d737e;
    color: white;
    cursor: pointer;
    transition: all ease-in-out 0.5s;
  }
  form > button:hover {
    background-color: #F7C59F;
    border: 1px solid #F7C59F;
    color: white;
  }
  .input {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .icon {
    font-size: 20px;
    color: #2f2e2eff;
  }

  @media (max-width: 1000px) {
    :root {
    font-size: 14px;
  }
  }


  @media (max-width: 768px) {
    :root {
    font-size: 12px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 80%;
    margin-bottom: 0.5rem;
  }


  .not-member {
    display: flex;
    justify-content: space-between;
    width: 80%;
  }
  }
`;

export default Wrapper;
