import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { ReactComponent as ThumbsUp } from "./assets/thumbsUp.svg";
import { ReactComponent as ThumbsDown } from "./assets/thumbsDown.svg";
import { ReactComponent as PlusCircle } from './assets/plusCircle.svg';
import StreamCard from '../StreamCard/StreamCard';

import "./StreamsList.css";
class StreamsList extends Component {
 
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
            <StreamCard currentUser={this.props.currentUser} streamer={stream} />
          );
        })}
      </InfiniteScroll>
      // </div>
    );
  }
}

export default StreamsList;
