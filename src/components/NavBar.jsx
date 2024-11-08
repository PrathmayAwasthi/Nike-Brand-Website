import React from 'react';
import logo from '../assets/logo.png'

const NavBar = () => {
  return (
      <div className='navbar'>
        <div className="logo">
            <img src={logo} alt="Logo" id='img-logo'/>
        </div>
        <div className="menu-items">
            <ul>
                <li className='menu-item'>MENU</li>
                <li className='menu-item'>LOCATION</li>
                <li className='menu-item'>ABOUT</li>
                <li className='menu-item'>CONTACT</li>
            </ul>
        </div>
        <div className="login-btn">
            <span>Login</span>
        </div>
      </div>
  )
}

export default NavBar