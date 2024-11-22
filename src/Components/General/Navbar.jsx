import React from 'react';
import logo from '../../Images/logo.png'
import OrangeBtn from './OrangeBtn';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar-desktop">
      <Link to="/"> <img src={logo} alt="Moja Amerika Podcast Logo" /> </Link>
      <ul>
        <li> <Link to="/"> Podkast </Link> </li>
        <li> <Link to="/epizode"> Epizode </Link> </li>
        <OrangeBtn btnLink="https://watiskustva.com/" btnText="WAT Iskustva" target="_blank" rel="noopener"  />        
      </ul>
    </nav>
  )
}

export default Navbar