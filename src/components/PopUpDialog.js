import React, { Component } from 'react';
import {Button, Modal, OverlayTrigger,Tooltip,Popover} from 'react-bootstrap';

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
  const popoverReport = (
    <Popover id="popover-trigger-hover-focus" title="Report an Incident">Get help for someone you think might have a Fentanyl overdose.</Popover>
 );
 const popoverFind = (
    <Popover id="popover-trigger-hover-focus" title="Find a Naloxone Kit">Locate and obtain a Naloxone kit near you based on your current location</Popover>
 );
   const popoverLearn = (
      <Popover id="popover-trigger-hover-focus" title="Learn More">Information on the dangers of Fentanyl and how you can prevent yourself and others from using Fentanyl</Popover>
    );
    //todo: link buttons on click
    const wellStyles = {maxWidth: 400, margin: '0 auto 10px'};
    return (
          <Modal show = {this.state.show} onHide={close} container={this} tr bsSize="large" aria-labelledby="contained-modal-title-lg">
            <Modal.Body>
            <OverlayTrigger placement="bottom" overlay={popoverReport}>
              <Button bsStyle="danger" bsSize="large" href="/report" block>Report an Incident</Button>
            </OverlayTrigger>
            <OverlayTrigger placement="bottom" overlay={popoverFind} bsStyle="danger">
              <Button bsStyle="danger" bsSize="large" href="/find" block>Find a Naloxone Kit</Button>
            </OverlayTrigger>
            <OverlayTrigger placement="bottom" overlay={popoverLearn} bsStyle="info">
              <Button bsStyle="info" bsSize="large" href="#" block onClick={() => this.setState({show: false})}>Learn More</Button>
          </OverlayTrigger>
            </Modal.Body>
            <Modal.Footer>If it looks serious, it's probably serious. Don't risk a life and contact 911 now.</Modal.Footer>
          </Modal>
        );
      }
    });
export default PopUpDialog;
