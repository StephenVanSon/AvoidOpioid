import React  from 'react';
import './App.css';
import PopUpDialog from './components/PopUpDialog';
import Navigation from './components/Navigation';

class App extends React.Component {
  render() {
    let ComponentsToRender = [];
    if(this.props.children){
        ComponentsToRender.push(this.props.children);
    }
    else{
        ComponentsToRender.push(<PopUpDialog/>);
    }

    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Nopioid</h2>
        </div>
          <Navigation></Navigation>
        <p className="App-intro">
        </p>
          {ComponentsToRender}
      </div>
    );
  }
}

export default App;
