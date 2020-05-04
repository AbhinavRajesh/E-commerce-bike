import React, { Component } from "react";

class CreateAccount extends Component {
  render() {
    return (
      <div>
        <div className="create-acc-wrapper">
          <div className="create-container">
            <h3>Create an Account</h3>
            <p>This will allow you to:</p>
            <ul>
              <li>Save billing and shiping details for faster checkout.</li>
              <li>
                Complete your rider profile to recieve JensonUSA news and
                updates.
              </li>
              <li>Archive purchases and order history.</li>
              <li>Register purchased bikes and warranties.</li>
            </ul>
            <div className="ca-form">
              <form>
                <div className="ca-form-part">
                  <label htmlFor="first-name">First Name</label>
                  <input type="text" id="first-name" required />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateAccount;
