import React, { Component } from 'react';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import './table.css';
import singleResult from '../components/singleResult.jsx';

var options = {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Example Graph'
  },
  subtitle: {
    text: 'Something '
  },
  xAxis: {
    categories: [
      'Current Crime Count',
      'Expected Crime Count'
    ],
    crosshair: true
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Count'
    }
  },
  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
    footerFormat: '</table>',
    shared: true,
    useHTML: true
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0
    }
  },
  series: [{
    name: 'Homicide',
    data: [49.9, 69]

  }, {
    name: 'Assault',
    data: [83.6, 69]

  }, {
    name: 'Robbery',
    data: [48.9, 69]

  }, {
    name: 'Theft',
    data: [42.4, 69]

  },{
    name: 'Sexual Offence',
    data: [49.9, 69]

  }, {
    name: 'Abduction and kidnapping',
    data: [83.6, 69]

  }, {
    name: 'Blackmail and extortion',
    data: [48.9, 69]

  }, {
    name: 'Harassment, threatening behaviour and private nuisance',
    data: [42.4, 69]

  },{
    name: 'Other offences against the person',
    data: [49.9, 69]

  }, {
    name: 'Arson',
    data: [83.6, 69]

  }, {
    name: 'Malicious damage to property',
    data: [48.9, 69]

  }, {
    name: 'Drug offences',
    data: [42.4, 69]

  },{
    name: 'Prohibited and regulated weapons offences',
    data: [49.9, 69]

  }, {
    name: 'Disorderly conduct',
    data: [83.6, 69]

  }, {
    name: 'Betting and gaming offences',
    data: [48.9, 69]

  }, {
    name: 'Liquor offences',
    data: [42.4, 69]

  },{
    name: 'Pornography offences',
    data: [42.4, 69]

  },{
    name: 'Prostitution offences',
    data: [42.4, 69]

  },{
    name: 'Against justice procedures',
    data: [42.4, 69]

  },{
    name: 'Transport regulatory offences',
    data: [42.4, 69]

  },{
    name: 'Other offences',
    data: [42.4, 69]

  }]
}



class Results extends Component {

  constructor(props) {
    super(props);
    this.state = {
      columnData: [
        {col : 'Crime'},
        {col : 'Jan 2012'},
        {col : 'Feb 2012'},
        {col : 'Mar 2012'},
        {col : 'Apr 2012'},
        {col : 'May 2012'},
        {col : 'Jun 2012'},
        {col : 'Jul 2012'},
        {col : 'Aug 2012'},
        {col : 'Sep 2012'},
        {col : 'Oct 2012'},
        {col : 'Nov 2012'},
        {col : 'Dec 2012'},
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
          <BootstrapTable data={singleResult} striped={true} hover={true} pagination>
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
