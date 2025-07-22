import React, { useState } from "react";
import "./AddCapsule.css";
import Button from "../../components/shared/Button/Button";
import axios from "axios";

const AddCapsule = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const id = user.id;
  const token = user.token;
  const [formData, setFormData] = useState({
    user_id: id,
    title: "",
    image_url: "",
    audio_url: "",
    color: "",
    emoji: "",
    reveal_date: "",
    type: "",
    tag1: "",
    tag2: "",
    tag3: "",
    is_surprise: "",
    message: "",
  });

  async function convertFileToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  }

  const handleOnChange = async (e) => {
    if (e.target.type === "file") {
      const base_64 = await convertFileToBase64(e.target.files[0]);
      setFormData((prev) => ({
        ...prev,
        [e.target.name]: base_64,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/user/capsules",
        formData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="add-capsule">
      <form>
        <h1>Create New Capsule</h1>
        <div className="add-capsule-inputs">
          <div className="add-label-input">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              placeholder="e.g 10 years later"
              value={formData.title}
              onChange={handleOnChange}
              required
            />
          </div>

          <div className="add-label-input">
            <label htmlFor="image_url">Image</label>
            <input
              type="file"
              name="image_url"
              accept="image/*"
              value={formData.image}
              onChange={handleOnChange}
              required
            />
          </div>

          <div className="add-label-input">
            <label htmlFor="audio_url">Audio</label>
            <input
              type="file"
              name="audio_url"
              accept="audio/*"
              value={formData.audio}
              onChange={handleOnChange}
              required
            />
          </div>

          <div className="add-label-input">
            <label htmlFor="color">Color</label>
            <input
              type="color"
              name="color"
              value={formData.color}
              onChange={handleOnChange}
              required
            />
          </div>

          <div className="add-label-input">
            <label htmlFor="title">Emoji</label>
            <input
              type="text"
              name="emoji"
              placeholder="e.g. 😊"
              value={formData.emoji}
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="add-label-input">
            <label htmlFor="title">Reveal Date</label>
            <input
              type="date"
              name="reveal_date"
              value={formData.reveal_date}
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="add-label-input">
            <label htmlFor="type">Type</label>
            <select name="type" value={formData.type} onChange={handleOnChange} required>
              <option value="">type</option>
              <option value="public">Public</option>
              <option value="private">Private</option>
              <option value="unlisted">Unlisted</option>
            </select>
          </div>
          <div className="add-label-input">
            <label htmlFor="tag1">Tag #1</label>
            <select name="tag1" value={formData.tag1} onChange={handleOnChange} required>
              <option value="">tag</option>
              <option value="happy">happy</option>
              <option value="sad">sad</option>
              <option value="funny">funny</option>
              <option value="excited">excited</option>
              <option value="excited">excited</option>
              <option value="inspiration">inspiration</option>
              <option value="angry">angry</option>
              <option value="tech">tech</option>
              <option value="business">business</option>
              <option value="travel">travel</option>
              <option value="music">music</option>
              <option value="food">food</option>
            </select>
          </div>
          <div className="add-label-input">
            <label htmlFor="tag2">Tag #2</label>
            <select name="tag2" value={formData.tag2} onChange={handleOnChange} required>
              <option value="">tag</option>
              <option value="happy">happy</option>
              <option value="sad">sad</option>
              <option value="funny">funny</option>
              <option value="excited">excited</option>
              <option value="excited">excited</option>
              <option value="inspiration">inspiration</option>
              <option value="angry">angry</option>
              <option value="tech">tech</option>
              <option value="business">business</option>
              <option value="travel">travel</option>
              <option value="music">music</option>
              <option value="food">food</option>
            </select>
          </div>
          <div className="add-label-input">
            <label htmlFor="tag3">Tag #3</label>
            <select name="tag3" value={formData.tag3} onChange={handleOnChange} required>
              <option value="">tag</option>
              <option value="happy">happy</option>
              <option value="sad">sad</option>
              <option value="funny">funny</option>
              <option value="excited">excited</option>
              <option value="inspiration">inspiration</option>
              <option value="angry">angry</option>
              <option value="tech">tech</option>
              <option value="business">business</option>
              <option value="travel">travel</option>
              <option value="music">music</option>
              <option value="food">food</option>
            </select>
          </div>

          <div className="add-label-check">
            <label htmlFor="is_surprise">isSurprise</label>
            <input type="checkbox" name="is_surprise" checked={formData.is_surprise} onChange={(e) => {
              setFormData((prev)=>({
                ...prev,
                is_surprise: e.target.checked
              }))
            }} />
          </div>
        </div>
        <div className="add-label-input">
          <label htmlFor="message">Message</label>
          <textarea
            type="text"
            name="message"
            placeholder="e.g enter your message ..."
            value={formData.message}
            onChange={handleOnChange}
            required
          />
        </div>
        <Button text={"Create"} method={submitForm} />
      </form>
    </div>
  );
};

export default AddCapsule;
