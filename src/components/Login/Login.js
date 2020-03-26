import React from 'react';
import { Link, withRouter } from "react-router-dom";
import AreasContainer from '../AreasContainer/AreasContainer';
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

  updateLoginInfo = (e) => {
    this.setState({[e.target.id]: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSubmit(this.state.name);
    this.props.history.push('/areas');
  }

  render() {
    return (
      <main className="login-container">
        <form className="login-form" onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="input-name" onChange={this.updateLoginInfo} required/>
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" placeholder="input-email" onChange={this.updateLoginInfo} required/>
          <label htmlFor="account-type">Account Type</label>
          <select name="account-type" id="accountType" placeholder="input-type" onChange={this.updateLoginInfo} required>
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
