import React from 'react';
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
  }

  render() {
    return (
      <main className="login-container">
        <form className="login-form" onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" onChange={this.updateName} required/>
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" onChange={this.updateEmail} required/>
        <label htmlFor="account-type">Account Type</label>
        <select name="account-type" id="account-type" onChange={this.updateAccountType} required>
        <option value="vacation">Vacation</option>
          <option value="business">Business</option>
          <option value="other">Other</option>
        </select>
        <button>Sign Up</button>
        </form>
      </main>
    );
  }
}

export default Login;
