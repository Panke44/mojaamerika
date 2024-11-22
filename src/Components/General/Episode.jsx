import React from 'react'
import OrangeBtn from './OrangeBtn'

const Episode = (props) => {
    return (
        <div class="episode-card">
            <div class="episode-img">
                <img alt={props.alt} src={props.img} />
            </div>

            <div class="episode-header">
                <h4>{props.header}</h4>
            </div>

            <div className="center-button">
                <OrangeBtn btnText="Pogledaj" btnLink={props.link} target="_blank" rel="noopener"></OrangeBtn>
            </div>
        </div>
    )
}

export default Episode