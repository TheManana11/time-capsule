import React, { useEffect, useState } from "react";
import "./SingleCapsule.css";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Button from '../../components/shared/Button/Button'
import JSZip from "jszip";
import { saveAs } from 'file-saver'

const SingleCapsule = () => {
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


  function formatDate(dateString) {
  const date = new Date(dateString);

  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  return date.toLocaleDateString("en-US", options);
}



// const downloadZip = async() =>{

//   const zip = new JSZip();
  
//   zip.file("capsule.json", JSON.stringify({title: capsule.title, description: capsule.message, country: capsule.country, city: capsule.city, reveal_date: capsule.reveal_date}));
  
//   const img = zip.folder("images");
//   img.file("smile.txt", `http://127.0.0.1:8000/storage/${capsule.image_url}`);

//   const audio = zip.folder("audio");
//   audio.file("smile.txt", `http://127.0.0.1:8000/storage/${capsule.audio_url}`);
  
//     const content = await zip.generateAsync({type: "blob"});
//     saveAs(content, "capsule.zip");
// };


  return (
    <div className="single-capsule-container">
      <div className="single-capsule-head">
        <h1>{capsule.title} {capsule.emoji}</h1>
        <div className="dates">
          <p>
            <strong>set date:</strong> {formatDate(capsule.created_at)}
          </p>
          <p>
            <strong>reveal date:</strong> {formatDate(capsule.reveal_date)}
          </p>
        </div>
      </div>
      <div className="single-capsule-media">
        <img src={`http://127.0.0.1:8000/storage/${capsule.image_url}`} alt="single-capsule-img" />
        <div className="audio">
          {capsule.audio_url ? (
            <audio src={`http://127.0.0.1:8000/storage/${capsule.audio_url}`} controls />
          ) : null}
        </div>
      </div>
      <div className="single-capsule-content">
        <p>{capsule.message}</p>
        <div className="single-tags">{
                capsule.tags?.map(tag =>{
                    return <p>#{tag.name}</p>
                })
            }</div>
        <p><strong>Author:</strong> {capsule?.user?.name}</p>
        <p className="single-views">{capsule.views} Views</p>
        <h3>Location:</h3>
        <p><strong>Country:</strong> {capsule.country}</p>
        <p><strong>City:</strong> {capsule.city}</p>
        <h4>Exact location:</h4>
        {/* <Link to={`/location/${capsule.latitude}/${capsule.longitude}`}>Go to exact location</Link>   */}
        <a href={`https://www.google.com/maps?q=${capsule.latitude},${capsule.longitude}`}>Open exact location in maps</a>
      </div>
      {/* <Button method={downloadZip} text={"Download Capsule as zip file"}/>  */}
    </div>  
  );
};

export default SingleCapsule;
