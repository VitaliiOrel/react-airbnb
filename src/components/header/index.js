import React from 'react'
import './index.css'
import logo from './logo.svg'

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logo" height={32} />
    </header>
  )
}

export default Header
