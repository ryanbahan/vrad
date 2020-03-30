import React from 'react';
import { withRouter } from "react-router-dom";
import './Login.scss';

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
    this.props.handleSubmit(this.state.name, this.state.accountType);
    this.props.history.push('/areas');
  }

  render() {
    return (
      <main className="login-container">
        <form className="login-form" onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="input-name" onChange={this.updateName} required/>
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" placeholder="input-email" onChange={this.updateEmail} required/>
        <label htmlFor="account-type">Account Type</label>
        <select name="account-type" id="account-type" placeholder="input-type" onChange={this.updateAccountType} required>
        <option value="vacation">Vacation</option>
          <option value="business">Business</option>
          <option value="other">Other</option>
        </select>
          <button type="submit">Sign Up</button>
        </form>
      </main>
    );
  }
}

export default withRouter(Login);
