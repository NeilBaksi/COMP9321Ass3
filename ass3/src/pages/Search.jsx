import React, { Component } from 'react';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import Dropdown from '../components/Dropdown.jsx';
import {FormGroup, FormControl, ControlLabel, HelpBlock} from 'react-bootstrap'

class Search extends Component {

  //need to figure this out https://www.npmjs.com/package/react-search-box
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      initialState: "Search...",
      value: " "
    }
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  };

   getData = () => {
    
   }

  render() {
    console.log(this.state.value);

    let map = "https://www.google.com/maps/embed/v1/place?q="+this.state.value+"&key=AIzaSyDyWKb8MrWqGlMtGJt54mTMCXipHcs5UNs"


    return (
      <div>
        <Navbar />
        <Jumbotron title="Search" subtitle="Search anything, it'll pop up on the map"/>
        <div className="container">
          <h2>Search</h2>
          <form>
              <FormControl
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
              />
          </form>
          <Dropdown />
          <iframe width="600" height="450" frameBorder="0"
src={map} allowFullScreen></iframe>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Search
