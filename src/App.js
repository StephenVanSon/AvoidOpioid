import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PopUpDialog from './components/PopUpDialog'
import Map from './components/Map';
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Nopioid</h2>
        </div>
          <Navigation></Navigation>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <PopUpDialog/>
          <div>
              <Map></Map>
          </div>
      </div>
    );
  }
}

export default App;
