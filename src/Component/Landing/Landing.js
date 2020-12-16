import React from 'react';
import { Link } from 'react-router-dom';

import streamerImg from './assets/streamer.png';
import handshakeImg from './assets/hand-shake.png';
import magnifyingImg from './assets/magnifying.png';
import twitchImg from './assets/twitch.png';

import * as routes from "../../constants/routes";

import './Landing.css';

const Landing = () => {
    return (
    <div>
        {/* Hero Section */}
        <div className="hero-parent">
            <p className="welcome">Welcome to <span className='nss'>NoSmallStreamer.</span></p>
            <div className="hero-logo">
              <img className="hero-img" src={streamerImg} alt="streamer"/>
            </div>
            <p className="hero-p">A place to discover hard working, growing streamers.</p>
        </div>
        {/* Info Section */}
        <div className="info-parent">
            <div className="info-img-container">
                <img className="info-img" src={magnifyingImg} alt="magnifying glass"/>
                <img className="info-img" src={handshakeImg} alt="handshake"/>
                <img className="info-img" src={twitchImg} alt="twitch logo"/>
            </div>
            <div className="info">
                <p>Find streamers hidden in popular categories!</p>
                <p>Help new streamers grow!</p>
                <p>Direct links to a user's channel!</p>
            </div>
        </div>
        {/* Get Started Section */}
        <div className="get-started-parent">
            <p>Ready to get started?</p>
            <Link exact to={routes.REGISTER}><button className="button register-now-landing">Register Now!</button></Link>
            <Link exact to={routes.LOGIN} className='already-registered'>Already registered? Log-in here!</Link>
        </div>
    </div>
      
    )
}

export default Landing;