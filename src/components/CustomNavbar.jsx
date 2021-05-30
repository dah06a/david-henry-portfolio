import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import './CustomNavbar.css';

const baseUrl = 'david-henry-portfolio#/';

function CustomNavbar(props) {

	console.log(props.location.pathname);

    return (
        <Navbar collapseOnSelect expand="md" bg="light" sticky="top" className="custom-navbar">

			<Navbar.Toggle aria-controls="collapse-toggle" />

			<Navbar.Brand><Link to="/">David Henry</Link></Navbar.Brand>

			<Navbar.Collapse sticky="top" id="collapse-toggle">

				<Nav className="m-auto" activeKey={props.location.pathname}>
					<Nav.Link eventKey="/about" className="bootstrap-link">
						<Link to="/about" className="router-link">About</Link>
					</Nav.Link>
					<Nav.Link eventKey="/skills" className="bootstrap-link">
						<Link to="/skills" className="router-link">Skills</Link>
					</Nav.Link>
					<Nav.Link eventKey="/projects" className="bootstrap-link">
						<Link to="/projects" className="router-link">Projects</Link>
					</Nav.Link>
					<Nav.Link eventKey="/resume" className="bootstrap-link">
						<Link to="/resume" className="router-link">Resume</Link>
					</Nav.Link>
				</Nav>

				<Nav activeKey={props.location.pathname}>
					<Link to="/contact" eventKey="/contact">Contact</Link>
				</Nav>

			</Navbar.Collapse>
		</Navbar>
    );
}

export default withRouter(CustomNavbar);
