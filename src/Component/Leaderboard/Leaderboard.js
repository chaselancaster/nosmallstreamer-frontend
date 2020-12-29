import React, { Component } from 'react'

class Leaderboard extends Component {
    state = {
        streamers: []
    }

    getStreamers = async () => {
        try {
            const streamers = await fetch('http://localhost:3001/leaderboard/get', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
            })
        } catch (err) {
            console.log(err, '<- err in getStreamers in Leaderboard')
        }
    }

    componentDidMount() {
        this.getStreamers()
    }

    render() {
        
        
        return (
            <div>
                <h1>Leaderboard component</h1>
            </div>
        )
    }
}

export default Leaderboard
