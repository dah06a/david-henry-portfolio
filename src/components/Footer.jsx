import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import './Footer.css';

function Footer(props) {
    return (
        <Container fluid >
            <Row className="footer align-items-center">
                <Col md={4}>
                    <h5>Full Stack Developer</h5>
                </Col>
                <Col md={4}>
                    <h5><a href="tel:+1-325-260-5182">+1-325-260-5182</a></h5>
                </Col>
                <Col md={4}>
                    <h5><Nav.Link href="/contact" className="contact-btn">Contact Me</Nav.Link></h5>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;
