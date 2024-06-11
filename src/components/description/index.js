import Heading from '../heading'
import './index.css'
import React from 'react'

const Description = ({ title, children }) => {
  return (
    <div className="description">
      <Heading>{title}</Heading>
      <p className="description__text">{children}</p>
    </div>
  )
}

export default Description
