import React, { memo } from 'react';
import PropTypes from 'prop-types';

const PodcastApp = ({ appimg, appname, appalt }) => {
    return (
        <div className="podcast-app-card">
            <div className="podcast-app-header-content">
                <div className="podcast-app-img-area">
                    <img alt={appalt} src={appimg} loading="lazy" />
                </div>
                <div className="podcast-app-info">
                    <h4>{appname}</h4>
                </div>
            </div>
        </div>
    )
};

PodcastApp.propTypes = {
    appimg: PropTypes.string.isRequired,
    appname: PropTypes.string.isRequired,
    appalt: PropTypes.string.isRequired
};

export default memo(PodcastApp);