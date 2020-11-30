import React from 'react';
import image from './streamer.png';

import './Hero.css';

const Hero = () => {
    return (
        <div className="hero-parent">
            <p className="welcome">Welcome to <span>NoSmallStreamer.</span></p>
            <div className="logo">
              <img className="hero-img" src={image} />
            </div>
            <p className="hero-p">A place to discover hard working, growing streamers.</p>
            
        </div>
    )
}

export default Hero;