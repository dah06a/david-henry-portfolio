import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import './CustomNavbar.css';

function CustomNavbar(props) {
    return (
        <Navbar collapseOnSelect expand="md" bg="light" sticky="top" className="custom-navbar">

			<Navbar.Toggle aria-controls="collapse-toggle" />

			<Navbar.Brand href={process.env.PUBLIC_URL + "/"}>David Henry</Navbar.Brand>

			<Navbar.Collapse sticky="top" id="collapse-toggle">

				<Nav className="m-auto" activeKey={props.location.pathname}>
					<Nav.Link href={process.env.PUBLIC_URL + "/about"} eventKey="/about">About</Nav.Link>
					<Nav.Link href={process.env.PUBLIC_URL + "/skills"} eventKey="/skills">Skills</Nav.Link>
					<Nav.Link href={process.env.PUBLIC_URL + "/projects"} eventKey="/projects">Projects</Nav.Link>
					<Nav.Link href={process.env.PUBLIC_URL + "/resume"} eventKey="/resume">Resume</Nav.Link>
				</Nav>

				<Nav>
					<Nav.Link href="/contact" eventKey="/contact">Contact</Nav.Link>
				</Nav>

			</Navbar.Collapse>
		</Navbar>
    );
}

export default withRouter(CustomNavbar);
