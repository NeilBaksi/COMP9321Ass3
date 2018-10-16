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


require('react-month-picker-input/dist/react-month-picker-input.css');

class Search extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      currentLocation: {
          Title: 'Sydney',
        },
      currentCrime: ' ',
      location: places,
      crime: crimes,
      data: []
    }
  }

  handleChange(e) {
    this.setState({currentLocation:{Title: e.target.value}});
  };

  getData() {
    var self = this;
    return Promise.all([
      fetch('/data/location?suburb=' + this.state.currentLocation),
      fetch('/data/crime?crime=' + this.state.currentCrime)
    ]).then(responses =>
      Promise.all(responses.map(res => res.json())))
    .then(function(response) {
      self.setState({
        data: response,
      })
      console.log(response);
    }).catch(function(err) {
      console.log(err);
      throw new Error('Couldn\'t get data rip');
    })
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
    
    let map = "https://www.google.com/maps/embed/v1/place?q="+currLoc.Title+"&key=AIzaSyDyWKb8MrWqGlMtGJt54mTMCXipHcs5UNs"
        
    let stat;
    if (currLoc.Title && currCrim) {
      stat = <h1>{currCrim} in {currLoc.Title} : {currLoc[currCrim]}</h1>
    }





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
            <Col md={12}>
              <Dropdown
                titleHelper="Crime"
                title="Select crime"
                list={this.state.crime}
                resetThenSet={this.resetThenSet}
              />
              <br />
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <div>
                <MonthPickerInput
                  onChange={function(maskedValue, selectedYear, selectedMonth) {
                    console.log(maskedValue, selectedYear, selectedMonth);
                  }}
                />
                <br />
                <MonthPickerInput
                  onChange={function(maskedValue, selectedYear, selectedMonth) {
                    console.log(maskedValue, selectedYear, selectedMonth);
                  }}
                />
              </div>
              <br />
            </Col>
          </Row>

          <Row>
            <Col md={12} mdPush={3}>
              {stat}
              <br />
            </Col>
          </Row>
          <Row>
            <Col md={12} mdPush={3}>
              <iframe width="600" height="450" frameBorder="0" src={map} allowFullScreen></iframe>
            </Col>
          </Row>

        </Grid>
        <Footer />
      </div>
    );
  }
}

export default Search


