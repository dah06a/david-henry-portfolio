import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import './CustomNavbar.css';

function CustomNavbar(props) {
	const homeRef = React.createRef(null);
	const aboutRef = React.createRef(null);
	const skillsRef = React.createRef(null);
	const projectsRef = React.createRef(null);
	const resumeRef = React.createRef(null);
	const contactRef = React.createRef(null);

	return (
		<Navbar collapseOnSelect expand="md" bg="light" sticky="top">

			<Navbar.Toggle aria-controls="collapse-toggle" />

			<Nav className="m-auto" activeKey={props.location.pathname}>
				<Nav.Link eventKey="/" className="bootstrap-link" onClick={() => homeRef.current.click()}>
					<Link replace ref={homeRef} to="/" className="router-link">David Henry</Link>
				</Nav.Link>
			</Nav>

			<Navbar.Collapse sticky="top" id="collapse-toggle">

				<Nav className="m-auto" activeKey={props.location.pathname}>
					<Nav.Link eventKey="/about" className="bootstrap-link" onClick={() => aboutRef.current.click()}>
						<Link replace ref={aboutRef} to="/about" className="router-link">About</Link>
					</Nav.Link>
					<Nav.Link eventKey="/skills" className="bootstrap-link" onClick={() => skillsRef.current.click()}>
						<Link replace ref={skillsRef} to="/skills" className="router-link">Skills</Link>
					</Nav.Link>
					<Nav.Link eventKey="/projects" className="bootstrap-link" onClick={() => projectsRef.current.click()}>
						<Link replace ref={projectsRef} to="/projects" className="router-link">Projects</Link>
					</Nav.Link>
					<Nav.Link eventKey="/resume" className="bootstrap-link" onClick={() => resumeRef.current.click()}>
						<Link replace ref={resumeRef} to="/resume" className="router-link">Resume</Link>
					</Nav.Link>
				</Nav>

				<Nav activeKey={props.location.pathname}>
					<Nav.Link eventKey="/contact" className="bootstrap-link" onClick={() => contactRef.current.click()}>
						<Link replace ref={contactRef} to="/contact" className="router-link">Contact</Link>
					</Nav.Link>
				</Nav>

			</Navbar.Collapse>
		</Navbar>
	);
}

export default withRouter(CustomNavbar);
