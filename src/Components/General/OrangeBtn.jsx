import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const OrangeBtn = ({ btnLink, btnText, target = "_blank", rel = "noopener" }) => {
  return (
    <Link to={btnLink} target={target} rel={rel}>
        <button type='button' className='orange_button' aria-label={btnText}> {btnText} </button>
    </Link>
  )
};

OrangeBtn.propTypes = {
  btnLink: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
  target: PropTypes.string,
  rel: PropTypes.string
};

export default memo(OrangeBtn);