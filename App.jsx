import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import  TopNavbar  from './components/navbar'

import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './pages/Home'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <TopNavbar />
          <Route exact path="/" component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
