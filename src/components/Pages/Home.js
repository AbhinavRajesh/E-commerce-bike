import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../Common/Footer";
import YTVideo from "../Common/YTVideo";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="home-container">
          <div className="home-cover-wrapper">
            <div className="home-cover-img"></div>
            <div className="home-cover-text">
              <div className="home-cover-top-text">
                <h1>We have the works</h1>
                <p>It's all fun and game until you catch too much air</p>
                <Link
                  to="/konaprocess"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    padding: "10px 20px",
                    marginLeft: "20px",
                    backgroundColor: "gray",
                    borderRadius: "20px",
                  }}
                >
                  Process 153
                </Link>
              </div>
              <div className="home-cover-bottom-text">
                <p>Take a deeper look at</p>
                <p>
                  <strong>Kona Process 153 CR 27.5"</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="home-content-wrapper">
            <div className="promotion">
              <div className="promotion-top">
                <YTVideo />
              </div>
              <div className="promotion-bottom">
                <div className="promotion-left-container"></div>
                <div className="promotion-right-container"></div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;
