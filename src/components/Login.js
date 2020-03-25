import React, { Component } from 'react';
import { NavigationBar } from './NavigationBar';
export default class Login extends Component {
  render() {
    return (
      <div className="login_container">
        <NavigationBar/>
        <div className="login_header">
          <h1>Welcome Valued Customer!</h1>
          <p>Our login is ONLY accessible to current clients whom  have been given a Referral key to.</p>
        </div>
        <form className="login_form">
          <input
            type="text"
            name="client_key"
            placeholder="Enter Referral Key"
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
