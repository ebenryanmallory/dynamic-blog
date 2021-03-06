import React from 'react'
import { Link } from 'react-router-dom'

import Logo from './Logo'
import NavLink from './NavLink'
import './Nav.css'

export default ({ handlePopupOpen }) => (
  <nav className='Nav'>
    <div className='Nav--Container container'>
      <Link to='/' exact>
        <Logo />
      </Link>
      <NavLink to='/about/' exact>
        About
      </NavLink>
    </div>
  </nav>
)
