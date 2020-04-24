import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <h5 style={{ padding: "30px 0", textTransform: "uppercase" }}>
          Shop/{this.props.title}
        </h5>
        <div className="hero-wrapper" style={{ position: "relative" }}>
          <div
            className="hero-image"
            style={{ backgroundImage: `url(${this.props.image})` }}
          ></div>
          <div className="hero-image-text">
            <h2>{this.props.title}</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
