import React from 'react'
import '../style/Navbar.css';
import { Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
  return (
    <div className='navbar'>
      <div className='toggleButton'>
        <button><ReorderIcon/></button>
        <div className='links'>
               <Link to='/'>Home</Link>
               <Link to='/Who'>Who</Link>
               <Link to='/Work'>Work</Link>
               <Link to='/Contact'>Contact</Link>
        </div>
      </div>
    
    </div>
  )
}

export default Navbar
