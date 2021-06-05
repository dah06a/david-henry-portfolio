import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import ResumeImg from '../images/resume.png';

import './Resume.css';

function Resume(props) {

    return (
        <Container fluid>
            <Row className="resume-title">
                <Col className="align-self-center">
                    <h1>Résumé</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image src={ResumeImg} />
                </Col>
            </Row>
        </Container>
    );
}

export default Resume;
