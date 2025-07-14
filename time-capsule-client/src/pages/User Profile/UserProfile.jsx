import React from 'react'
import './UserProfile.css'

const UserProfile = () => {
  return (
    <div className="user-profile">
          <h1>User Profile</h1>
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
            </form>
        </div>
  )
}

export default UserProfile