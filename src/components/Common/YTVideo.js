import React, { Component } from "react";
import ReactPlayer from "react-player";

class YTVideo extends Component {
  render() {
    return (
      <div>
        <ReactPlayer
          url={this.props.url}
          width={this.props.width}
          height="500px"
        />
      </div>
    );
  }
}

export default YTVideo;
