import axios from 'axios';
import React, { useEffect, useState } from 'react'

const useUserCapsules = () => {
 const backend_url = "http://127.0.0.1:8000/api";

  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  
  const token = user.token;
  const id = user.id;

  const [capsules, setCapsules] = useState([]);


  const getUserCapsules = async () => {
    try {
      const response = await axios.get(`${backend_url}/user/user-capsules/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setCapsules(response?.data?.payload);
      
    } catch (error) {
      console.log(error);
      
    }
  }


  useEffect(() => {
    getUserCapsules();
  }, []);

  return [capsules];
}

export default useUserCapsules