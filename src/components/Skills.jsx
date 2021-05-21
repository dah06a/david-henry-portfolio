import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import './Skills.css';

function Skills(props) {
    return (
        <Container fluid className="skills">
            <Row className="skills-title">
                <Col className="align-self-center">
                    <h1>Skills and Technologies</h1>
                </Col>
            </Row>
            <Row>
                <Col className="align-self-center">
                    <ListGroup variant="flush" horizontal className="list-title">
                        <ListGroup.Item className="list-title-item"></ListGroup.Item>
                        <ListGroup.Item className="list-title-item">Novice</ListGroup.Item>
                        <ListGroup.Item className="list-title-item">Intermediate</ListGroup.Item>
                        <ListGroup.Item className="list-title-item">Advanced</ListGroup.Item>
                        <ListGroup.Item className="list-title-item">Pro</ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>




            <p>
                html
                css
                javascript
                jquery
                react
                swift
                xcode-studio
                react-native
                node
                express
                mongodb
                mongoose
                sql
            </p>

        </Container>
    );
}

export default Skills;
