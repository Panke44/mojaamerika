import React, {useEffect} from 'react'
import AOS from 'aos';

const ServiceCardHolder = (props) => {
  useEffect(() => {
    AOS.init({duration: 500});
  }, []);

  return (
    <div className='service_card-holder' data-aos={props.aos}>
        {props.children}
    </div>
  )
}

export default ServiceCardHolder