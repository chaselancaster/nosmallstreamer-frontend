import React from 'react';

import streamerImg from './assets/streamer.png';
import handshakeImg from './assets/hand-shake.png';
import magnifyingImg from './assets/magnifying.png';
import twitchImg from './assets/twitch.png';

import './Landing.css';

const Landing = () => {
    return (
    <div>
        // Hero Section
        <div className="hero-parent">
            <p className="welcome">Welcome to <span>NoSmallStreamer.</span></p>
            <div className="hero-logo">
              <img className="hero-img" src={streamerImg} />
            </div>
            <p className="hero-p">A place to discover hard working, growing streamers.</p>
        </div>
        // Info Section
        <div className="info-parent">
            <div className="info">
                <img></img>
                <p></p>
            </div>
            <div className="info"></div>
            <div className="info"></div>
        </div>
    </div>
      
    )
}

export default Landing;