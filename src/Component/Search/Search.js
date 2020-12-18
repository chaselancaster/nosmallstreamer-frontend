import React, { Component } from 'react';

import StreamsList from '../StreamsList/StreamsList';

import './Search.css';

class Search extends Component {
    state = {
        streams: [],
        game: '',
        gamdId: '',
        viewers: '',
        message: '',
        cursor: '' 
    }

    changeHandler = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    getStreams = async e => {
        try {
        e.preventDefault()
        const streams = await fetch(`http://localhost:3001/api/stream/${this.state.game}/${this.state.viewers}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const parsedStreams = await streams.json()
        console.log(parsedStreams, '<- parsedStreams')
        this.setState({
            streams: parsedStreams.streams,
            cursor: parsedStreams.cursor,
            gameId: parsedStreams.gameId
            // game: '',
            // viewers: ''
        })
        } catch (err) {
            console.log(err, '<-- err in getStreams function')
        }
    }

    loadMoreStreams = async e => {
        const { gameId, views, cursor } = this.state
        e.preventDefault();
        console.log('loadMoreStreams hit')
        try {
            console.log('in try block')
            const streams = await fetch(`http://localhost:3001/api/more/${gameId}/${cursor}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            const parsedLoadMoreStreams = await streams.json()
            console.log(parsedLoadMoreStreams, '<- parsedLoadMoreStreams')
            this.setState({
                streams: [...this.state.streams, ...parsedLoadMoreStreams.moreStreams],
                cursor: parsedLoadMoreStreams.cursor
            })
        } catch (err) {
            console.log(err, '<- err in loadMoreStreams')
        }
    }

    render() {
        const { game , viewers } = this.state;
        return (
            <div className='search-parent'>
                <div className="search-container">
                    <div className="search-info">
                        <h1 className="search-title">Search for streams!</h1>
                        <p>Simply type in a game you want to see and the number of viewers you want to interact with!</p>
                    </div>
                    <div className="search-form-container">
                        <form className="search-form" onSubmit={this.getStreams}>
                            <h3>Game</h3>
                            <input type="text" name="game" placeholder="Game" className="search-input" value={game} onChange={this.changeHandler}/>
                            <h3>Number of Viewers</h3>
                            <input type="number" name="viewers" placeholder="Viewers" className="search-input" value={viewers} onChange={this.changeHandler}/>
                            <button type="submit" className="search-button">Search</button>
                        </form>
                    </div>
                </div>
                <div>
                    <button onClick={this.loadMoreStreams}>Load More</button>
                    <StreamsList streams={this.state.streams} />
                </div>
            </div>
        )
    }
}

export default Search;