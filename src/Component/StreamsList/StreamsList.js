import React, { Component } from 'react'

import './StreamsList.css';
class StreamsList extends Component {
    state = {
        width: '325x',
        height: '225.jpg'
    }

    imageHandler = string => {
        let array = string.split("{");
        array[1] = this.state.width;
        array[2] = this.state.height;
        let src = array.join("");
        return src;
      };

    render() {
        const { streams } = this.props
        return (
            <div className='streams-container'>
                {streams.map(stream => {
                    return (
                        <li className='stream'>
                            <img src={this.imageHandler(stream.thumbnail_url)} />
                            <div className='stream-info'>
                                <p><span>Streamer: </span>{stream.user_name}</p>
                                <p>{stream.title}</p>
                                <p><span>Viewers: </span>{stream.viewer_count}</p>
                                <a href={`https://www.twitch.tv/${stream.user_name}`} target='_blank'><button className='view-button'>View on Twitch!</button></a>
                            </div>
                        </li>
                    )
                })}
            </div>
        )
    }
}

export default StreamsList
