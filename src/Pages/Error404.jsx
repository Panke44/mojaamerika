import React from 'react'
import Navbar from '../Components/General/Navbar';
import MobileNavbar from '../Components/General/MobileNavbar';
import Bottom from '../Components/General/Bottom';
import Footer from '../Components/General/Footer';




const Error404 = () => {
  document.title = "Moja Amerika Podcast";
    
  return (
    <div>
      <Navbar />
      <MobileNavbar />

      <div className="error404">
        <div className="error-message">
          <h1> 404 </h1>
          <p>Stranica nije pronađena</p>
        </div>
      </div>

      <Footer />
      <Bottom />
    </div>
  )
}

export default Error404