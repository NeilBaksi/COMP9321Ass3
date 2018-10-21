import React, { Component } from 'react';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import Dropdown from '../components/Dropdown.jsx';
import {Typeahead} from 'react-bootstrap-typeahead';
import places from '../components/places.jsx';
import crimes from '../components/crimes.jsx';
import MonthPickerInput from 'react-month-picker-input';
import {Grid, Row, Col } from 'react-bootstrap';
import Auth from '../components/Auth.js';

require('react-month-picker-input/dist/react-month-picker-input.css');

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentLocation: {
          Title: 'Sydney',
        },
      // currentLocation: 'Sydney',
      currentCrime: 'Theft',
      location: places,
      crime: crimes,
      data: {}
    }
    this.handleChange = this.handleChange.bind(this);
    this.getData = this.getData.bind(this);
  }

  componentWillMount() {
    this.getData();
  }

  handleChange(e) {
    this.setState({currentLocation:{Title: e.target.value}});
  };

  getData() {
    // let currLoc = this.state.currentLocation
    // let currCrim = this.state.currentCrime.title
    // console.log(currCrim)
    // example call: fetch('http:127.0.0.1:5000/Randwick/Theft)
    // fetch('http://127.0.0.1:5000/' + {currLoc} + '/' + {currCrim})
    // @Neil, make it more dynamic by passing on the current state of location and crime.
    fetch('http://127.0.0.1:5000/Hurstville/Theft', {
      method: "GET",
      dataType: "JSON",
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then(response => response.json())
      .then(response => this.setState({data: response}))
      // .then(response => {return response.json()})
      .catch(err => console.log)
  }

  resetThenSet = (id, stateKey) => {
    let locations = [...this.state.location]
    locations.forEach(item => item.selected = false);
    locations[id].selected = true;
    
    let crimes = [...this.state.crime]
    crimes.forEach(item => item.selected = false);
    crimes[id].selected = true;
    if(stateKey === 'location'){
      this.setState({currentLocation: locations[id]})
    }
    if (stateKey === 'crime') {
      this.setState({currentCrime: crimes[id]})
      //console.log(crimes[id]);
    }
  }


  render() {
    let currLoc = this.state.currentLocation
    let currCrim = this.state.currentCrime.title
    let map;

    console.log(this.state.data) //@Neil you have the data here, do some fancy shit.

    if(currLoc){
      map = "https://www.google.com/maps/embed/v1/place?q="+currLoc.Title+"&key=AIzaSyDyWKb8MrWqGlMtGJt54mTMCXipHcs5UNs"
    } else {
      map = "https://www.google.com/maps/embed/v1/place?q=Sydney&key=AIzaSyDyWKb8MrWqGlMtGJt54mTMCXipHcs5UNs"
    }
        
    let stat;
    if (currLoc && currCrim) {
      stat = <h2>{currCrim} in {currLoc.Title} : {currLoc[currCrim]}</h2>
    }
    // Check auth
    // if (isAuthenticated()){
    //   this.getData()
    // } else {
    //   console.log("Not autheticated")
    // }

    return (
      <div>
        <Navbar />
        <Jumbotron title="Search" subtitle="Search anything, it'll pop up on the map."/>
        <Grid>
          <Row className="show-grid">
            <Col md={12}>
              <h2>Search</h2>
              <form>
                <Typeahead
                  type="text"
                  labelKey="Title"
                  options={places}
                  placeholder="Choose a suburb..."
                  onChange={(selected) => this.setState({currentLocation: selected[0]})}
                />
              </form>
              <br />
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <Dropdown
                titleHelper="Crime"
                title="Select crime"
                list={this.state.crime}
                resetThenSet={this.resetThenSet}
              />
              <br />
            </Col>
            <Col md={4}>
              {stat}
              <br />
            </Col>
          </Row>

          <Row>
            <Col md={4}>
              <div>
                <MonthPickerInput
                  onChange={function(maskedValue, selectedYear, selectedMonth) {
                    console.log(maskedValue, selectedYear, selectedMonth);
                  }}
                />
                <br />
              </div>
            </Col>
            <Col md={4}>
              <div>
                <MonthPickerInput
                  onChange={function(maskedValue, selectedYear, selectedMonth) {
                    console.log(maskedValue, selectedYear, selectedMonth);
                  }}
                />
              </div>
              <br />
            </Col>
            <Col md={4}>
              <iframe width="600" height="450" frameBorder="0" src={map} allowFullScreen></iframe>
            </Col>
          </Row>
        </Grid>
        <br />
        <Footer />
      </div>
    );
  }
}

export default Search


