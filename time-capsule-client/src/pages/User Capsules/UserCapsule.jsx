import React, {  useEffect, useState} from 'react'
import './UserCapsule.css'
import CapsuleCard from '../../components/Capsule Card/CapsuleCard'
import { formatDate } from '../../Services/dateFormat'
import useUserCapsules from './useUserCapsules'

const UserCapsule = () => {
  const[capsules, ] = useUserCapsules();

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