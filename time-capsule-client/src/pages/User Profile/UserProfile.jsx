import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './UserProfile.css'
import axios from 'axios';

const UserProfile = () => {
  const backend_url = "http://127.0.0.1:8000/api";

  const navigate = useNavigate();

  const user_local = localStorage.getItem("user");
  const token = JSON.parse(user_local)?.token;
  const id = JSON.parse(user_local)?.id;

  const[user, setUser] = useState({});
  const getUser = async() => {
    try {
      const response = await axios.get(`${backend_url}/user/users/${id}`, {headers: { Authorization: `Bearer ${token}` }});
      setUser(response?.data?.payload);
    } catch (error) {
      navigate("/login-signup");
    }
  }
  useEffect(() => {
    getUser();
  }, [])

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