import React from "react";
import "./SingleCapsule.css";
import useSingleCapsule from "./useSingleCapsule";
import { formatDate } from '../../Services/dateFormat'
import Button from '../../components/shared/Button/Button'


const SingleCapsule = () => {
  const [capsule] = useSingleCapsule();

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
      <a href={`http://127.0.0.1:8000/storage/capsule_${capsule.id}.zip`} download>
        Download Zip File
      </a>
    </div>  
  );
};

export default SingleCapsule;
