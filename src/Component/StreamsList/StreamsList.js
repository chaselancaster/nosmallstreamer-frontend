import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { ReactComponent as ThumbsUp } from "./assets/thumbsUp.svg";
import StreamCard from '../StreamCard/StreamCard';

import "./StreamsList.css";
class StreamsList extends Component {
 
  render() {
    const { streams } = this.props;
    return (
      <InfiniteScroll
        className="streams-container"
        dataLength={this.props.streams.length}
        next={this.props.loadMoreStreams}
        hasMore={true}
      >
        {streams.map((stream, index) => {
          return (
            <StreamCard doSetCurrentUser={this.props.doSetCurrentUser} currentUser={this.props.currentUser} streamer={stream} />
          );
        })}
      </InfiniteScroll>
    );
  }
}

export default StreamsList;
