import React from 'react'
import './CapsuleCard.css'
import Button from '../shared/Button/Button'

const CapsuleCard = ({img, title, set_date, reveal_date, tags, views, location, color}) => {
  return (
    <div className='capsule-card-container' style={{border: `2px solid ${color}`}}>
        <div className="card-head">
            <img src={img} alt="Capsule-card-image" />
            <div className="capsule-card-head-content">
                <h2>{title}</h2>
                <p>{location}</p>
            </div>
        </div>
        <div className="card-middle">
            <div className="card-middle-tags">
                {
                    tags.map(tag => {
                        return <p>#{tag}</p>
                    })
                }
            </div>
            <div className="capsule-card-middle-dates">
                <p><strong>set date:</strong> {set_date}</p>
                <p><strong>reveal date:</strong> {reveal_date}</p>
            </div>
        </div>
        <hr />
        <div className="card-bottom">
            <p>{views} views</p>
            <Button text={"View Details"}/>
        </div>
    </div>
  )
}

export default CapsuleCard