import React, { useRef } from 'react';
import { useEffect } from 'react';

import Navbar from '../Components/General/Navbar';
import MobileNavbar from '../Components/General/MobileNavbar';
import Footer from '../Components/General/Footer';
import Bottom from '../Components/General/Bottom';

// ANIMATION ON SCROLL
import AOS from 'aos'
import 'aos/dist/aos.css'

const Episodes = () => {
    useEffect(() => {
        document.title = "Moja Amerika Podcast - Sve epizode";
        AOS.init({ duration: 400 });
    })

    return (
    <>
      <Navbar />
      <MobileNavbar />

      <iframe width="560" height="315" src="https://www.youtube.com/embed/S9my-W0ZYUg?si=eirY70U0YH8vzf7j" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      <iframe width="560" height="315" src="https://www.youtube.com/embed/S9my-W0ZYUg?si=eirY70U0YH8vzf7j" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      <iframe width="560" height="315" src="https://www.youtube.com/embed/S9my-W0ZYUg?si=eirY70U0YH8vzf7j" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      <iframe width="560" height="315" src="https://www.youtube.com/embed/S9my-W0ZYUg?si=eirY70U0YH8vzf7j" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      <iframe width="560" height="315" src="https://www.youtube.com/embed/S9my-W0ZYUg?si=eirY70U0YH8vzf7j" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      <iframe width="560" height="315" src="https://www.youtube.com/embed/S9my-W0ZYUg?si=eirY70U0YH8vzf7j" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      <iframe width="560" height="315" src="https://www.youtube.com/embed/S9my-W0ZYUg?si=eirY70U0YH8vzf7j" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      <Footer />
      <Bottom />
    </>
    )
}

export default Episodes