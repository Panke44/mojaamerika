import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Images/logo.png'
import logo2 from '../../Images/favicon.png'
import OrangeBtn from './OrangeBtn'

const MobileNavbar = () => {
    return (

        <nav class="navbar navbar-light bg-white position-static navbar-mobile">
            <div class="container-fluid">
            <Link to="/"> <img src={logo2} className='mobile-navbar-img' alt="CHI Repair & Wash Inc orange/gray Logo" /> </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                    <div class="offcanvas-header">
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-end flex-grow-1">
                            <li> <Link to="/" className='nav-link' aria-current="page">  Podkast </Link> </li>
                            <li> <Link to="/epizode" className='nav-link' aria-current="page">  Epizode </Link> </li>
                            <Link target='_blank' className='nav-link' aria-current="page">  
                                <OrangeBtn btnText="WAT Iskustva" btnLink="https://watiskustva.com/"></OrangeBtn>
                            </Link>

                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default MobileNavbar