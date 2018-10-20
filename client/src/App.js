import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx';
import Search from './pages/Search.jsx';
import Results from './pages/Results.jsx';
import Contact from './pages/Contact.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/search" component={Search}/>          
          <Route path="/results" component={Results}/>
          <Route path="/contact" component={Contact}/>
        </div>
      </Router>
    );
  }
}

export default App;
