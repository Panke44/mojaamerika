import React, { memo } from 'react';
import PropTypes from 'prop-types';

const CardHolder = ({ children }) => {
  return (
    <div className='card_holder'>
        {children}
    </div>
  )
};

CardHolder.propTypes = {
  children: PropTypes.node.isRequired
};

export default memo(CardHolder);