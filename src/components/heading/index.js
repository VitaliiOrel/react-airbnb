import './index.css'
import React from 'react'

const Heading = ({ children, border }) => {
  return (
    <span className={`heading ${border ? 'heading--border' : ''}`}>
      {children}
    </span>
  )
}

export default Heading
