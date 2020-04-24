import React, { Component } from "react";
import Header from "../Common/Header";
import image from "../assets/img/bikes-bg.jpg";

class Bikes extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <Header title="bikes" image={image} />
          <div className="container-div">
            <div className="container-left">
              <div className="shortcut">
                <h3>Short Cuts</h3>
                <br />
                <h3>Category</h3>
                <div className="bikes-category">
                  <div className="bike-category">
                    <h4>Mountain</h4>
                    <div className="category-dropdown">
                      <ul>
                        <li>Temporary</li>
                        <li>Temporary</li>
                        <li>Temporary</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bike-category">
                    <h4>Mountain</h4>
                    <div className="category-dropdown">
                      <ul>
                        <li>Temporary</li>
                        <li>Temporary</li>
                        <li>Temporary</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bike-category">
                    <h4>Mountain</h4>
                    <div className="category-dropdown">
                      <ul>
                        <li>Temporary</li>
                        <li>Temporary</li>
                        <li>Temporary</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <p>
                  Bikes manufactured and sold by Jensonusa are guaranteed for
                  quality and performance. We stand by our bikes and aim to
                  produce the highest quality products. Our bikes are made for
                  riders, by riders.
                </p>
              </div>
            </div>
            <div className="container-right">
              <div className="bike-type-container">
                <div className="bike-type-name">
                  <h3>Mountain</h3>
                  <div className="bike-model-wrapper">
                    {/* Add the details of the bikes of the bike-type-name */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Bikes;
