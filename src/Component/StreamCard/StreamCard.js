import React, { Component } from 'react'
import { ReactComponent as ThumbsUp } from "../StreamsList/assets/thumbsUp.svg";
import { ReactComponent as ThumbsDown } from "../StreamsList/assets/thumbsDown.svg";
import { ReactComponent as PlusCircle } from '../StreamsList/assets/plusCircle.svg';

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

    rateStreamer = async (name, vote) => {
        try {
        this.setState({
            message: ''
        })
        const sendVote = await fetch(`http://localhost:3001/leaderboard/submit/${name}/${vote}`, {
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
        console.log(err, '<- err in rateStreamer')
    }
    }

    addToWatchLater = async (name) => {
        try {
            console.log(name, '<- name in addToWatchLater')
            const watchLaterCall = await fetch(`http://localhost:3001/users/watchlater/add/${this.props.currentUser._id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        } catch (err) {
          console.log(err, '<- err')
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
                        <ThumbsUp onClick={() => this.rateStreamer(streamer.user_name, this.upvote)} streamName={streamer.user_namee} className="thumbs-up"/>
                        <PlusCircle onClick={() => this.addToWatchLater(streamer.user_name)} className="plus-circle"/>
                        <ThumbsDown onClick={() => this.rateStreamer(streamer.user_name, this.downvote)} streamName={streamer.user_namee} className="thumbs-down"/>
                        </div>
                        <p className="state-message">{this.state.message}</p>
                    </div>
                    </li>
            </div>
        )
    }
}

export default StreamCard
