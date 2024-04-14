import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav-component'>
        <ul>
          <Link to='/' style={{textDecoration:'none',color:'white'}}><li>Home</li></Link>
          <Link to='/About' style={{textDecoration:'none',color:'white'}}><li>About</li></Link>
          <Link to='/Resume' style={{textDecoration:'none',color:'white'}}><li>Resume</li></Link>
          <Link to='/Projects' style={{textDecoration:'none',color:'white'}}><li>Projects</li></Link>
          <Link to='/Skills' style={{textDecoration:'none',color:'white'}}><li>Skills</li></Link>
          <Link to='/Contact' style={{textDecoration:'none',color:'white'}}><li>Contact</li></Link>
        </ul>
    </div>
  )
}

export default Navbar