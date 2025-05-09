import React from 'react'

const Testimonial = (props) => {
    return (
        <div class="review-card" data-aos={props.aos} data-aos-delay={props.delay}>
            <div class="header-content">
                <div class="img-area">
                    <img alt={props.alt} src={props.img} />
                </div>
                <div class="info">
                    <h4>{props.name}</h4>
                    <p>{props.occupation}</p>
                </div>
            </div>
            <div class="single-review">
                <p> {props.review} </p>
            </div>
            <div class="review-footer">
                <div class="rating">
                    <span class="active">★</span>
                    <span class="active">★</span>
                    <span class="active">★</span>
                    <span class="active">★</span>
                    <span class="active">★</span>
                </div>
            </div>
        </div>
    )
}

export default Testimonial