import React from 'react';
import { withRouter } from "react-router-dom";
import './Login.scss';
import PropTypes from 'prop-types';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      name: null,
      email: null,
      accountType: "vacation"
    }
  }

  updateName = (e) => {
    this.setState({name: e.target.value});
  }

  updateEmail = (e) => {
    this.setState({email: e.target.value});
  }

  updateAccountType = (e) => {
    this.setState({accountType: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSubmit(this.state);
    this.props.history.push('/areas');
  }

  render() {
    return (
      <main className="login-container">
        <form className="login-form" onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="name..." onChange={this.updateName} required/>
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" placeholder="email..." onChange={this.updateEmail} required/>
        <label htmlFor="account-type">Account Type</label>
        <select name="account-type" id="account-type" placeholder="account-type" onChange={this.updateAccountType} required>
          <option value="vacation">Vacation</option>
          <option value="business">Business</option>
          <option value="other">Other</option>
        </select>
          <button type="submit" placeholder="submit">Sign-Up</button>
        </form>
      </main>
    );
  }
}

Login.propTypes = {
  handleSubmit: PropTypes.func
}

export default withRouter(Login);
