import React, {  useEffect, useState} from 'react'
import './UserCapsule.css'
import CapsuleCard from '../../components/Capsule Card/CapsuleCard'

import { useParams } from 'react-router-dom'
import axios from 'axios'

const UserCapsule = () => {
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

    function formatDate(dateString) {
  const date = new Date(dateString);

  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  return date.toLocaleDateString("en-US", options);
}

  return capsules.length === 0 ? (<h1 className='user-capsules-container'>You didn't add any capsule till now</h1>) :
   (
    <div className='user-capsules-container'>
      <h1>Your Capsules</h1>
      <div className="user-capsules">
        { 
          capsules.map((capsule, index) => {
            return <CapsuleCard
                key={index}
                id={capsule.id}
                img={`http://127.0.0.1:8000/storage/${capsule.image_url}`}
                title={capsule.title}
                country={capsule.country}
                city={capsule.city}
                set_date={formatDate(capsule.created_at)}
                reveal_date={formatDate(capsule.reveal_date)}
                views={capsule.views}
                tags={capsule.tags}
                color = {capsule.color}
                type={capsule.type}
              />
          })
        }
      </div>
    </div>
   )
}

export default UserCapsule