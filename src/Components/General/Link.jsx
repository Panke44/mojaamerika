import React from 'react'

const Link = (props) => {
  return (
    <a className="link-card" href={props.href} target='_blank'>
        <img src={props.img} alt={props.imgalt} />
        <p> {props.sitename} </p>
    </a>
  )
}

export default Link