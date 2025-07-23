import React from "react";
import "./Response.css";
import { MdErrorOutline } from "react-icons/md";
import { FaRegCircleCheck } from "react-icons/fa6";

const Response = ({ response_message, response_type, close }) => {
  return (
    <div className="response-container">
      <div
        className={`response-container-section ${
          response_type === "success" ? "response-success" : "response-error"
        }`}
      >
         <p className="response-close-icon" onClick={close}>X</p>
        <p>
          {" "}
          {response_type === "success" ? (
            <FaRegCircleCheck />
          ) : (
            <MdErrorOutline />
          )}{" "}
          {response_message}
        </p>
      </div>
    </div>
  );
};

export default Response;
