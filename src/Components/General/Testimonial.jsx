import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Testimonial = ({ name, review, img, occupation, alt, aos, delay }) => {
    return (
        <div className="review-card" data-aos={aos} data-aos-delay={delay}>
            <div className="header-content">
                <div className="img-area">
                    <img alt={alt} src={img} loading="lazy" />
                </div>
                <div className="info">
                    <h4>{name}</h4>
                    <p>{occupation}</p>
                </div>
            </div>
            <div className="single-review">
                <p> {review} </p>
            </div>
            <div className="review-footer">
                <div className="rating" role="img" aria-label="5 out of 5 stars">
                    <span className="active">★</span>
                    <span className="active">★</span>
                    <span className="active">★</span>
                    <span className="active">★</span>
                    <span className="active">★</span>
                </div>
            </div>
        </div>
    )
};

Testimonial.propTypes = {
    name: PropTypes.string.isRequired,
    review: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    occupation: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    alt: PropTypes.string.isRequired,
    aos: PropTypes.string,
    delay: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default memo(Testimonial);