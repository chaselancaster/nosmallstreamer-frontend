import React, { Component } from 'react';

import StreamsList from '../StreamsList/StreamsList';

import './Search.css';

class Search extends Component {
    state = {
        streams: [],
        game: '',
        viewers: '',
        message: ''
    }

    changeHandler = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    getStreams = async e => {
        try {
        e.preventDefault()
        const streams = await fetch(`http://localhost:3001/api/${this.state.game}/${this.state.viewers}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const parsedStreams = await streams.json()
        console.log(parsedStreams, '<- parsedStreams')
        this.setState({
            streams: parsedStreams.streams
        })
        } catch (err) {
            console.log(err, '<-- err in getStreams function')
        }
    }

    render() {
        return (
            <div>
                <div className="search-parent-container">
                    <div className="search-info">
                        <h1 className="search-title">Search for streams!</h1>
                        <p>Simply type in a game you want to see and the number of viewers you want to interact with!</p>
                    </div>
                    <div className="search-form-container">
                        <form className="search-form" onSubmit={this.getStreams}>
                            <h3>Game:</h3>
                            <input type="text" name="game" placeholder="Game" onChange={this.changeHandler}/>
                            <h3>Number of Viewers:</h3>
                            <input type="number" name="viewers" placeholder="Viewers" onChange={this.changeHandler}/>
                            <button type="submit" className="button">Search</button>
                        </form>
                    </div>
                </div>
                <div>
                    <StreamsList streams={this.state.streams} />
                </div>
            </div>
        )
    }
}

export default Search;