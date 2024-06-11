import React from 'react'
import './index.css'

const Photo = ({ src, name }) => {
  return <img src={src} alt={name} className="photo" />
}

export default Photo
