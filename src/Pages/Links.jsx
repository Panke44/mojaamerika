import React from 'react'
import Link from '../Components/General/Link'
import { useEffect } from 'react'

// Images
import Logo from '../Images/Links/logo.png'
import pod_rs from '../Images/Links/podcast_rs.png'
import paypal from '../Images/Links/paypal.jpg'
import site from '../Images/Links/site.jpg'
import wat from '../Images/Links/wat_iskustva.jpg'
import spotify from '../Images/Applications/spotify.png'
import youtube from '../Images/Applications/youtube.png'


const Links = () => {
    useEffect(() => {
        document.title = "Linkovi";
      })
  return (
    <div className="link-wrapper">
        <header>
            <img src={Logo} alt="Moja Amerika Podcast Logo" />
            {/* <h2>Moja Amerika Podcast</h2> */}
        </header>

        <Link href="https://watiskustva.com/" img={wat} imgalt="American Flag within a star icon" sitename="Work & Travel Iskustva" />
        <Link href="https://mojaamerika.com/" img={site} imgalt="World icon" sitename="Sajt" />
        <Link href="https://www.youtube.com/@mojaamerika" img={youtube} imgalt="YouTube logo" sitename="YouTube" />
        <Link href="https://open.spotify.com/show/2EkisQ7V0Ra6EzQGUMv4Nf" img={spotify} imgalt="Spotify logo" sitename="Spotify & Apple" />
        <Link href="hthttps://podcast.rs/show/moja-amerika-podcast/" img={pod_rs} imgalt="Podcast.rs logo" sitename="Podcast.rs" />
        <Link href="https://paypal.me/mojaamerika" img={paypal} imgalt="Paypal logo" sitename="Podrži projekat" />

        <div className="link-footer">
            <p> &copy; {new Date().getFullYear()} Moja Amerika.  </p>
        </div>

    </div>
  )
}

export default Links