import React, { Component } from 'react';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import Dropdown from '../components/Dropdown.jsx';
import {Typeahead} from 'react-bootstrap-typeahead';
import places from '../components/places.jsx';
import crimes from '../components/crimes.jsx';


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
    }
  }

  handleChange(e) {
    this.setState({currentLocation:{Title: e.target.value}});
  };

   getData = () => {

   };

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
    let currLoc = this.state.currentLocation.Title
    let currCrim = this.state.currentCrime.Title
    
    let map = "https://www.google.com/maps/embed/v1/place?q="+currLoc+"&key=AIzaSyDyWKb8MrWqGlMtGJt54mTMCXipHcs5UNs"
        
    let stat;
    if (currLoc && currCrim) {
      stat = <h1>{currCrim} in {currLoc} : {currLoc[currCrim]}</h1>
    }

    return (
      <div>
        <Navbar />
        <Jumbotron title="Search" subtitle="Search anything, it'll pop up on the map."/>
        <div className="container">
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
         {/*} <br />
          <Dropdown
            titleHelper="Location"
            title="Select location"
            list={this.state.location}
            resetThenSet={this.resetThenSet}
          />*/}
          <br />
          <Dropdown
            titleHelper="Crime"
            title="Select crime"
            list={this.state.crime}
            resetThenSet={this.resetThenSet}
          />
          <br />
          {stat}
          <iframe width="600" height="450" frameBorder="0" src={map} allowFullScreen></iframe>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Search
