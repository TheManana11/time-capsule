import axios from 'axios';
import React, { useState } from 'react'

const useContact = () => {
   const backend_url = "http://127.0.0.1:8000/api/guest/contact";
  const[formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
      const response = await axios.post(`${backend_url}`, formData);
      console.log(response);
      setFormData({
      name: "",
      email: "",
      message: ""
  })
    } catch (error) {
      console.log(error);
    }
  }

  return [formData, handleChange, handleSubmit];
}

export default useContact