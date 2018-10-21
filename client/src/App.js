import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx';
import Search from './pages/Search.jsx';
import Results from './pages/Results.jsx';
import Contact from './pages/Contact.jsx';
import Auth from './components/Auth';

const auth = new Auth();

// const handleAuthentication = ({location}) => {
//   if (/access_token|id_token|error/.test(location.hash)) {
//     auth.handleAuthentication();
//   }
// }

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" render={(props) => <Home auth={auth} {...props} />}/>
          <Route exact path="/search" render={(props) => <Search auth={auth} {...props} />}/>
          {/* <Route path="/search" render={(props) => {
              handleAuthentication(props);
              return <Search auth={auth}  {...props} /> 
          }}/>           */}
          <Route path="/results" render={(props) => <Results auth={auth} {...props} />}/>
          <Route path="/contact" component={Contact}/>
        </div>
      </Router>
    );
  }
}

export default App;
