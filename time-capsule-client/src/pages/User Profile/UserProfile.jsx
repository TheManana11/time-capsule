import React from 'react'
import './UserProfile.css'
import useUserProfile from './useUserProfile'

const UserProfile = () => {
  const [user] = useUserProfile();

  return (
    <div className="user-profile">
          <h1>User Profile</h1>
            <form className="user-profile-form">
              <div className="form-element">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" value={user.name}/>
              </div>
               <div className="form-element">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" value={user.email}/>
              </div>
               <div className="form-element">
                <label htmlFor="country">Country</label>
                <input name="country" value={user.country} />
              </div>
            </form>
        </div>
  )
}

export default UserProfile