import Select from 'react-select';
import React, { Component } from 'react';
import { Button} from 'bootstrap-4-react';


class Autocomplete extends Component {
  constructor(props) {
    super(props);
    this.state = {
        selectedSuburb: null,
        selectedPostcode: null,
        options: this.props.suburbs
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
 
  handleSubmit (event) {
    if ((this.state.selectedSuburb != null) && (this.state.selectedProfile != null)){
      console.log("Ready to submit")
      this.props.updateSubmission();
    }
  }

  updateProfile(newValue){
    if(newValue != null){
      this.setState({
        selectedProfile: newValue
      }, this.props.updateProfile(newValue))
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedSuburb !== this.state.selectedSuburb) {
      this.setState({ selectedSuburb: nextProps.selectedSuburb });
    }
    if (nextProps.selectedPostcode !== this.state.selectedPostcode) {
      this.setState({ selectedPostcode: nextProps.selectedPostcode });
    }
    if (nextProps.suburbs !== this.state.options) {
      this.setState({ options: nextProps.suburbs });
    }
  }


  render () {
    return (
      <div className="search">
       <Select 
          autofocus={true} 
          options={this.state.options}
          clearable={false} 
          value={this.state.selectedSuburb + ' ' + this.state.selectedPostcode}
          onChange={this.props.updateSuburb} 
          searchable={this.state.searchable}
          noResultsText="No suburbs found..." 
          placeholder="Select a suburb..."
          />
        <br/>
        <Button onClick={this.handleSubmit}>Submit</Button>
      </div>
    )
  }

}

export default Autocomplete;
