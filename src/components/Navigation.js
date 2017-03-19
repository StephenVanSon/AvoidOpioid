/**
 * Created by Ali on 2017-03-18.
 */

import React, {Component} from 'react';
import {Navbar, NavItem, Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';


class Navigation extends Component{
    render(){
        const navbarInstance = (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Home</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to="/map">
                            <NavItem eventKey={1}>Find a Kit</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/survey">
                            <NavItem eventKey={2}>Report an Incident</NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
        return(navbarInstance);
    }
}

export default Navigation;
