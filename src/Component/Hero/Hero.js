import React from 'react';
import image from './streamer.png';

import './Hero.css';

const Hero = () => {
    return (
        <div className="hero-parent">
            <p className="welcome">Welcome to <span>NoSmallStreamer.</span></p>
            <p>A place to discover hard working, growing streamers.</p>
            <div className="logo">
              <img src={image} />
            </div>
        </div>
    )
}

export default Hero;