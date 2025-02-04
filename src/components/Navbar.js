import React from 'react'
import './navbar.css'

function Navbar() {
  return (
    <>
    <nav>
     <div className='logo'>
          <h1>Logo.</h1>
     </div>
     <div className='menu'>
          <ul>
               <li>Home</li>
               <li>About</li>
               <li>Services</li>
               <li>Contact</li>
          </ul>
     </div>
    </nav>
    </>
  )
}

export default Navbar