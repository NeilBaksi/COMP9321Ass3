import React, { Component } from 'react';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
//import ReactSignupLoginComponent from 'react-signup-login-component';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import places from '../components/places.jsx';
import './table.css';
import './Home.css';

class Home extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    this.props.auth.login();

    return (
      <div>
        <Navbar />
        <Jumbotron title="Welcome" subtitle="Redirecting you to login!" />
        <div className="table-container">
          <h2>Redirecting you to login.</h2>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Home
