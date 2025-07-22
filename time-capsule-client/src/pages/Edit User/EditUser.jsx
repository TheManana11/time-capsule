import React from "react";
import "./EditUser.css";
import Button from "../../components/shared/Button/Button";
import useUserEdit from "./useUserEdit";

const EditUser = () => {
  
  const [formData, handleOnChange, error, handleFormSubmission] = useUserEdit();
  
  return (
    <div className="user-profile">
      <h1>Edit Profile</h1>
      <form className="user-profile-form">
        <div className="form-element">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleOnChange}
          />
        </div>
        <div className="form-element">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleOnChange}
          />
        </div>
        <div className="form-element">
          <label htmlFor="country">Country</label>
          <input
            name="country"
            value={formData.country}
            onChange={handleOnChange}
          />
        </div>
        <div className="form-element">
          <label htmlFor="old_password">Old Password</label>
          <input
            name="old_password"
            placeholder="enter your old password ..."
            value={formData.old_password}
            onChange={handleOnChange}
          />
        </div>
        <div className="form-element">
          <label htmlFor="new_password">New Password</label>
          <input
            name="new_password"
            placeholder="enter your new password ..."
            value={formData.new_password}
            onChange={handleOnChange}
          />
        </div>
        <div className="form-element">
          <label htmlFor="confirm_password">Confirm Password</label>
          <input
            name="confirm_password"
            placeholder="confirm your new password ..."
            value={formData.confirm_password}
            onChange={handleOnChange}
          />
        </div>
        <span className="error">{error}</span>
        <Button method={handleFormSubmission} text={"Edit"} />
      </form>
    </div>
  );
};

export default EditUser;
