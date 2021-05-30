import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import './CustomNavbar.css';

const baseUrl = 'david-henry-portfolio#/';

function CustomNavbar(props) {

    return (
        <Navbar collapseOnSelect expand="md" bg="light" sticky="top" className="custom-navbar">

			<Navbar.Toggle aria-controls="collapse-toggle" />

			<Navbar.Brand href={baseUrl}>David Henry</Navbar.Brand>

			<Navbar.Collapse sticky="top" id="collapse-toggle">

				<Nav className="m-auto" activeKey={props.location.pathname}>
					<Nav.Link href={baseUrl + "about"} eventKey="/about">About</Nav.Link>
					<Nav.Link href={baseUrl + "skills"} eventKey="/skills">Skills</Nav.Link>
					<Nav.Link href={baseUrl + "projects"} eventKey="/projects">Projects</Nav.Link>
					<Nav.Link href={baseUrl + "resume"} eventKey="/resume">Resume</Nav.Link>
				</Nav>

				<Nav>
					<Nav.Link href={baseUrl + "contact"} eventKey="/contact">Contact</Nav.Link>
				</Nav>

			</Navbar.Collapse>
		</Navbar>
    );
}

export default withRouter(CustomNavbar);
