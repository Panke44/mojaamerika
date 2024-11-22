import React from 'react';
import { Link } from 'react-router-dom';

const OrangeBtn = (props) => {
  return (
    <Link to={props.btnLink} target="_blank" rel="noopener">
        <button type='button' className='orange_button'> {props.btnText} </button>
    </Link>
  )
}

export default OrangeBtn