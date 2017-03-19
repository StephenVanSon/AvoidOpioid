import React, { Component } from 'react';
import {Button, Modal, OverlayTrigger,Tooltip,Popover} from 'react-bootstrap';

const PopUpDialog = React.createClass({
  getInitialState(){
    return {show: true};
  },

  open(){
    this.setState({show: true});
  },

  render(){
    const close = () => this.setState({show:false});
    const popoverReport = (
      <Popover id="popover-trigger-hover-focus" title="Report an Incident"> If you know or think you or someone has overdosed please click this button.</Popover>
    );
    const popoverFind = (
      <Popover id="popover-trigger-hover-focus" title="Find a Kit">Locate a kit near you for yourself or someone you know </Popover>
    );
    const popoverLearn = (
      <Popover id="popover-trigger-hover-focus" title="Learn More">Learn more about the dangers and prevention methods of Fentanyl</Popover>
    );
    //todo: link buttons on click
    return (
          <Modal show = {this.state.show} onHide={close} container={this} tr bsSize="large" aria-labelledby="contained-modal-title-lg">
            <Modal.Body>
            <OverlayTrigger placement="bottom" overlay={popoverReport}>
              <Button bsStyle="primary" bsSize="large" href="/report" block>REPORT</Button>
            </OverlayTrigger>
            <OverlayTrigger placement="bottom" overlay={popoverFind}>
              <Button bsStyle="primary" bsSize="large" href="/find" block>FIND</Button>
            </OverlayTrigger>
            <OverlayTrigger placement="bottom" overlay={popoverLearn}>
              <Button bsStyle="primary" bsSize="large" href="#" block onClick={() => this.setState({show: false})}>LEARN</Button>
            </OverlayTrigger>
            </Modal.Body>
            <Modal.Footer>If it looks serious, it's probably serious. Don't risk a life and contact 911 now.</Modal.Footer>
          </Modal>
        );
      }
    });
export default PopUpDialog;
