import { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../UserContext';

import streamerImg from '../../assets/streamer.png';
import handshakeImg from '../../assets/hand-shake.png';
import magnifyingImg from '../../assets/magnifying.png';
import twitchImg from '../../assets/twitch.png';

import * as routes from "../../constants/routes";

import './Landing.css';

const checkCurrentUser = (user) => {
    if (user) {
        return (
            <div className="get-started-parent">
                <p>Ready to get started?</p>
                <Link exact to={routes.SEARCH}><button className="button register-now-landing">Find streamers!</button></Link>
            </div>
        )
    } else {
        return (
            <div className="get-started-parent">
                <p>Ready to get started?</p>
                <Link exact to={routes.REGISTER}><button className="button register-now-landing">Register Now!</button></Link>
                <Link exact to={routes.LOGIN} className='already-registered'>Already registered? Log-in here!</Link>
            </div>
        )
    }
}

const Landing = () => {

    const user = useContext(UserContext)

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
                <div className='info-container-2'>
                    <div className='info2'>
                        <img className="info-img" src={magnifyingImg} alt="magnifying glass"/>
                        <p>Find streamers hidden in popular categories!</p>
                    </div>
                    <div className='info2'>
                        <img className="info-img" src={handshakeImg} alt="handshake"/>
                        <p>Help new streamers grow!</p>
                    </div>
                    <div className='info2'>
                        <img className="info-img" src={twitchImg} alt="twitch logo"/>
                        <p>Direct links to a user's channel!</p>
                    </div>
                </div>
            {/* Get Started Section */}
            {checkCurrentUser(user)}
        </div>
    )
}

export default Landing;