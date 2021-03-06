import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner';
import UserContext from '../../UserContext';

import StreamsList from '../StreamsList/StreamsList';

import './Search.css';

import * as routes from '../../constants/routes';
class Search extends Component {

    static contextType = UserContext

    state = {
        streams: [],
        game: '',
        gamdId: '',
        viewers: '',
        message: '',
        cursor: '',
        loading: false
    }

    changeHandler = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    getStreams = async e => {
        e.preventDefault()
        this.setState({
            message: ''
        })
        if (this.state.game === '' && this.state.viewers === '') {
            this.setState({
                message: 'Please fill out both fields!'
            })
            return
        }
        if (this.state.game === '') {
            this.setState({
                message: 'Game can not be blank!'
            })
            return
        } else if (this.state.viewers === '') {
            this.setState({
                message: 'Viewers can not be blank!'
            })
            return
        } else if (this.state.game === '' && this.state.viewers === '') {
            this.setState({
                message: 'Both fields must be filled out!!'
            })
            return
        }
        try {
            this.setState({
                message: '',
                loading: true
            })
            const streams = await fetch(`${routes.HEROKU}/api/stream/${this.state.game}/${this.state.viewers}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${this.props.userToken}`,
                    'Content-Type': 'application/json'
                }
            })
            const parsedStreams = await streams.json()
            this.setState({
                streams: parsedStreams.streams,
                cursor: parsedStreams.cursor,
                gameId: parsedStreams.gameId,
                loading: false,
                message: parsedStreams.message
            })
        } catch (err) {
            this.setState({
                message: 'Unable to find streams. Please try a different search.'
            })
        }
    }

    loadMoreStreams = async e => {
        const { gameId, cursor } = this.state
        try {
            const streams = await fetch(`${routes.HEROKU}/api/more/${gameId}/${cursor}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            const parsedLoadMoreStreams = await streams.json()
            this.setState({
                streams: [...this.state.streams, ...parsedLoadMoreStreams.moreStreams],
                cursor: parsedLoadMoreStreams.cursor
            })
        } catch (err) {
            this.setState({
                message: 'Unable to find streams. Please try a different search.'
            })
        }
    }

    checkForUser = (user) => {
        const { game , viewers, loading } = this.state;
        if (user) {
            return (
                <div>
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
                        <p>{this.state.message}</p>
                        {loading ? (
                            <Loader
                                type="TailSpin"
                                color="white"
                                height={100}
                                width={100}
                            />
                            ) : (
                                <div></div>
                        )}
                    </div>
                    <div className='streams-list-parent'>
                        <StreamsList doSetCurrentUser={this.props.doSetCurrentUser} streams={this.state.streams} loadMoreStreams={this.loadMoreStreams}/>
                    </div>
            </div>
            ) 
        } else {
            return (
                <div className='profile-loggedout'>
                        <h1>Please sign in or register to access the search feature!</h1>
                        <Link to='login' className="profile-link"><button className='button'>Login</button></Link>
                        <Link to='register' className="profile-link"><button className='button'>Register</button></Link>
                </div>
            )
        }
    }

    render() {
        const { game , viewers, loading } = this.state;
        const user = this.context
        return (
            <div className="search-parent">
                {this.checkForUser(user)}
            </div>
        )
    }
}

export default Search;