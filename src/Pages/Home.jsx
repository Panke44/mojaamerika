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

import Placeholder from '../Images/placeholder.webp'

import Apple from '../Images/Applications/itunes.png';
import Spotify from '../Images/Applications/spotify.png';
import Deezer from '../Images/Applications/deezer.jpg';
import YouTube from '../Images/Applications/youtube.png';



const Home = () => {
  useEffect(() => {
    document.title = "Moja Amerika Podcast - Život u Americi iz ugla Balkanske dijaspore";
    AOS.init({ duration: 1000 });
  })
  return (
    <>
      <Navbar />
      <MobileNavbar />

      <div className='hero_container'>
        <div className="hero_text" >
          <h1 data-aos="fade-up"> Moja Amerika Podcast </h1>

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

            <Link to="https://www.youtube.com/watch?v=jGxBAtzFhEA&t=4527s" target="_blank" rel="noreferrer">
              <img src={Charles} className='featured-episode-card' alt='Charles Cather podkast epizoda' data-aos="fade-up"></img>
            </Link>

            <Link to="https://www.youtube.com/watch?v=JL1KpDiG8yk&t=1085s" target="_blank" rel="noreferrer">
              <img src={Milica} className='featured-episode-card' alt='Milica Dangubic podkast epizoda' data-aos="fade-up"></img>
            </Link>

            <Link to="https://www.youtube.com/watch?v=JUXOlOXg-YI" target="_blank" rel="noreferrer">
              <img src={Stojan} className='featured-episode-card' alt='Stojan Vukovic podkast epizoda' data-aos="fade-up"></img>
            </Link>

            <Link to="https://www.youtube.com/watch?v=6HlapmPX9m4" target="_blank" rel="noreferrer">
              <img src={Nemanja} className='featured-episode-card' alt='Nemanja Antic podkast epizoda' data-aos="fade-up"></img>
            </Link>

            <Link to="https://www.youtube.com/watch?v=7FMTIjR17m8" target="_blank" rel="noreferrer">
              <img src={Ivan} className='featured-episode-card' alt='Ivan Radojevic podkast epizoda' data-aos="fade-up"></img>
            </Link>

            <Link to="https://www.youtube.com/watch?v=VZf4ulGoHAw" target="_blank" rel="noreferrer">
              <img src={Dobrota} className='featured-episode-card' alt='Milos Dobrota podkast epizoda' data-aos="fade-up"></img>
            </Link>


          </CardHolder>

        </div>

      </div>

      <div className="blue-section">
        <Title title="Slušaj podkast" />

        <div class="wrapper-applications">
          <Link to="https://www.youtube.com/@mojaamerika" target='_blank' rel="noreferrer">
            <PodcastApp appimg={YouTube} appname="YouTube" appalt="YouTube logo" />
          </Link>

          <Link to="https://open.spotify.com/show/2EkisQ7V0Ra6EzQGUMv4Nf?si=cbb1d9d403bb4b0b" target='_blank' rel="noreferrer">
            <PodcastApp appimg={Spotify} appname="Spotify" appalt="Spotify logo" />
          </Link>

          <Link to="https://podcasts.apple.com/us/podcast/moja-amerika-podcast/id1652243313" target='_blank' rel="noreferrer">
            <PodcastApp appimg={Apple} appname="iTunes" appalt="Apple Podcast logo" />
          </Link>

          <Link to="https://www.deezer.com/en/show/5321727" target='_blank' rel="noreferrer">
            <PodcastApp appimg={Deezer} appname="Deezer" appalt="Deezer logo" />
          </Link>

        </div>
      </div>

      <div class="about-button-pre">
        <WhiteBtn btnText="Autor" />
      </div>
      <div className="home_about__content">

        <div className="author" data-aos="fade-up" data-aos-delay="300">
          <img src={Author} alt="Milos Panic sedi ispred Beverly Hills znaka u Los Angelesu" />
        </div>
        <div className="about__content">

          {/* <div className="about-button">
            <WhiteBtn btnText="Autor" />
          </div> */}
          <h2 data-aos="fade-up">Miloš Panić</h2>
          <p data-aos="fade-up" data-aos-delay="200">
            Osnivač "Moja Amerika Podcasta", inženjer informacionih tehnologija
            po struci, trostruki Work & Travel alumni
            (Ocean City, MD i dva puta Block Island, RI)
            i strastveni ljubitelj Havaja.
            Do sada sam posetio 9 od 50 saveznih država i jedan distrikt.

            <br /><br />

            Pokrenuo sam podkast sa ciljem da okupim zajednicu
            naših ljudi koji se zanimaju za Ameriku,
            da čujem njihove priče i predstavim stvarni život u Americi
            kroz iskustva naših ljudi.
          </p>
        </div>


      </div>

      <div className="blue-section">
        <div class="wrapper">
          <Title title="Rekli su o podkastu" />

          <Testimonial name="Marko Petrović" review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus."
            img={Placeholder} occupation="Student | PMF" alt="test" />

          <Testimonial name="Milica Nikolić" review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus."
            img={Placeholder} occupation="Doktorica" alt="test" />

          <Testimonial name="Stefan Jovanović" review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus."
            img={Placeholder} occupation="Advokat" alt="test" />

          <Testimonial name="Ana Popović" review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus."
            img={Placeholder} occupation="Profesorica" alt="test" />

        </div>
      </div >

      <Footer />
      <Bottom />
    </>
  )
}

export default Home