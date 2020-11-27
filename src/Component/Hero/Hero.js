import React from 'react';
import image from './streamer.png';

import './Hero.css';

const Hero = () => {
    return (
        <div className="hero-parent">
            <div className="text-container">
                <p className="welcome">Welcome to <span>NoSmallStreamer.</span></p>
                <p>A place to discover hard working, growing streamers.</p>
            </div>
            <div className="logo">
              <img src={image} />
            </div>
        </div>
    )
}

export default Hero;