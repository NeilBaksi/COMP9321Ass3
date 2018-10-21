import React, { Component } from 'react';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import ReactSignupLoginComponent from 'react-signup-login-component';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import places from '../components/places.jsx';
import './table.css';
import './Home.css';
import Auth from '../components/Auth.js';

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

  constructor(props) {
    super(props);
    this.state = {
      columnData: [
        {col : 'Title'},
        {col : 'Homicide'},
        {col : 'Assault'},
        {col : 'Robbery'},
        {col : 'Theft'},
        {col : 'Sexual offences'},
        {col : 'Abduction and kidnapping'},
        {col : 'Blackmail and extortion'},
        {col : 'Harassment, threatening behaviour and private nuisance'},
        {col : 'Other offences against the person'},
        {col : 'Arson'},
        {col : 'Malicious damage to property'},
        {col : 'Drug offences'},
        {col : 'Prohibited and regulated weapons offences'},
        {col : 'Disorderly conduct'},
        {col : 'Betting and gaming offences'},
        {col : 'Liquor offences'},
        {col : 'Pornography offences'},
        {col : 'Prostitution offences'},
        {col : 'Against justice procedures'},
        {col : 'Transport regulatory offences'},
        {col : 'Other offences'},
      ],
    }
  }

  render() {
    this.props.auth.login();

    const tableHeaderColumns = this.state.columnData.map((column) => (
      <TableHeaderColumn 
        dataField={column.col} 
        dataSort={true}
        dataAlign='center'
        width='150'
      >
        {column.col}
      </TableHeaderColumn>
    ))


    return (
      <div>
        <Navbar />
        <Jumbotron title="Welcome" subtitle="Basic Welcome page with Bootstrap4!" />
        <div className="table-container">
          <h2>Crime Statistics for Sydney suburbs</h2>
          <BootstrapTable data={places} striped={true} hover={true} pagination>
            <TableHeaderColumn dataField="id" isKey={true} dataAlign="center" dataSort={true}>ID</TableHeaderColumn>
            {tableHeaderColumns}
          </BootstrapTable>
          {/*<div className="login">
            <ReactSignupLoginComponent
                title="Login"
                handleSignup={signupWasClickedCallback}
                handleLogin={loginWasClickedCallback}
                handleRecoverPassword={recoverPasswordWasClickedCallback}
            />
          </div>*/}
        </div>

        <Footer />
      </div>
    );
  }
}

export default Home
