import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Images/logo.png'

const MobileNavbar = () => {
    return (

        <nav class="navbar navbar-light bg-white position-static navbar-mobile">
            <div class="container-fluid">
            <Link to="/"> <img src={logo} className='mobile-navbar-img' alt="CHI Repair & Wash Inc orange/gray Logo" /> </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                    <div class="offcanvas-header">
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li> <Link to="/" className='nav-link' aria-current="page">  Home </Link> </li>
                            <li> <Link to="/services" className='nav-link' aria-current="page">  Services </Link> </li>
                            <li> <Link to="/contact" className='nav-link' aria-current="page">  Contact </Link> </li>

                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default MobileNavbar