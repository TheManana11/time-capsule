import axios from 'axios';
import React, { useState } from 'react'

const useUserEdit = () => {
  const backend_url = "http://127.0.0.1:8000/api";

  const user = JSON.parse(localStorage.getItem("user"));
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    country: user.country,
    old_password: "",
    new_password: "",
    confirm_password: "",
  });

  const [error, setError] = useState("");

  const handleOnChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFormSubmission = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${backend_url}/user/update-user/${user.id}`, formData, {headers: {Authorization: `Bearer ${user.token}`}});
      console.log(response);
      console.log(response.data.message);
    } catch (error) {
      setError(error?.response?.data?.message);
    }
  };

  return [formData, handleOnChange, error, handleFormSubmission];
}

export default useUserEdit