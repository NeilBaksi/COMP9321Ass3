import React, { Component } from 'react';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import Autocomplete from '../components/Autocomplete.jsx'
//import SearchBox from 'react-search-box'

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isSubmitted: 0,
      selectedSuburb: null,
      selectedPostcode: null,
      suburbs: this.props.suburbs,
    }
    this.updateSuburb = this.updateSuburb.bind(this);
    this.updateSubmission = this.updateSubmission.bind(this);
  }

  componentDidMount() {
    console.log(this.state.selectedSuburb)
  }

  updateSuburb (newValue) {
    console.log(newValue)
    if (newValue != null) {
      this.setState({
        selectedSuburb: newValue.value.slice(0, -5),
        selectedPostcode: newValue.value.slice(-4)
      })
      console.log("Selected Suburb is: ", newValue.value)
      this.props.sendUpdatedSuburb(newValue)
    }
  }

  
  updateSubmission (newValue) {
      this.setState({
        isSubmitted: 1
      });
      console.log(this.state.selectedSuburb)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.suburbs !== this.state.suburbs) {
      this.setState({ suburbs: nextProps.suburbs });
    }
  }


  //need to figure this out https://www.npmjs.com/package/react-search-box
  // constructor () {
  //   super()

  //   this.state = { data: [], loading: false }
  // }

  // componentDidMount () {
  //   this.setState({ loading: true })

  //   fetch('https://api.github.com/search/repositories?q=topic:ruby+topic:rails')
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({
  //         data: data.items,
  //         loading: false
  //       })
  //     })
  // };

  // handleChange =(selection) => {
  //   selection ? console.log(selection.full_name) : console.log('reverted')
  // };

  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron title="Search" subtitle="Random page just to see routing lol"/>
        <div className="container">
          <h2>Search</h2>
          {/*{<SearchBox data={this.state.data} onChange={this.handleChange} placeholder='Search for a string...' class='search-class' searchKey='full_name' loading={this.state.loading} width={300} height={40} />*/}
        </div>
        <div className="searchBox">
            <p>Which suburb would you like to know about?</p>
            <Autocomplete updateSuburb={this.updateSuburb}
                  updateSubmission={this.updateSubmission}
                  selectedSuburb={this.state.selectedSuburb}
                  selectedPostcode={this.state.selectedPostcode}
                  suburbs={this.state.suburbs}
                  getData={this.getData}
                  />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Search
