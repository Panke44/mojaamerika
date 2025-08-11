import React, { memo } from 'react';
import PropTypes from 'prop-types';

const WhiteBtn = ({ btnText }) => {
  return (
        <button type='button' className='white_button' aria-label={btnText}> {btnText} </button>
  )
};

WhiteBtn.propTypes = {
  btnText: PropTypes.string.isRequired
};

export default memo(WhiteBtn);