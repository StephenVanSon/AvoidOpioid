import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PopUpDialog from './components/PopUpDialog'
import Map from './components/Map';

class App extends Component {
  render() {
      let navigator = window.navigator;
      let userLocation = null;
      if ("geolocation" in navigator) {
          navigator.geolocation.getCurrentPosition(function(position) {
              userLocation = { lat: position.coords.latitude, lon: position.coords.longitude };
          });
      } else {
          /* geolocation IS NOT available */
          userLocation = {lat:49.2827, lon: 123.1207};
      }


    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Nopioid</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <PopUpDialog/>
          <div>
              <Map location = {userLocation}></Map>
          </div>
      </div>
    );
  }
}

export default App;
