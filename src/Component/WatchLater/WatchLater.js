import React, { Component } from 'react'
import { ReactComponent as ExternalLink } from "../Leaderboard/assets/externalLink.svg";
import { ReactComponent as Trash} from '../../assets/trash.svg';
import { Link } from 'react-router-dom';

import './WatchLater.css';

class WatchLater extends Component {

    deleteStreamer =  async (streamer) => {
        // console.log('deleteStreamer func hit')
        try {
            const deleteStreamerCall = await fetch(`http://localhost:3001/users/watchlater/${this.props.currentUser._id}/${streamer}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const parsedCall = await deleteStreamerCall.json()
            // console.log(parsedCall, '<- parsedCall')
            if (parsedCall) {
                this.props.doSetCurrentUser(parsedCall.user)
            }
        } catch (err) {
            // console.log(err, '<- err in deleteStreamer func')
        }
    }

    render() {
        const { currentUser } = this.props;
        return (
            <div>
            {currentUser ? (
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
                                        <div className="buttons-wl">
                                            <a href={`http://twitch.tv/${streamer}`} target="_blank" rel="noreferrer"><ExternalLink className="external-link-wl"/></a>
                                            <Trash onClick={() => this.deleteStreamer(streamer)} className="trash-wl"/>
                                        </div>
                                    </div>
                                    {/* <div className="trash-container">
                                        
                                    </div> */}
                                </li>
                            )
                        })}
                    </div>
                 </div>
            ) : (
                <div className="loggedout-wl">
                    <h1>Please sign in or register to view you watch later list!</h1>
                    <Link to='login' className="profile-link"><button className='button'>Login</button></Link>
                    <Link to='register' className="profile-link"><button className='button'>Register</button></Link>
                </div>
            )}
                
            </div>
            
        )
    }
}

export default WatchLater
