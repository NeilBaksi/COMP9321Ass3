import React, { Component } from 'react';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import places from '../components/places.jsx';
import './table.css';

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnData: [
        {col : 'Title'},
        {col : 'Homicide'},
        {col : 'Assault'},
        {col : 'Robbery'},
        {col : 'Theft'},
        {col : 'Homicide'},
        {col : 'Assault'},
        {col : 'Sexual offences'},
        {col : 'Abduction and kidnapping'},
        {col : 'Robbery'},
        {col : 'Blackmail and extortion'},
        {col : 'Harassment, threatening behaviour and private nuisance'},
        {col : 'Other offences against the person'},
        {col : 'Theft'},
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
        <Jumbotron title="Results" subtitle="Your results"/>
        <div className="container">
          <h2>Results</h2>
          <BootstrapTable data={places} striped={true} hover={true} pagination>
            <TableHeaderColumn dataField="id" isKey={true} dataAlign="center" dataSort={true}>ID</TableHeaderColumn>
            {tableHeaderColumns}
          </BootstrapTable>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Results
