import React, { Component } from "react";
import { Link } from "react-router-dom";

class PageWrapper extends Component {
  render() {
    return (
      <div>
        <div className="nav-bar">
          <div className="nav-top">
            <div className="guidance">
              <p>Expert Guidance (888) 888-8888</p>
            </div>
            <div className="ship-details">
              <p>Free shiping over $60*</p>
            </div>
            <div className="signin">
              <p> US Dollar(USD)</p>
              <Link to="/signin"> Sign In/Sign Up</Link>
            </div>
          </div>
          <div className="nav-bottom">
            <Link to="/">
              <div className="logo"></div>
            </Link>
            <div className="search-bar">
              <input type="text" placeholder="Search"></input>
              <i class="fas fa-search"></i>
            </div>
            <div className="nav-links">
              <i class="fas fa-shopping-cart"></i>
            </div>
          </div>
        </div>
        <div className="menu">
          <Link to="/bikes">Bikes</Link>
          <Link to="/mountain">Mountain</Link>
          <Link to="/bmx">BMX</Link>
          <Link to="/electric">Electric</Link>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default PageWrapper;
