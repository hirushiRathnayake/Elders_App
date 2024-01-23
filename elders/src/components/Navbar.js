import React from 'react'
import '../style/Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar'>
      <div className='toggleButton'>
        <button></button>
        <div className='links'>
               <Link>Home</Link>
        </div>
      </div>
    
    </div>
  )
}

export default Navbar
