import React from 'react';
import {Button, Modal, OverlayTrigger,Popover} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

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
    const close=() => this.setState({show:false});
    const popoverReport=(
      <Popover id="popover-trigger-hover-focus" title="Report an Incident">Get help for someone you think might have a Fentanyl overdose.</Popover>
    );
    const popoverFind=(
      <Popover id="popover-trigger-hover-focus" title="Find a Naloxone Kit">Locate and obtain a Naloxone kit near you based on your current location</Popover>
    );
    const popoverLearn=(
      <Popover id="popover-trigger-hover-focus" title="Learn More">Information on the dangers of Fentanyl and how you can prevent yourself and others from using Fentanyl</Popover>
    );
    return (
      <Modal show={this.state.show} onHide={close} container={this} bsSize="large" aria-labelledby="contained-modal-title-lg">
      <Modal.Body>
        <OverlayTrigger placement="bottom" overlay={popoverReport}>
          <LinkContainer to="/survey">
            <Button bsStyle="danger" bsSize="large" href="/report" block>Report an Incident</Button>
          </LinkContainer>
        </OverlayTrigger>
        <OverlayTrigger placement="bottom" overlay={popoverFind} bsStyle="danger">
            <LinkContainer to="/map">
                <Button bsStyle="danger" bsSize="large" href="/find" block>Find a Naloxone Kit</Button>
            </LinkContainer>
        </OverlayTrigger>
        <OverlayTrigger plancement="bottom" overlay={popoverLearn} bsStyle="info">
          <LinkContainer to="/learnMore">
          <Button bsStyle="info" bsSize="large" href="#" block onClick={() => this.setState({show: false})}>Learn More</Button>
          </LinkContainer>
        </OverlayTrigger>
      </Modal.Body>
      <Modal.Footer>
        If it looks serious, it's probably serious. Don't risk a life and contact 911 now.
      </Modal.Footer>
      </Modal>
    );
  }
});

export default PopUpDialog;
