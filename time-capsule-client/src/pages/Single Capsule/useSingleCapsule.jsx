import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const useSingleCapsule = () => {
 const backend_url = "http://127.0.0.1:8000/api";
  const { id } = useParams();

  const [capsule, setCapsule] = useState({});

    useEffect(() => {
    getCapsule(); 
    console.log("test");
       
  }, [])

  const getCapsule = async () => {
    console.log("test");
    
    try {
      const response = await axios.get(`${backend_url}/guest/capsules/${id}`);
      console.log(response.data.payload);
      
      setCapsule(response?.data?.payload);
    } catch (error) {
      console.log(error);
      
    }
  }

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");
  const navigate = useNavigate();
  if(capsule.type === "unlisted" && token !== capsule.unique_token) navigate('/capsules');

return [capsule]

}

export default useSingleCapsule