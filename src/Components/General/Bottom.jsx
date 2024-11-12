import React from 'react'
import { Link } from 'react-router-dom'

const Bottom = () => {
  return (
    <div className='bottom-container'>
        <div className="bottom-navbar">
            <Link to="/"> Podkast </Link>
            <Link to="/epizode"> Sve epizode </Link>
            <Link to="https://watiskustva.com/" target='_blank'> WAT Iskustva </Link>
        </div>

        <div className="bottom-copyright">
            &copy; {new Date().getFullYear()} Moja Amerika. Sva prava zadržana. 
        </div>
    </div>
  )
}

export default Bottom