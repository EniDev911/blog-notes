import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='nav'>
        <ul className='nav__container'>
            <li className='nav__item'>
                <a href="/" className='nav__link'>
                  <img src="https://raw.githubusercontent.com/EniDev911/assets/main/png/logo/logo_con_bg.png" height="40" />
                </a>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar;