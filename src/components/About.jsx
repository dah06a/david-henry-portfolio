import React from 'react';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';
import './About.css';

function About(props) {
    return (
        <article className="about">
            <Container fluid>
                <Row className="about-title">
                    <Col className="align-self-center">
                        <h1>The Story</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md={8} className="m-auto">
                        <h3>My mission is to learn, create, and change my future.</h3>
                    </Col>
                </Row>
                <Row>
                    <Col md={8} className="m-auto">
                        <p>It's been a long journey, but I'm changing careers, from secondary math/science teacher
                            to developer.  It </p>
                    </Col>
                </Row>
                <Row>
                    <Col md={8} className="m-auto">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Col>
                </Row>
            </Container>
        </article>
    );
}

export default About;
