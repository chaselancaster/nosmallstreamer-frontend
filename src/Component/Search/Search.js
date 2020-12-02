import React, { Component } from 'react';

import './Search.css';

class Search extends Component {
    render() {
        return (
            <div>
                <div className="search-info">
                    <h1>Search for streams!</h1>
                    <p>Simply type in a game you want to see and the number of viewers you want to interact with!</p>
                </div>
                <div className="form-container">
                    <form>
                        <h3>Game:</h3>
                        <input type="text" placeholder="Game" />
                        <h3>Number of Viewers:</h3>
                        <input type="number" placeholder="Viewers" />
                        <button type="submit">Search</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Search;