import React, { memo } from 'react';
import logo from '../../Images/logo.png'
import WATiskustva from '../../Images/watiskustva_logo.png'

const Footer = () => {
  return (
    <div className='container-fluid footer'>
      <div className="row">
        <div className="footer-item col-xl-3 col-lg-4 col-md-4">
          <h3> Projekti </h3>
          <img src={logo} alt="Moja Amerika Podcast logo" />
          <a href="https://watiskustva.com/" target="_blank" className="wat-iskustva-img" rel="noreferrer">
            <img src={WATiskustva} alt="WAT Iskustva logo" />
          </a>
          
        </div>

        <div className="footer-item col-xl-3 col-lg-4 col-md-4 border-item">
          <h3> Društvene mreže </h3>

          <p>
            <i className="fa-brands fa-instagram"></i>
            <a href='https://www.instagram.com/moja.amerika/' target="_blank" rel="noreferrer">
              Instagram @moja.amerika
            </a></p>

          <p>
            <i className="fa-brands fa-tiktok"></i>
            <a href='https://www.tiktok.com/@moja.amerika' target="_blank" rel="noreferrer">
              TikTok: @moja.amerika
            </a></p>

          <p>
            <i className="fa-brands fa-facebook"></i>
            <a href='https://www.facebook.com/moja.amerika1/' target="_blank" rel="noreferrer">
              Facebook: @moja.amerika1
            </a></p>

        </div>

        <div className="footer-item col-xl-3 col-lg-4 col-md-4">
          <h3> Kontakt </h3>

          <p>
            <i className="fa-solid fa-envelope"></i>
            <a href='mailto:mojaamerika1@gmail.com'>
            mojaamerika1@gmail.com
            </a></p>

        </div>
      </div>
    </div>
  )
}

export default memo(Footer);