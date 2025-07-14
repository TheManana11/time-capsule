import React from 'react'
import './EditUser.css'
import Button from '../../components/shared/Button/Button'

const EditUser = () => {
  return (
     <div className="user-profile">
          <h1>Edit Profile</h1>
            <form className="user-profile-form">
              <div className="form-element">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" placeholder="Ahmad Manana"/>
              </div>
               <div className="form-element">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" placeholder="manana.ahmad.17@gmail.com"/>
              </div>
               <div className="form-element">
                <label htmlFor="country">Country</label>
                <input name="country" placeholder="Lebanon" />
              </div>
              <div className="form-element">
                <label htmlFor="oldPassword">Old Password</label>
                <input name="oldPassword" placeholder="enter your old password ..." />
              </div>
              <div className="form-element">
                <label htmlFor="newPassword">New Password</label>
                <input name="newPassword" placeholder="enter your new password ..." />
              </div>
              <div className="form-element">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input name="confirmPassword" placeholder="confirm your new password ..." />
              </div>
              <Button text={"Edit"}/>
            </form>
        </div>
  )
}

export default EditUser