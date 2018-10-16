import React, { Component } from 'react';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import places from '../components/places.jsx';
import './table.css';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

var options = {
  title: {
    text: 'Example chart'
  },
  series: [{
    name: 'Crimes',
        colorByPoint: true,
        data: [{
            name: 'Homicide',
            y: 21,
            sliced: true,
            selected: true
        }, {
            name: 'Assault',
            y: 11
        }, {
            name: 'Robbery',
            y: 10
        }, {
            name: 'Theft',
            y: 4
        }, {
            name: 'Homicide',
            y: 4
        }, {
            name: 'Sexual Offence',
            y: 16
        }, {
            name: 'Abduction and kidnapping',
            y: 16
        }, {
            name: 'Robbery',
            y: 12
        }, {
            name: 'Blackmail and extortion',
            y: 12
        }, {
            name: 'Harassment, threatening behaviour and private nuisance',
            y: 6
        }, {
            name: 'Other offences against the person',
            y: 12
        }, {
            name: 'Arson',
            y: 22
        }, {
            name: 'Robbery',
            y: 21
        },{
            name: 'Malicious damage to property',
            y: 30
        },{
            name: 'Drug offences',
            y: 25
        },{
            name: 'Prohibited and regulated weapons offences',
            y: 9
        },{
            name: 'Disorderly conduct',
            y: 1
        },{
            name: 'Betting and gaming offences',
            y: 5
        },{
            name: 'Liquor offences',
            y: 7
        },{
            name: 'Pornography offences',
            y: 11
        },{
            name: 'Prostitution offences',
            y: 20
        },{
            name: 'Against justice procedures',
            y: 14
        },{
            name: 'Transport regulatory offences',
            y: 18
        },{
            name: 'Other offences',
            y: 10
        }]
  }]
}



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
        {col : 'Sexual offences'},
        {col : 'Abduction and kidnapping'},
        {col : 'Robbery'},
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
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
        />
        <Footer />
      </div>
    );
  }
}

export default Results
