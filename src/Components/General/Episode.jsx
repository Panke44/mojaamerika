import React, { memo } from 'react';
import PropTypes from 'prop-types';
import OrangeBtn from './OrangeBtn';

const Episode = ({ img, alt, header, link }) => {
    return (
        <div className="episode-card">
            <div className="episode-img">
                <img alt={alt} src={img} loading="lazy" />
            </div>

            <div className="episode-header">
                <h3>{header}</h3>
            </div>

            <div className="center-button">
                <OrangeBtn btnText="Pogledaj" btnLink={link} target="_blank" rel="noopener" />
            </div>
        </div>
    )
};

Episode.propTypes = {
    img: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
};

export default memo(Episode);