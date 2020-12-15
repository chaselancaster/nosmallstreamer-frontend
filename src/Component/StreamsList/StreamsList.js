import React, { Component } from 'react'
class StreamsList extends Component {
    state = {
        width: '250x',
        height: '100.jpg'
    }

    imageHandler = string => {
        let array = string.split("{");
        array[1] = this.state.width;
        array[2] = this.state.height;
        let src = array.join("");
        return src;
      };

    render() {
        const { width, height } = this.state
        return (
            <div>
                Streams List component
            </div>
        )
    }
}

export default StreamsList
