import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink, withRouter } from 'react-router-dom';
import './CustomNavbar.css';

function CustomNavbar(props) {

	return (
		<Navbar collapseOnSelect expand="md" bg="light" sticky="top">

			<Navbar.Toggle aria-controls="collapse" />

			<Navbar.Brand>David Henry</Navbar.Brand>

			<Navbar.Collapse id="collapse" className="justify-content-end">

				<Nav>
					<NavLink to="/" className="link" activeClassName="link-active" exact onClick={() => window.scroll(0, 0)}>Home</NavLink>
					<NavLink to="/about" className="link" activeClassName="link-active" onClick={() => window.scroll(0, 0)}>About</NavLink>
					<NavLink to="/skills" className="link" activeClassName="link-active" onClick={() => window.scroll(0, 0)}>Skills</NavLink>
					<NavLink to="/projects" className="link" activeClassName="link-active" onClick={() => window.scroll(0, 0)}>Projects</NavLink>
					<NavLink to="/resume" className="link" activeClassName="link-active" onClick={() => window.scroll(0, 0)}>Resume</NavLink>
					<NavLink to="/contact" className="link" activeClassName="link-active" onClick={() => window.scroll(0, 0)}>Contact</NavLink>
				</Nav>

			</Navbar.Collapse>
		</Navbar>
	);
}

export default withRouter(CustomNavbar);
