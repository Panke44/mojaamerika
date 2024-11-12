import React from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

// ANIMATION ON SCROLL
import AOS from 'aos'
import 'aos/dist/aos.css'

import Navbar from '../Components/General/Navbar';
import MobileNavbar from '../Components/General/MobileNavbar';
import Title from '../Components/General/Title';
import Bottom from '../Components/General/Bottom';
import Footer from '../Components/General/Footer';
import OrangeBtn from '../Components/General/OrangeBtn';
import WhiteBtn from '../Components/General/WhiteBtn';
import CardHolder from '../Components/Home/CardHolder';
import Testimonial from '../Components/General/Testimonial';
import PodcastApp from '../Components/General/PodcastApp';

// Episode Img
import Author from '../Images/author.png';
import Charles from '../Images/card/card_charles.jpg';
import Dobrota from '../Images/card/card_dobrota.png';
import Ivan from '../Images/card/card_ivan.webp';
import Milica from '../Images/card/card_milica.png';
import Nemanja from '../Images/card/card_nemanja.png';
import Stojan from '../Images/card/card_stojan.jpg';

import Apple from '../Images/Applications/itunes.png';
import Spotify from '../Images/Applications/spotify.png';
import Deezer from '../Images/Applications/deezer.jpg';
import YouTube from '../Images/Applications/youtube.png';



const Home = () => {
  useEffect(() => {
    document.title = "Moja Amerika Podcast - Život u Americi iz ugla Balkanske dijaspore";
    AOS.init({ duration: 400 });
  })
  return (
    <>
      <Navbar />
      <MobileNavbar />

      <div className='hero_container'>
        <div className="hero_text" >
          <h2 data-aos="fade-up"> Moja Amerika Podcast </h2>

          <p data-aos="fade-up" data-aos-offset="100" data-aos-delay="200"> Razgovori o kulturi, identitetu i snovima naše dijaspore u Sjedinjenim Američkim Državama </p>

          <div className="hero-button" data-aos="fade-up" data-aos-delay="300">
            <OrangeBtn btnLink="/epizode" btnText="Sve epizode" />
          </div>
        </div>

        <div className="hero_img"> </div>

      </div>

      <div className='home_episodes_wrapper'>
        <div className="container">
          <WhiteBtn btnText="Slušaj sada" />
          <h2>Popularne epizode</h2>
        </div>

        <div className="card-holder_wrapper">

          <CardHolder>

            <Link to="https://www.youtube.com/watch?v=jGxBAtzFhEA&t=4527s" target="_blank">
              <img src={Charles} className='episode-card' data-aos="fade-up"></img>
            </Link>

            <Link to="https://www.youtube.com/watch?v=VZf4ulGoHAw" target="_blank">
              <img src={Dobrota} className='episode-card' data-aos="fade-up"></img>
            </Link>

            <Link to="https://www.youtube.com/watch?v=JUXOlOXg-YI" target="_blank">
              <img src={Stojan} className='episode-card' data-aos="fade-up"></img>
            </Link>

            <Link to="https://www.youtube.com/watch?v=6HlapmPX9m4" target="_blank">
              <img src={Nemanja} className='episode-card' data-aos="fade-up"></img>
            </Link>

            <Link to="https://www.youtube.com/watch?v=7FMTIjR17m8" target="_blank">
              <img src={Ivan} className='episode-card' data-aos="fade-up"></img>
            </Link>

            <Link to="https://www.youtube.com/watch?v=JL1KpDiG8yk&t=1085s" target="_blank">
              <img src={Milica} className='episode-card' data-aos="fade-up"></img>
            </Link>

          </CardHolder>

        </div>

      </div>

      <div className="blue-section">
        <Title title="Slušaj podkast" />

        <div class="wrapper">
          <Link to="https://www.youtube.com/@mojaamerika" target='_blank'>
            <PodcastApp appimg={YouTube} appname="YouTube" appalt="YouTube logo"/>
          </Link>

          <Link to="https://open.spotify.com/show/2EkisQ7V0Ra6EzQGUMv4Nf?si=cbb1d9d403bb4b0b" target='_blank'>
            <PodcastApp appimg={Spotify} appname="Spotify" appalt="Spotify logo"/>
          </Link>

          <Link to="https://podcasts.apple.com/us/podcast/moja-amerika-podcast/id1652243313" target='_blank'>
            <PodcastApp appimg={Apple} appname="iTunes" appalt="Apple Podcast logo"/>
          </Link>

          <Link to="https://www.deezer.com/en/show/5321727" target='_blank'>
            <PodcastApp appimg={Deezer} appname="Deezer" appalt="Deezer logo"/>
          </Link>
         
        </div>
      </div>

      <div className="home_about__content">
        <div className="about__content">
          <div className="about-button">
            <WhiteBtn btnText="Autor" />
          </div>
          <h2 data-aos="fade-up">Miloš Panić</h2>
          <p data-aos="fade-up" data-aos-delay="200">
            Osnivač Moja Amerika Podkasta, 3x Work & Travel alumni (Ocean City i 2x Block Island)
          </p>
        </div>

        <div className="author" data-aos="fade-up" data-aos-delay="300">
          <img src={Author} alt="Miloš Panić ispred Beverly Hills znaka" />
        </div>
      </div>

      <div className="blue-section">
        <div class="wrapper">
          <Title title="Rekli su o podkastu" />
          <Testimonial name="Charles Cather" review="aaa" img={Charles}></Testimonial>
          <Testimonial name="Charles Cather" review="aaa" img={Charles}></Testimonial>
          <Testimonial name="Charles Cather" review="aaa" img={Charles}></Testimonial>
        </div>
      </div >

      <Footer />
      <Bottom />
    </>
  )
}

export default Home