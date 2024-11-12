import React from 'react'
import logo from '../../Images/logo.png'
import WATiskustva from '../../Images/watiskustva_logo.png'

const Footer = () => {
  return (
    <div className='container-fluid footer'>
      <div className="row">
        <div className="footer-item col-xl-3 col-lg-4 col-md-4">
          <h3> Grupa </h3>
          <img src={logo} alt="Moja Amerika Podcast logo" />
          <a href="https://watiskustva.com/" target="_blank" class="wat-iskustva-img">
            <img src={WATiskustva} alt="WAT Iskustva logo" />
          </a>
          
        </div>

        <div className="footer-item col-xl-3 col-lg-4 col-md-4 border-item">
          <h3> Društvene mreže </h3>

          <p>
            <i class="fa-brands fa-instagram"></i>
            <a href='https://www.instagram.com/moja.amerika/' target="_blank">
              Instagram @moja.amerika
            </a></p>

          <p>
            <i class="fa-brands fa-tiktok"></i>
            <a href='https://www.tiktok.com/@moja.amerika' target="_blank">
              TikTok: @moja.amerika
            </a></p>

          <p>
            <i class="fa-brands fa-facebook"></i>
            <a href='https://www.facebook.com/moja.amerika1/' target="_blank">
              Facebook: @moja.amerika1
            </a></p>

        </div>

        <div className="footer-item col-xl-3 col-lg-4 col-md-4">
          <h3> Kontakt </h3>

          <p>
            <i class="fa-solid fa-envelope"></i>
            <a href='mailto:kontakt@mojaamerika.com'>
              kontakt@mojaamerika.com
            </a></p>

        </div>
      </div>
    </div>
  )
}

export default Footer