import React, { Component } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import StreamCard from '../StreamCard/StreamCard'

import './StreamsList.css'
class StreamsList extends Component {
  render () {
    const { streams } = this.props
    return (
      <InfiniteScroll
        className='streams-container'
        dataLength={this.props.streams.length}
        next={this.props.loadMoreStreams}
        hasMore
      >
        {streams.map((stream, index) => {
          return (
            <StreamCard doSetCurrentUser={this.props.doSetCurrentUser} streamer={stream} />
          )
        })}
      </InfiniteScroll>
    )
  }
}

export default StreamsList
