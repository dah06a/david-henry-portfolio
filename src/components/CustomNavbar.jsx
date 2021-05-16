import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import './CustomNavbar.css';

function CustomNavbar(props) {
    return (
        <Navbar collapseOnSelect expand="md" sticky="top" bg="light" className="custom-navbar">
			<Navbar.Toggle aria-controls="collapse-toggle" />
			<Navbar.Collapse id="collapse-toggle">
				<Nav variant="tabs" className="m-auto">
					<Nav.Link href="#" eventKey="story">Story</Nav.Link>
					<Nav.Link href="#" eventKey="skills">Skills</Nav.Link>
					<Nav.Link href="#" eventKey="portfolio">Portfolio</Nav.Link>
					<Nav.Link href="#" eventKey="resume">Resume</Nav.Link>
					<Nav.Link href="#" eventKey="contact">Contact</Nav.Link>
				</Nav>
			</Navbar.Collapse>

		</Navbar>
    );
}

export default CustomNavbar;
