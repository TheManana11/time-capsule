import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const useUserProfile = () => {
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

  return [user]
}

export default useUserProfile