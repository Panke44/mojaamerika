import React from 'react'

const ServiceCard = (props) => {
  return (
    <div className='service-card' data-aos="fade-up">

      <div className="service_card-icon">
        <img src={props.cardImg} alt={props.cardAlt} />
      </div>

      <div className="service_card-icon_mobile">
        <div className="img-card">
          <img src={props.cardImg} alt={props.cardAlt} />
        </div>
          <h2 className='header_mobile'> {props.header} </h2>
      </div>

      <h2 className='header_desktop'> {props.header} </h2>
      <p> {props.paragraph} </p>
    </div>
  )
}

export default ServiceCard