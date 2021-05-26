import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithubSquare, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'

import './Footer.css';

function Footer(props) {
    return (
        <Container fluid >
            <Row className="footer align-items-center">
                <Col md={6}>
                    <h5><a href="tel:+1-325-260-5182" className="m-auto">+1-325-260-5182</a></h5>
                </Col>
                <Col md={6} className="social-icons">
                    <a href="https://linkedin.com" className="m-2">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                    <a href="https://github.com/dah06a" className="m-2">
                        <FontAwesomeIcon icon={faGithubSquare} size="2x" />
                    </a>
                    <a href="https://facebook.com" className="m-2">
                        <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
                    </a>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;
