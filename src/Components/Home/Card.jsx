import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'



const Card = (props) => {

  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <div className='services-card' data-aos="fade-up">
      <div className="card-info">
        <h4> {props.cardHeader} </h4>
        <p> {props.cardText} </p>
      </div>
    </div>
  )
}

export default Card