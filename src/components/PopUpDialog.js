import React, { Component } from 'react';
import {Button, Modal} from 'react-bootstrap';

const PopUpDialog = React.createClass({
  getInitialState(){
    return {show: true};
  },

  close(){
    this.setState({show: false});
  },

  open(){
    this.setState({show: true});
  },

  render(){
    const close = () => this.setState({show:false});
    //todo: link buttons on click
    const wellStyles = {maxWidth: 400, margin: '0 auto 10px'};
    return (
          <Modal show = {this.state.show} onHide={close} container={this} tr bsSize="large" aria-labelledby="contained-modal-title-lg">
            <Modal.Body>
            <Button bsStyle="primary" bsSize="large" href="#" block>Find a Kit</Button>
            <Button bsStyle="primary" bsSize="large" href="#" block>Report a Incident</Button>
            <Button bsStyle="primary" bsSize="large" href="#" block onClick={() => this.setState({show: false})}>Learn More</Button>
            </Modal.Body>
            <Modal.Footer>In Case of an Emergency, Contact 911</Modal.Footer>
          </Modal>
        );
      }
    });
export default PopUpDialog;
