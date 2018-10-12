import React, { Component } from 'react';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import Dropdown from '../components/Dropdown.jsx';
import {FormControl} from 'react-bootstrap'
import {Typeahead} from 'react-bootstrap-typeahead';
import options from '../components/places.jsx';



class Search extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      currentLocation: {
          title: '',
        },
      currentCrime: ' ',
      selected:' ',
      location: [
        {
          id: 0,
          title: 'Kensington',
          Murder: 5,
          Assault: 10,
          Theft: 3,
          Fraud: 8,
          selected: false,
          key: 'location'
        },
        {
          id: 1,
          title: 'Sydney',
          Murder: 0,
          Assault: 11,
          Theft: 9,
          Fraud: 3,
          selected: false,
          key: 'location'
        },
        {
          id: 2,
          title: 'Rhodes',
          Murder: 2,
          Assault: 1,
          Theft: 13,
          Fraud: 0,
          selected: false,
          key: 'location'
        },
        {
          id: 3,
          title: 'Randwick',
          Murder: 1,
          Assault: 9,
          Theft: 2,
          Fraud: 18,
          selected: false,
          key: 'location'
        }
      ],
      crime: [
        {
          id: 0,
          title: 'Murder',
          selected: false,
          key: 'crime'
        },
        {
          id: 1,
          title: 'Assault',
          selected: false,
          key: 'crime'
        },
        {
          id: 2,
          title: 'Theft',
          selected: false,
          key: 'crimes'
        },
        {
          id: 3,
          title: 'Fraud',
          selected: false,
          key: 'crime'
        }
      ],
    }
  }

  handleChange(e) {
    this.setState({currentLocation:{title: e.target.value}});
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
    // console.log(this.state.currentCrime.title);
    let currLoc = this.state.currentLocation
    let currCrim = this.state.currentCrime.title
    
    let map = "https://www.google.com/maps/embed/v1/place?q="+currLoc.title+"&key=AIzaSyDyWKb8MrWqGlMtGJt54mTMCXipHcs5UNs"
    if(this.state.selected !== undefined){
      map = "https://www.google.com/maps/embed/v1/place?q="+this.state.selected[0].name+"&key=AIzaSyDyWKb8MrWqGlMtGJt54mTMCXipHcs5UNs"
    }

    return (
      <div>
        <Navbar />
        <Jumbotron title="Search" subtitle="Search anything with A, it'll pop up on the map. Or use the 2 dropdown menus"/>
        <div className="container">
          <h2>Search</h2>
          <form>
            <Typeahead
              type="text"
              labelKey="name"
              options={options}
              placeholder="Choose a suburb..."
              onChange={(selected) => this.setState({selected})}
            />
           {/*} <FormControl
              type="text"
              value={this.state.currentLocation.title}
              onChange={this.handleChange}
            />*/}
          </form>
          <br />
          <Dropdown
            titleHelper="Location"
            title="Select location"
            list={this.state.location}
            resetThenSet={this.resetThenSet}
          />
          <br />
          <Dropdown
            titleHelper="Crime"
            title="Select crime"
            list={this.state.crime}
            resetThenSet={this.resetThenSet}
          />
          <br />
          <h1>{currCrim} in {currLoc.title} : {currLoc[currCrim]}</h1>
          <iframe width="600" height="450" frameBorder="0" src={map} allowFullScreen></iframe>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Search
