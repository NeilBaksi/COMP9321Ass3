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
      auth: this.props.auth,
      currentLocation: 'Randwick',
      temp: [],
      options : {
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
            data: [places[0]['Homicide_predicted']*1, places[0]['Homicide_historical']*1]

          }, {
            name: 'Assault',
            data: [places[0]['Assault_predicted']*1, places[0]['Assault_historical']*1]

          }, {
            name: 'Robbery',
            data: [places[0]['Robbery_predicted']*1, places[0]['Robbery_historical']*1]

          }, {
            name: 'Theft',
            data: [places[0]['Theft_predicted']*1, places[0]['Theft_historical']*1]

          },{
            name: 'Sexual Offence',
            data: [places[0]['Sexual Offence_predicted']*1, places[0]['Sexual Offence_historical']*1]

          }, {
            name: 'Abduction and kidnapping',
            data: [places[0]['Abduction and kidnapping_predicted']*1, places[0]['Abduction and kidnapping_historical']*1]

          }, {
            name: 'Blackmail and extortion',
            data: [places[0]['Blackmail and extortion_predicted']*1, places[0]['Blackmail and extortion_historical']*1]

          }, {
            name: 'Harassment, threatening behaviour and private nuisance',
            data: [places[0]['Harassment, threatening behaviour and private nuisance_predicted']*1, places[0]['Harassment, threatening behaviour and private nuisance_historical']*1]

          },{
            name: 'Other offences against the person',
            data: [places[0]['Other offences against the person_predicted']*1, places[0]['Other offences against the person_historical']*1]

          }, {
            name: 'Arson',
            data: [places[0]['Arson_predicted']*1, places[0]['Arson_historical']*1]

          }, {
            name: 'Malicious damage to property',
            data: [places[0]['Malicious damage to property_predicted']*1, places[0]['Malicious damage to property_historical']*1]

          }, {
            name: 'Drug offences',
            data: [places[0]['Drug offences_predicted']*1, places[0]['Drug offences_historical']*1]

          },{
            name: 'Prohibited and regulated weapons offences',
            data: [places[0]['Prohibited and regulated weapons offences_predicted']*1, places[0]['Prohibited and regulated weapons offences_historical']*1]

          }, {
            name: 'Disorderly conduct',
            data: [places[0]['Disorderly conduct_predicted']*1, places[0]['Disorderly conduct_historical']*1]

          }, {
            name: 'Betting and gaming offences',
            data: [places[0]['Betting and gaming offences_predicted']*1, places[0]['Betting and gaming offences_historical']*1]

          }, {
            name: 'Liquor offences',
            data: [places[0]['Liquor offences_predicted']*1, places[0]['Liquor offences_historical']*1]

          },{
            name: 'Pornography offences',
            data: [places[0]['Pornography offences_predicted']*1, places[0]['Pornography offences_historical']*1]

          },{
            name: 'Prostitution offences',
            data: [places[0]['Prostitution offences_predicted']*1, places[0]['Prostitution offences_historical']*1]

          },{
            name: 'Against justice procedures',
            data: [places[0]['Against justice procedures_predicted']*1, places[0]['Against justice procedures_historical']*1]

          },{
            name: 'Transport regulatory offences',
            data: [places[0]['Transport regulatory offences_predicted']*1, places[0]['Transport regulatory offences_historical']*1]

          },{
            name: 'Other offences',
            data: [places[0]['Other offences_predicted']*1, places[0]['Other offences_historical']*1]
          }
        ]
      },

    }
  }

  // changeState(){
  //   this.setState({temp: places[i]}) 
  // }

  render() {   
     for (let i = 0; i < places.length; i++) {
        
        if (places[i].Title === 'Randwick'){
          console.log(places[0]['Homicide_historical'])
          //this.setState({temp: places[i]})
          console.log(this.state.temp)
        }    
     }

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
        <div className="table-container">
          <h2>Results</h2>
          <BootstrapTable data={singleResult} striped={true} hover={true} pagination>
            <TableHeaderColumn dataField="id" isKey={true} dataAlign="center" dataSort={true}>ID</TableHeaderColumn>
            {tableHeaderColumns}
          </BootstrapTable>
        </div>
        <HighchartsReact
          highcharts={Highcharts}
          options={this.state.options}
        />
        <Footer />
      </div>
    );
  }
}

export default Results
