import React, { Component } from 'react';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import ReactSignupLoginComponent from 'react-signup-login-component';

const signupWasClickedCallback = (data) => {
  console.log(data);
  alert('Signup callback, see log on the console to see the data.');
};
const loginWasClickedCallback = (data) => {
  console.log(data);
  alert('Login callback, see log on the console to see the data.');
};
const recoverPasswordWasClickedCallback = (data) => {
  console.log(data);
  alert('Recover password callback, see log on the console to see the data.');
};

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron title="Welcome" subtitle="Basic Welcome page with Bootstrap4!" />
        <div className="container">
          <h2>Welcome</h2>
          <div className="login">
            <ReactSignupLoginComponent
                title="Login"
                handleSignup={signupWasClickedCallback}
                handleLogin={loginWasClickedCallback}
                handleRecoverPassword={recoverPasswordWasClickedCallback}
            />
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Home
