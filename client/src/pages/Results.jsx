import React, { Component } from 'react';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import './table.css';
import places from '../components/places.jsx';
import singleResult from '../components/singleResult.jsx';
//import graphData from '../components/graphData.jsx';

var temp = 4;
class Results extends Component {


  constructor(props) {
    super(props);
    this.state = {
      id: 4,
      currentLocation: places[temp].Title,
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
      auth: this.props.auth,
      options : {

      },
    }

      this.setfromcache = this.setfromcache.bind(this);
  }

  componentWillMount() {
    this.setfromcache();
    this.setState({currentLocation: places[temp].Title})
  }

  setfromcache(){
    let bs = localStorage.getItem('myData');
    temp = bs;  
    this.setState({ id: temp, options: {
      chart: {
          type: 'column'
        },
        title: {
          text: 'Crime Stats'
        },
        subtitle: {
          text: 'A comparison between historical and predictive data'
        },
        xAxis: {
          categories: [
            'Expected Crime Count',
            'Current Crime Count'
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
            '<td style="padding:0"><b>{point.y:.2f}</b></td></tr>',
          footerFormat: '</table>',
          shared: true,
          useHTML: true
        },
        plotOptions: {
          column: {
            pointPadding: 0.4,
            borderWidth: 0
          }
        },
      series: [
      {
            name: 'Homicide',
            data: [places[temp]['Homicide_predicted']*1, places[temp]['Homicide_historical']*1]

          }, {
            name: 'Assault',
            data: [places[temp]['Assault_predicted']*1, places[temp]['Assault_historical']*1]

          }, {
            name: 'Robbery',
            data: [places[temp]['Robbery_predicted']*1, places[temp]['Robbery_historical']*1]

          }, {
            name: 'Theft',
            data: [places[temp]['Theft_predicted']*1, places[temp]['Theft_historical']*1]

          },{
            name: 'Sexual Offence',
            data: [places[temp]['Sexual Offence_predicted']*1, places[temp]['Sexual Offence_historical']*1]

          }, {
            name: 'Abduction and kidnapping',
            data: [places[temp]['Abduction and kidnapping_predicted']*1, places[temp]['Abduction and kidnapping_historical']*1]

          }, {
            name: 'Blackmail and extortion',
            data: [places[temp]['Blackmail and extortion_predicted']*1, places[temp]['Blackmail and extortion_historical']*1]

          }, {
            name: 'Harassment, threatening behaviour and private nuisance',
            data: [places[temp]['Harassment, threatening behaviour and private nuisance_predicted']*1, places[temp]['Harassment, threatening behaviour and private nuisance_historical']*1]

          },{
            name: 'Other offences against the person',
            data: [places[temp]['Other offences against the person_predicted']*1, places[temp]['Other offences against the person_historical']*1]

          }, {
            name: 'Arson',
            data: [places[temp]['Arson_predicted']*1, places[temp]['Arson_historical']*1]

          }, {
            name: 'Malicious damage to property',
            data: [places[temp]['Malicious damage to property_predicted']*1, places[temp]['Malicious damage to property_historical']*1]

          }, {
            name: 'Drug offences',
            data: [places[temp]['Drug offences_predicted']*1, places[temp]['Drug offences_historical']*1]

          },{
            name: 'Prohibited and regulated weapons offences',
            data: [places[temp]['Prohibited and regulated weapons offences_predicted']*1, places[temp]['Prohibited and regulated weapons offences_historical']*1]

          }, {
            name: 'Disorderly conduct',
            data: [places[temp]['Disorderly conduct_predicted']*1, places[temp]['Disorderly conduct_historical']*1]

          }, {
            name: 'Betting and gaming offences',
            data: [places[temp]['Betting and gaming offences_predicted']*1, places[temp]['Betting and gaming offences_historical']*1]

          }, {
            name: 'Liquor offences',
            data: [places[temp]['Liquor offences_predicted']*1, places[temp]['Liquor offences_historical']*1]

          },{
            name: 'Pornography offences',
            data: [places[temp]['Pornography offences_predicted']*1, places[temp]['Pornography offences_historical']*1]

          },{
            name: 'Prostitution offences',
            data: [places[temp]['Prostitution offences_predicted']*1, places[temp]['Prostitution offences_historical']*1]

          },{
            name: 'Against justice procedures',
            data: [places[temp]['Against justice procedures_predicted']*1, places[temp]['Against justice procedures_historical']*1]

          },{
            name: 'Transport regulatory offences',
            data: [places[temp]['Transport regulatory offences_predicted']*1, places[temp]['Transport regulatory offences_historical']*1]

          },{
            name: 'Other offences',
            data: [places[temp]['Other offences_predicted']*1, places[temp]['Other offences_historical']*1]
          }] 
    }})
  console.log(this.state.options)
  
  }
  // changeState(){
  //   this.setState({temp: places[i]}) 
  // }

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
        <Jumbotron title="Results" />
        <div className="table-container">
          <h2>Results for {this.state.currentLocation}</h2>
          <HighchartsReact
            highcharts={Highcharts}
            options={this.state.options}
          />
          <br />
          <BootstrapTable data={singleResult} striped={true} hover={true} pagination>
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
