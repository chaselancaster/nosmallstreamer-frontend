import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { ReactComponent as ThumbsUp } from "./assets/thumbsUp.svg";
import { ReactComponent as ThumbsDown } from "./assets/thumbsDown.svg";

import "./StreamsList.css";
class StreamsList extends Component {
  state = {
    // 500 x 300
    width: "325x",
    height: "225.jpg",
    windowWidth: 0,
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

  rateStreamer = (name, vote) => {
    // console.log(name)
    if (vote === this.upvote) {
      console.log(name)
    } else if (vote === this.downvote) {
      console.log('downvote')
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
                <div className="thumbs">
                  <ThumbsUp onClick={() => this.rateStreamer(stream.user_name, this.upvote)} streamName={stream.user_namee} className="thumbs-up"/>
                  <ThumbsDown onClick={() => this.rateStreamer(stream.user_name, this.downvote)} streamName={stream.user_namee} className="thumbs-down"/>
                </div>
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
