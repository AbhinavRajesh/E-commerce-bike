import React, { Component } from "react";
import image from "../assets/img/GearAdvisors.jpg";
import logo from "../assets/img/cog.png";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
          <img
            className="cog"
            src={logo}
            alt="logo"
            style={{
              height: "60px",
              position: "absolute",
              top: "-30px",
              left: "50%",
            }}
          />
          <div className="footer-top">
            <div className="footer-left">
              <div className="advisor-img">
                <img src={image} alt="GearAdvisors" />
              </div>
              <div className="advisor-text">
                <h1>NEED GEAR ADVICE?</h1>
                <p>Our Gear Advisors are Ready to Help</p>
                <br />
                <div className="contact-details">
                  <i class="fas fa-phone-alt"></i>
                  <p>888-880-3811</p>
                </div>
              </div>
            </div>
            <div className="footer-right">
              <h1>EMAIL SPECIALS</h1>
              <p>Sign up for our weekly newsletter delivered via email.</p>
              <div class="newsletter">
                <form action="#">
                  <input type="text" placeholder="Enter your email here" />
                  <input type="submit" value="Sign Up" />
                </form>
              </div>
            </div>
          </div>
          <div className="footer-mid">
            <div className="features">
              <div className="feature">
                <h2>SHOP WITH</h2>
                <h1>CONFIDENCE</h1>
                <p>
                  <i>TrustPilot Score: 4.7/5</i>
                </p>
              </div>
              <div className="feature">
                <h1>PREMIER</h1>
                <h1>BRANDS</h1>
              </div>
              <div className="feature">
                <h1>FREE OVER $60*</h1>
                <h1>SHIPPING</h1>
              </div>
              <div className="feature">
                <h1 style={{ fontWeight: "600" }}>365 DAY</h1>
                <h1>RETURNS</h1>
              </div>
            </div>
          </div>
          <div className="footer-bottom"></div>
        </footer>
      </div>
    );
  }
}

export default Footer;
