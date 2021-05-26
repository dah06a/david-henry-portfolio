import React from 'react';
import { Container, Row, Col, CardDeck, Card } from 'react-bootstrap';
import Img from '../images/acu-banner.png';
import './Projects.css';

function Projects(props) {
    return (
        <Container fluid className="projects">
            <Row className="projects-title">
                <Col className="align-self-center">
                    <h1>Projects</h1>
                </Col>
            </Row>
            <Row className="m-5">
                <Col md={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Header Example</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Card.Img style={{width: '100%'}} src={Img} />
                            <Card.Text>Card Text Area</Card.Text>
                        </Card.Body>
                        <Card.Footer>Footer Example</Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Projects;
