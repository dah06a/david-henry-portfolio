import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';

import './Contact.css';

function Contact(props) {
    return (
        <Container fluid className="contact">
            <Row className="contact-title">
                <Col className="align-self-center">
                    <h1>Contact</h1>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={8} lg={6} className="m-auto">
                    <ListGroup className="text-left">
                        <ListGroup.Item className="contact-item">
                            <h5><FontAwesomeIcon icon={faEnvelope} /><a href="mailto: dah06a@acu.edu" > dah06a@acu.edu</a></h5>
                        </ListGroup.Item>
                        <ListGroup.Item className="contact-item">
                            <h5><FontAwesomeIcon icon={faPhone} /><a href="tel:+1-325-260-5182"> (325) 260 - 5182</a></h5>
                        </ListGroup.Item>
                        <ListGroup.Item className="contact-item">
                            <h5><FontAwesomeIcon icon={faLinkedin} /><a href="https://www.linkedin.com/in/david-henry-653454203" target="_blank" rel="noreferrer"> LinkedIn.com</a></h5>
                        </ListGroup.Item>
                        <ListGroup.Item className="contact-item">
                            <h5><FontAwesomeIcon icon={faGithub} /><a href="https://github.com/dah06a" target="_blank" rel="noreferrer"> Github.com</a></h5>
                        </ListGroup.Item>
                        <ListGroup.Item className="contact-item">
                            <h5><FontAwesomeIcon icon={faFacebook} /><a href="https://www.facebook.com/david.henry.7399786" target="_blank" rel="noreferrer"> Facebook.com</a></h5>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;
