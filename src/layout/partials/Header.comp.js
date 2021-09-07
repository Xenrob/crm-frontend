import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../assets/img/logo.png';
//import {GrGroup} from 'react-icons/gr';
import {useHistory} from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'


export const Header = () => {
    const history = useHistory();

    const logMeOut =() =>{
        history.push("/");
    };
    return (
        <Navbar collapseOnSelect variant="dark" expand="md">
            <Navbar.Brand>
                {/* <h6 width="50px"><GrGroup /> CRM | Ticketing System</h6> */}
                <img src={logo} alt="logo" width="54px" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <LinkContainer to="/dashboard">
                        <Nav.Link>Dashboard</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/tickets">
                        <Nav.Link>Tickets</Nav.Link>
                    </LinkContainer>
                    <Nav.Link onClick={logMeOut}>Logout</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
