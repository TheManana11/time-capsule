import React from 'react'
import './Button.css'

const Button = ({ text, className = '', method}) => {
  return (
    <button className={`button ${className}`} onClick={method}>{text}</button>
  )
}

export default Button