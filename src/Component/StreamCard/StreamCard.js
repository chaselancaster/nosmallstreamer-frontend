import React, { Component } from 'react'
import { ReactComponent as ThumbsUp } from "../StreamsList/assets/thumbsUp.svg";
import { ReactComponent as ThumbsDown } from "../StreamsList/assets/thumbsDown.svg";
import { ReactComponent as PlusCircle } from '../StreamsList/assets/plusCircle.svg';

import './StreamCard.css';
class StreamCard extends Component {
    state = {
        // 500 x 300
        width: "325x",
        height: "225.jpg",
        windowWidth: 0,
        message: ''
      };

    upvote = 'upvote'
    downvote = 'downvote'

    imageHandler = (string) => {
        let array = string.split("{");
        array[1] = this.state.width;
        array[2] = this.state.height;
        let src = array.join("");
        return src;
    };

    rateStreamer = async (name, vote, user_id) => {
        try {
        this.setState({
            message: ''
        })
        console.log(user_id, '<- user_id')
        const sendVote = await fetch(`http://localhost:3001/leaderboard/submit/${name}/${vote}/${user_id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
        })
        const parsedSendVote = await sendVote.json()
        if (parsedSendVote) {
            this.setState({
                message: parsedSendVote.message
                })
            setTimeout(
                () => this.setState({ message: '' }), 
                5000
              );
        }
    } catch (err) {
        // console.log(err, '<- err in rateStreamer')
    }
    }

    addToWatchLater = async (name, user_id) => {
        try {
            const watchLaterCall = await fetch(`http://localhost:3001/users/watchlater/add/${this.props.currentUser._id}/${name}/${user_id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const parsedWatchLaterCall = await watchLaterCall.json()
            // console.log(parsedWatchLaterCall, '<- parsedWatchLaterCall')
            if (parsedWatchLaterCall) {
                this.setState({
                    message: parsedWatchLaterCall.message
                })
                setTimeout(
                    () => this.setState({ message: '' }), 
                    5000
                );
                this.props.doSetCurrentUser(parsedWatchLaterCall.user)
            }
        } catch (err) {
        //   console.log(err, '<- err')
        }
    }

    render() {
        const { streamer } = this.props
        return (
            <div>
                    <li key={streamer.id} className="stream">
                        <img src={this.imageHandler(streamer.thumbnail_url)} />
                        <div className="stream-info">
                            <p className="stream-user-name">
                            {streamer.user_name}
                            </p>
                            <p className="stream-title">{streamer.title}</p>
                            <p>
                            <span>Viewers: </span>
                            {streamer.viewer_count}
                            </p>
                            <a
                            href={`https://www.twitch.tv/${streamer.user_name}`}
                            target="_blank"
                            >
                            <button className="view-button">View on Twitch!</button>
                            </a>
                            <div className="stream-card-buttons">
                            <ThumbsUp onClick={() => this.rateStreamer(streamer.user_name, this.upvote, streamer.user_id)} streamName={streamer.user_name} className="thumbs-up"/>
                            <PlusCircle onClick={() => this.addToWatchLater(streamer.user_name, streamer.user_id)} className="plus-circle"/>
                            <ThumbsDown onClick={() => this.rateStreamer(streamer.user_name, this.downvote, streamer.user_id)} streamName={streamer.user_name} className="thumbs-down"/>
                            </div>
                            <p className="state-message">{this.state.message}</p>
                        </div>
                    </li>
            </div>
        )
    }
}

export default StreamCard
