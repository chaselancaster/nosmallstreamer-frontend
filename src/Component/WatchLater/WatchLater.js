import React, { Component } from 'react'
import { ReactComponent as ExternalLink } from "../Leaderboard/assets/externalLink.svg";

import './WatchLater.css';

class WatchLater extends Component {
    render() {
        const { currentUser } = this.props;
        return (
            <div className="watchlater-container">
                <div className="watchlater-header">
                    <h1>Watch Later</h1>
                </div>
                <div className="streamers-wl">
                    {currentUser.watchLater.map((streamer) => {
                        return (
                            <li className="streamer-wl">
                                <div className="name-link-wl">
                                    <p className="streamer-name-wl">{streamer}</p>
                                    <a href={`http://twitch.tv/${streamer}`} target="_blank" rel="noreferrer"><ExternalLink className="external-link-wl"/></a>
                                </div>
                            </li>
                        )
                     })}
                </div>
            </div>
        )
    }
}

export default WatchLater
