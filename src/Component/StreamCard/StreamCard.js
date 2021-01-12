import React, { Component } from 'react'
import { ReactComponent as ThumbsUp } from "../../assets/thumbsUp.svg";
import { ReactComponent as ThumbsDown } from "../../assets/thumbsDown.svg";
import { ReactComponent as PlusCircle } from '../../assets/plusCircle.svg';
import UserContext from '../../UserContext';

import './StreamCard.css';

import * as routes from '../../constants/routes';
import * as card from '../../constants/card';
class StreamCard extends Component {

    static contextType = UserContext

    state = {
        width: "325x",
        height: "225.jpg",
        message: ''
      };

    upvote = 'upvote'
    downvote = 'downvote'

    imageHandler = (string) => {
        let array = string.split("{");
        array[1] = card.WIDTH;
        array[2] = card.HEIGHT;
        let src = array.join("");
        return src;
    };

    rateStreamer = async (name, vote, user_id) => {
        try {
        this.setState({
            message: ''
        })
        console.log(user_id, '<- user_id')
        const sendVote = await fetch(`${routes.HEROKU}/leaderboard/submit/${name}/${vote}/${user_id}`, {
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
        const user = this.context
        try {
            const watchLaterCall = await fetch(`${routes.HEROKU}/users/watchlater/add/${user._id}/${name}/${user_id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const parsedWatchLaterCall = await watchLaterCall.json()
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
