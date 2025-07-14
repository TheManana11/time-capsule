import React, { useState } from "react";
import "./SingleCapsule.css";

import img1 from "../../assets/images/1.webp";
import img2 from "../../assets/images/2.webp";
import img3 from "../../assets/images/3.webp";
import img4 from "../../assets/images/4.jfif";
import img5 from "../../assets/images/5.jfif";
import img6 from "../../assets/images/6.jfif";
import img7 from "../../assets/images/1.webp";
import img8 from "../../assets/images/2.webp";
import img9 from "../../assets/images/3.webp";
import img10 from "../../assets/images/1.webp";

import vid1 from "../../assets/videos/WhatsApp Video 2025-07-13 at 7.25.00 PM.mp4";
import vid2 from "../../assets/videos/WhatsApp Video 2025-07-13 at 7.25.03 PM.mp4";
import vid3 from "../../assets/videos/WhatsApp Video 2025-07-13 at 7.25.04 PM.mp4";
import vid4 from "../../assets/videos/WhatsApp Video 2025-07-13 at 7.25.10 PM.mp4";
import vid5 from "../../assets/videos/WhatsApp Video 2025-07-13 at 7.25.12 PM.mp4";

import audio from "../../assets/audios/WhatsApp Ptt 2025-07-13 at 7.23.30 PM.ogg";

const SingleCapsule = () => {
  const [capsules, setCapsules] = useState([
    {
      id: 1,
      user_id: 1,
      user_name: "John Dee",
      title: "10 Years Later",
      location: "Lebanon",
      message:
        "This is a random message paragraph filled with memories and future hopes. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel quasi, et quia distinctio odio aperiam eligendi, doloremque mollitia corporis earum in nemo debitis esse reprehenderit? Consequatur facere commodi est quisquam odit molestias sint corporis corrupti et praesentium illo delectus expedita voluptas, veritatis, a natus. Placeat, fugit? Nulla animi perferendis nobis sapiente est, atque sed optio numquam ullam exercitationem deleniti voluptates alias, ratione quod illo error beatae laudantium aut ex consequuntur, debitis quibusdam minus. Nobis magni nam eveniet velit eligendi, suscipit praesentium! Culpa est explicabo ullam architecto ducimus quidem eius optio suscipit rem ea dolor, sequi aut voluptas deleniti eveniet exercitationem.",
      image_url: img1,
      video_url: vid4,
      audio_url: audio,
      set_date: "2025-01-01",
      reveal_date: "2035-01-01",
      status: "public",
      is_surprise: 0,
      emoji: "😊",
      views: 5,
      color: "#FF5733",
      tags: ["happy", "memory", "reflection"],
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
    },
    {
      id: 5,
      user_id: 5,
      user_name: "Mike Smith",
      title: "Hello Older Me",
      message: "Did we make it to the mountains yet?",
      image_url: img5,
      video_url: vid5,
      audio_url: audio,
      location: "Syria",
      set_date: "2025-05-05",
      reveal_date: "2030-05-05",
      status: "private",
      is_surprise: 0,
      emoji: "🏞️",
      views: 3,
      color: "#FFC107",
      tags: ["travel", "nature", "hope"],
    },
    {
      id: 6,
      user_id: 6,
      user_name: "Sara Bloom",
      title: "Family First",
      message: "Cherish every moment with your loved ones.",
      image_url: img6,
      location: "France",
      video_url: vid1,
      audio_url: audio,
      set_date: "2025-06-12",
      reveal_date: "2035-06-12",
      status: "public",
      is_surprise: 1,
      emoji: "👨‍👩‍👧‍👦",
      views: 12,
      color: "#9C27B0",
      tags: ["family", "love", "gratitude"],
    },
    {
      id: 7,
      user_id: 7,
      user_name: "Tom Rivers",
      title: "Dad's Advice",
      message: "Don’t forget what you promised yourself.",
      image_url: img7,
      video_url: vid3,
      audio_url: audio,
      location: "Lebanon",
      set_date: "2025-07-07",
      reveal_date: "2030-07-07",
      status: "public",
      is_surprise: 0,
      emoji: "🧭",
      views: 6,
      color: "#3F51B5",
      tags: ["advice", "family", "reflection"],
    },
    {
      id: 8,
      user_id: 8,
      user_name: "Emily Night",
      title: "My Vision",
      location: "Lebanon",
      message: "Stay creative, stay kind, stay strong.",
      image_url: img8,
      video_url: vid4,
      audio_url: audio,
      set_date: "2025-08-18",
      reveal_date: "2033-08-18",
      status: "private",
      is_surprise: 1,
      emoji: "🎨",
      views: 4,
      color: "#00BCD4",
      tags: ["creativity", "learning", "inspiration"],
    },
    {
      id: 9,
      user_id: 9,
      user_name: "Henry Ford",
      title: "Legacy",
      location: "Lebanon",
      message: "Let your work speak for itself.",
      image_url: img9,
      video_url: vid3,
      audio_url: audio,
      set_date: "2025-09-09",
      reveal_date: "2040-09-09",
      status: "public",
      is_surprise: 0,
      emoji: "🏆",
      views: 30,
      color: "#607D8B",
      tags: ["legacy", "business", "impact"],
    },
    {
      id: 10,
      user_id: 10,
      user_name: "Clara Dawn",
      title: "Today’s Thoughts",
      message: "The best is yet to come.",
      image_url: img10,
      video_url: vid5,
      audio_url: audio,
      location: "Lebanon",
      set_date: "2025-10-01",
      reveal_date: "2035-10-01",
      status: "public",
      is_surprise: 0,
      emoji: "🌈",
      views: 10,
      color: "#8BC34A",
      tags: ["hope", "happy", "future"],
    },
  ]);

  return (
    <div className="single-capsule-container">
      <div className="single-capsule-head">
        <h1>{capsules[0].title} {capsules[0].emoji}</h1>
        <div className="dates">
          <p>
            <strong>set date:</strong> {capsules[0].set_date}
          </p>
          <p>
            <strong>reveal date:</strong> {capsules[0].reveal_date}
          </p>
        </div>
      </div>
      <div className="single-capsule-media">
        <img src={capsules[0].image_url} alt="single-capsule-img" />
        <div className="audio">
          {capsules[0].audio_url ? (
            <audio src={capsules[0].audio_url} controls />
          ) : null}
        </div>
      </div>
      <div className="single-capsule-content">
        <p>{capsules[0].message}</p>
        <div className="single-tags">{
                capsules[0].tags.map(tag =>{
                    return <p>#{tag}</p>
                })
            }</div>
        <p><strong>Author:</strong> {capsules[0].user_name}</p>
        <p className="single-views">{capsules[0].views} Views</p>
      </div>
    </div>  
  );
};

export default SingleCapsule;
