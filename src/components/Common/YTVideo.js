import React, { Component } from "react";
import ReactPlayer from "react-player";

class YTVideo extends Component {
  render() {
    return (
      <div>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=fVeC9nUSRw8"
          width="1300px"
          height="500px"
        />
      </div>
    );
  }
}

export default YTVideo;
