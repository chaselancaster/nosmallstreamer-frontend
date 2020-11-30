import React from 'react';
import image from './streamer.png';

import './Landing.css';

const Landing = () => {
    return (
    <div>
        // Hero Section
        <div className="hero-parent">
            <p className="welcome">Welcome to <span>NoSmallStreamer.</span></p>
            <div className="hero-logo">
              <img className="hero-img" src={image} />
            </div>
            <p className="hero-p">A place to discover hard working, growing streamers.</p>
        </div>
        // Info Section
        <div className="info-parent">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
      
    )
}

export default Landing;