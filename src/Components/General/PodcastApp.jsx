import React from 'react'

const PodcastApp = (props) => {
    return (
        <div class="podcast-app-card">
            <div class="podcast-app-header-content">
                <div class="podcast-app-img-area">
                    <img alt={props.appalt} src={props.appimg} />
                </div>
                <div class="podcast-app-info">
                    <h4>{props.appname}</h4>
                </div>
            </div>
        </div>
    )
}

export default PodcastApp