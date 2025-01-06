import React from 'react'
import '../assets/css/Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='header'>
        <nav>
            <ul>
              <li><Link to='/' className='Link'>Home</Link></li>
                <li><Link to='/signup' className='Link'>SignUp</Link></li>
                <li><Link to='/login' className='Link'>Login</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar