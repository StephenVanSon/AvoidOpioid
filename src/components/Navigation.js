/**
 * Created by Ali on 2017-03-18.
 */

import React, { Component } from 'react';
import {Button, Navbar, NavItem, Nav, NavDropdown, MenuItem,} from 'react-bootstrap';


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
                        <NavItem eventKey={1} href="/find">Find a Kit</NavItem>
                        <NavItem eventKey={2} href="/report">Report an Incident</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
        return(navbarInstance);
    }
}

export default Navigation;