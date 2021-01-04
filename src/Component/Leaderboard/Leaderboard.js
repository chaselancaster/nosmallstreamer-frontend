import React, { Component } from 'react'
import { ReactComponent as ExternalLink } from "./assets/externalLink.svg";

import './Leaderboard.css';

class Leaderboard extends Component {
    state = {
        streamers: []
    }

    getStreamers = async () => {
        try {
            const leaderboard = await fetch('http://localhost:3001/leaderboard/get', {
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
                    {streamers.map((streamer) => {
                        return (
                            <li className="streamer">
                                <div className="name-link">
                                    <p className="streamer-name">{streamer.name}</p>
                                    <a href={`http://twitch.tv/${streamer.name}`} target="_blank"><ExternalLink className="external-link"/></a>
                                </div>
                                
                                <p>{streamer.score}</p>
                            </li>
                        )
                     })}
                </div>
            </div>
        )
    }
}

export default Leaderboard
