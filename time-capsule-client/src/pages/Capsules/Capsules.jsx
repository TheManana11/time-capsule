import React, { useState } from "react";
import "./Capsule.css";
import { IoFilterOutline } from "react-icons/io5";
import CapsuleCard from "../../components/Capsule Card/CapsuleCard";
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

const Capsules = () => {
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
      video_url: "https://example.com/videos/vid1.mp4",
      audio_url: "https://example.com/audio/audio1.mp3",
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
      video_url: "",
      audio_url: "",
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
      video_url: "",
      audio_url: "",
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
      video_url: "https://example.com/videos/vid4.mp4",
      audio_url: "",
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
      video_url: "",
      audio_url: "",
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
      video_url: "",
      audio_url: "https://example.com/audio/audio6.mp3",
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
      video_url: "",
      audio_url: "",
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
      video_url: "https://example.com/videos/vid8.mp4",
      audio_url: "",
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
      video_url: "",
      audio_url: "https://example.com/audio/audio9.mp3",
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
      video_url: "",
      audio_url: "",
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
    <div className="capsules-container">
      <div className="capsules-filters">
        <form>
          <p className="filter-label">
            <IoFilterOutline /> Filter By
          </p>
          <div className="filters">
            <input type="date" />
            <select name="country">
              <option value="country">Country</option>
              <option value="country">Lebanon</option>
              <option value="country">France</option>
              <option value="country">Germany</option>
              <option value="country">Iraq</option>
              <option value="country">Syria</option>
              <option value="country">Turkey</option>
              <option value="country">Palestine</option>
            </select>
            <select name="mood">
              <option value="mood">mood</option>
              <option value="mood">happy</option>
              <option value="mood">sad</option>
              <option value="mood">depressed</option>
              <option value="mood">cute</option>
              <option value="mood">energetic</option>
              <option value="mood">angry</option>
              <option value="mood">strong</option>
            </select>
          </div>
          <button>Submit</button>
        </form>
      </div>

      <div className="capsules">
        <p className="capsules-head">{capsules.length} Capsules | Page 1</p>
        <div className="capsule-items">
          {capsules.map((capsule) => {
            return (
              <CapsuleCard
                img={capsule.image_url}
                title={capsule.title}
                location={capsule.location}
                set_date={capsule.set_date}
                reveal_date={capsule.reveal_date}
                views={capsule.views}
                tags={capsule.tags}
                color = {capsule.color}
              />
            );
          })}
        </div>
      </div>

      <div className="pagination">
        <button>prev</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>next</button>
      </div>
    </div>
  );
};

export default Capsules;
