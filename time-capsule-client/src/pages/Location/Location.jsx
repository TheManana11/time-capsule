import React from 'react'
import './Location.css'
import { useParams } from 'react-router-dom'

const Location = () => {
const { lat, long } = useParams();


  return (
    <div>
        <h1>Exact Location</h1>
        <p>{lat}</p>
        <p>{long}</p>
    </div>
  )
}

export default Location