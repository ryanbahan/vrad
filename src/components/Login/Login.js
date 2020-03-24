import React from 'react';
import './Login.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <main className="login-container">
        <form className="login-form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" />
        <label htmlFor="account-type">Account Type</label>
        <select name="account-type" id="account-type">
        <option value="cat">Vacation</option>
          <option value="dog">Business</option>
          <option value="hamster">Other</option>
        </select>
        <button>Sign Up</button>
        </form>
      </main>
    );
  }
}

export default Login;
