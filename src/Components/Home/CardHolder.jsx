import React from 'react'

const CardHolder = (props) => {

  return (
    <div className='card_holder'>
        {props.children}
    </div>
  )
}

export default CardHolder