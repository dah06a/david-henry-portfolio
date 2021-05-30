import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import './CustomNavbar.css';

const baseUrl = 'david-henry-portfolio#/';

function CustomNavbar(props) {

    return (
        <Navbar collapseOnSelect expand="md" bg="light" sticky="top" className="custom-navbar">

			<Navbar.Toggle aria-controls="collapse-toggle" />

			<Navbar.Brand><Link to="/">David Henry</Link></Navbar.Brand>

			<Navbar.Collapse sticky="top" id="collapse-toggle">

				<Nav className="m-auto" activeKey={props.location.pathname}>
					<Link to="/about" eventKey="/about">About</Link>
					<Link to="/skills" eventKey="/skills">Skills</Link>
					<Link to="/projects" eventKey="/projects">Projects</Link>
					<Link to="/resume" eventKey="/resume">Resume</Link>
				</Nav>

				<Nav>
					<Link to="/contact" eventKey="/contact">Contact</Link>
				</Nav>

			</Navbar.Collapse>
		</Navbar>
    );
}

export default withRouter(CustomNavbar);
