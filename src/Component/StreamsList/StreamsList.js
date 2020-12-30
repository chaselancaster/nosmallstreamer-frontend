import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { ReactComponent as ThumbsUp } from "./assets/thumbsUp.svg";
import { ReactComponent as ThumbsDown } from "./assets/thumbsDown.svg";
import { ReactComponent as PlusCircle } from './assets/plusCircle.svg';

import "./StreamsList.css";
class StreamsList extends Component {
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
      }
  } catch (err) {
      console.log(err, '<- err in rateStreamer')
  }
  }

  updateDimensions = () => {
    console.log("updateDimenions func");
    this.setState({
      windowWidth: window.innerWidth,
    });
  };

  componentDidMount() {
    console.log("componentDidMount");
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    const { streams } = this.props;
    return (
      // <div className='streams-container'>
      <InfiniteScroll
        className="streams-container"
        dataLength={this.props.streams.length}
        next={this.props.loadMoreStreams}
        hasMore={true}
      >
        {streams.map((stream, index) => {
          return (
            <li key={stream.id} className="stream">
              <img src={this.imageHandler(stream.thumbnail_url)} />
              <div className="stream-info">
                <p className="stream-user-name">
                  {stream.user_name}
                </p>
                <p className="stream-title">{stream.title}</p>
                <p>
                  <span>Viewers: </span>
                  {stream.viewer_count}
                </p>
                <a
                  href={`https://www.twitch.tv/${stream.user_name}`}
                  target="_blank"
                >
                  <button className="view-button">View on Twitch!</button>
                </a>
                <div className="stream-card-buttons">
                  <ThumbsUp onClick={() => this.rateStreamer(stream.user_name, this.upvote)} streamName={stream.user_namee} className="thumbs-up"/>
                  <PlusCircle className="plus-circle"/>
                  <ThumbsDown onClick={() => this.rateStreamer(stream.user_name, this.downvote)} streamName={stream.user_namee} className="thumbs-down"/>
                </div>
                <p className="state-message">{this.state.message}</p>
              </div>
            </li>
          );
        })}
      </InfiniteScroll>
      // </div>
    );
  }
}

export default StreamsList;
