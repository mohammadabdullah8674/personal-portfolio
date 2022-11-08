import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import "../Styles/navbar.css"

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false)
  const location = useLocation();
  useEffect(()=> {
    setExpandNavbar(false)
  }, [location])
  function toggleNavbar() {
    setExpandNavbar(prev => !prev)
  }

  return (
    <div className='navbar' id={expandNavbar ? "open" : "close"}>
      <div className='toggleButton'>
        <button onClick={toggleNavbar}><i class="gg-menu-round"></i></button>
      </div>

      <div className='links'>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/experience">Experience</Link>
      </div>
    </div>
  )
}

export default Navbar