import React, { Component } from 'react';
import {Button} from 'react-bootstrap';

class PopUpDialog extends Component{
  render(){
    const wellStyles = {maxWidth: 400, margin: '0 auto 10px'};
    return(
        <div className="well" style={wellStyles}>
          <Button bsStyle="primary" bsSize="large" href="#" block>Find a Kit</Button>
          <Button bsStyle="primary" bsSize="large" href="#" block>Report a Incident</Button>
          <Button bsStyle="primary" bsSize="large" href="#" block>Learn More</Button>
        </div>
      );
    }
  }
export default PopUpDialog;
