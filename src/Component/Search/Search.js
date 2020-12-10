import React, { Component } from 'react';

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

    render() {
        return (
            <div className="search-parent-container">
                <div className="search-info">
                    <h1 className="search-title">Search for streams!</h1>
                    <p>Simply type in a game you want to see and the number of viewers you want to interact with!</p>
                </div>
                <div className="search-form-container">
                    <form className="search-form">
                        <h3>Game:</h3>
                        <input type="text" name="game" placeholder="Game" onChange={this.changeHandler}/>
                        <h3>Number of Viewers:</h3>
                        <input type="number" name="viewers" placeholder="Viewers" onChange={this.changeHandler}/>
                        <button type="submit" className="button">Search</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Search;