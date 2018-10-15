import React, { Component } from 'react';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import options from '../components/places.jsx';

var tableData = [{
      id: 1,
      name: "Item name 1",
      price: 100
  },{
      id: 2,
      name: "Item name 2",
      price: 200
  },
];


class Results extends Component {
  render() {

    return (
      <div>
        <Navbar />
        <Jumbotron title="Results" subtitle="Your results"/>
        <div className="container">
          <h2>Results</h2>
          <BootstrapTable data={options} striped={true} hover={true} pagination>
            <TableHeaderColumn dataField="id" isKey={true} dataAlign="center" dataSort={true}>Product ID</TableHeaderColumn>
            <TableHeaderColumn dataField="name" dataSort={true}>Product Name</TableHeaderColumn>
            <TableHeaderColumn dataField="state_code" dataSort={true}>State Code</TableHeaderColumn>
          </BootstrapTable>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Results
