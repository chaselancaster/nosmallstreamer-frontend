import React, { Component } from 'react'
import Loader from 'react-loader-spinner';

import './Leaderboard.css';

import * as routes from '../../constants/routes';

class Leaderboard extends Component {
    state = {
        streamers: [],
        loading: true,
        message: ''
    }

    getStreamers = async () => {
        try {
            const leaderboard = await fetch(`${routes.HEROKU}/leaderboard/get`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
            })
            const parsedStreamers = await leaderboard.json()
            if (parsedStreamers) {
                let streamers = parsedStreamers.streamers.sort((a, b) => a.score - b.score).reverse().filter(s => s.score > 0)
                this.setState({
                    streamers: streamers,
                    loading: false
                })
            }
        } catch (err) {
            this.setState({
                message: 'Error loading leaderboard. Please refresh the page.'
            })
        }
    }

    checkForLoading = () => {
        if (this.state.loading) {
            return (
                <Loader
                    type="TailSpin"
                    color="white"
                    height={100}
                    width={100}
                    className="spinner"
                />
            )
        } else {
            return (
                <div></div>
            )
        }
    }

    componentDidMount() {
        this.getStreamers()
    }

    render() {
        const { streamers, loading, message } = this.state;
        return (
            <div className="leaderboard-container">
                <div className="leaderboard-header">
                    <h1>Community Leaderboard</h1>
                </div>
                {message}
                <div className="streamers">
                {this.checkForLoading}
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
