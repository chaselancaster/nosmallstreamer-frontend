import React, { Component } from 'react'

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
            console.log(parsedStreamers, '<- parsedStreamers')
            if (parsedStreamers) {
                this.setState({
                    streamers: parsedStreamers.streamers
                })
            }
        } catch (err) {
            console.log(err, '<- err in getStreamers in Leaderboard')
        }
    }

    componentDidMount() {
        console.log('componentDidMount')
        this.getStreamers()
        console.log(this.state.streamers, '<- this.state.streamers')
    }

    render() {
        const { streamers } = this.state;
        return (
            <div className="leaderboard-container">
                <div className="leaderboard-header">
                    <h1>Community Leaderboard</h1>
                    <p>These are community voted streamers to check out!</p>
                </div>
                <div className="streamers">
                    {streamers.map((streamer) => {
                        return (
                            <li className="streamer">
                                <p>{streamer.name}</p>
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
