import React, { Component } from 'react'
// import { ReactComponent as ExternalLink } from "./assets/externalLink.svg";

import './Leaderboard.css';

class Leaderboard extends Component {
    state = {
        streamers: []
    }

    getStreamers = async () => {
        try {
            const leaderboard = await fetch('https://pacific-forest-27041.herokuapp.com/leaderboard/get', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
            })
            const parsedStreamers = await leaderboard.json()
            // console.log(parsedStreamers, '<- parsedStreamers')
            if (parsedStreamers) {
                let streamers = parsedStreamers.streamers.sort((a, b) => a.score - b.score).reverse().filter(s => s.score > 0)
                this.setState({
                    streamers: streamers
                })
            }
        } catch (err) {
            // console.log(err, '<- err in getStreamers in Leaderboard')
        }
    }

    componentDidMount() {
        console.log('componentDidMount')
        this.getStreamers()
        // console.log(this.state.streamers, '<- this.state.streamers')
    }

    render() {
        const { streamers } = this.state;
        return (
            <div className="leaderboard-container">
                <div className="leaderboard-header">
                    <h1>Community Leaderboard</h1>
                </div>
                <div className="streamers">
                    {streamers.map((streamer, index) => {
                        return (
                            <li className="streamer">
                                <div className="streamer-info">
                                    <div className="image-name">
                                        <img src={streamer.profile_image_url} />
                                        <p className="streamer-name">{streamer.name}</p>
                                    </div>  
                                    <div className="streamer-right-side">
                                        <div className="rank-link">
                                            <p className="streamer-rank">Rank: {index + 1}</p>
                                            {/* <a href={`http://twitch.tv/${streamer.name}`} target="_blank" rel="noreferrer"><ExternalLink className="external-link"/></a> */}
                                            <a href={`http://twitch.tv/${streamer.name}`} target="_blank" rel="noreferrer">
                                                <button className="view">View</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        )
                     })}
                </div>
            </div>
        )
    }
}

export default Leaderboard
