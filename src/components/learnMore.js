import React from 'react';
import {Button,Jumbotron} from 'react-bootstrap';

const learnMore = React.createClass({
  render(){
    return(
      <Jumbotron container={this}>
      <h1 style="text-align:center">Learn More</h1>
      <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      </Jumbotron>
    )},
  })

export default learnMore;
