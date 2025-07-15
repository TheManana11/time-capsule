import React, {  useState} from 'react'
import './UserCapsule.css'
import CapsuleCard from '../../components/Capsule Card/CapsuleCard'

import img1 from '../../assets/images/1.webp'
import img2 from '../../assets/images/2.webp'
import img3 from '../../assets/images/3.webp'
import img4 from '../../assets/images/4.jfif'
import img5 from '../../assets/images/5.jfif'
import img6 from '../../assets/images/6.jfif'
import img7 from '../../assets/images/1.webp'
import img8 from '../../assets/images/2.webp'
import img9 from '../../assets/images/3.webp'
import img10 from '../../assets/images/1.webp'

import vid1 from '../../assets/videos/WhatsApp Video 2025-07-13 at 7.25.00 PM.mp4'
import vid2 from '../../assets/videos/WhatsApp Video 2025-07-13 at 7.25.03 PM.mp4'
import vid3 from '../../assets/videos/WhatsApp Video 2025-07-13 at 7.25.04 PM.mp4'
import vid4 from '../../assets/videos/WhatsApp Video 2025-07-13 at 7.25.10 PM.mp4'
import vid5 from '../../assets/videos/WhatsApp Video 2025-07-13 at 7.25.12 PM.mp4'

import audio from '../../assets/audios/WhatsApp Ptt 2025-07-13 at 7.23.30 PM.ogg'

const UserCapsule = () => {
   const [capsules, setCapsules] = useState([
      {
        id: 1,
        user_id: 1,
        user_name: "John Dee",
        title: "10 Years Later",
        location: "Lebanon",
        message:
          "This is a random message paragraph filled with memories and future hopes.",
        image_url: img1,
        video_url: vid1,
        audio_url: audio,
        set_date: "2025-01-01",
        reveal_date: "2035-01-01",
        status: "public",
        is_surprise: 0,
        emoji: "😊",
        views: 5,
        color: "#FF5733",
        tags: ["happy", "memory", "reflection"],
        type: "public"
      },
  
      {
        id: 2,
        user_id: 2,
        user_name: "Alice Ray",
        title: "Future Me",
        location: "Lebanon",
        message: "I hope you’re happy with what you’ve become.",
        image_url: img2,
        video_url: vid2,
        audio_url: audio,
        set_date: "2025-02-15",
        reveal_date: "2030-02-15",
        status: "private",
        is_surprise: 1,
        emoji: "🌟",
        views: 2,
        color: "#33B5FF",
        tags: ["self-growth", "hope", "learning"],
        type: "public"
      },
      {
        id: 3,
        user_id: 3,
        user_name: "David King",
        title: "Career Dreams",
        location: "Lebanon",
        message: "Keep pushing forward no matter what comes your way.",
        image_url: img3,
        video_url: vid3,
        audio_url: audio,
        set_date: "2025-03-10",
        reveal_date: "2030-03-10",
        status: "public",
        is_surprise: 0,
        emoji: "🚀",
        views: 15,
        color: "#4CAF50",
        tags: ["business", "ambition", "technology"],
        type: "private"
      },
      {
        id: 4,
        user_id: 4,
        user_name: "Lina Hope",
        title: "Love Letter to Myself",
        location: "United States",
        message: "You are loved more than you know.",
        image_url: img4,
        video_url: vid4,
        audio_url: audio,
        set_date: "2025-04-20",
        reveal_date: "2035-04-20",
        status: "public",
        is_surprise: 1,
        emoji: "❤️",
        views: 25,
        color: "#E91E63",
        tags: ["love", "self-care", "happy"],
        type: "Unlisted"
      }
    ]);
  return (
    <div className='user-capsules-container'>
      <h1>Your Capsules</h1>
      <div className="user-capsules">
        { 
          capsules.map((capsule, index) => {
            return <CapsuleCard
                img={capsule.image_url}
                title={capsule.title}
                location={capsule.location}
                set_date={capsule.set_date}
                reveal_date={capsule.reveal_date}
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