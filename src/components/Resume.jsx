import React from 'react';
import { Button, Container, Row, Col, Image } from 'react-bootstrap';
import { FadeTransform, Stagger } from 'react-animation-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLaptop, faCode, faPhone } from '@fortawesome/free-solid-svg-icons';

import ResumeProjects from '../images/resume-projects.png';
import ResumeWork from '../images/resume-work.png';
import ResumeEducation from '../images/resume-education.png';
import ResumeTools from '../images/resume-tools.png';

import './Resume.css';

function Resume(props) {

    const resumeItems = [ ResumeProjects, ResumeWork, ResumeEducation, ResumeTools];
    const resume = (
        <Stagger in delay={500} duration={2000}>
            {resumeItems.map(item => (
                <FadeTransform
                    in
                    key={item}
                    transformProps={{
                        enterTransform: 'translateX(0%)',
                        exitTransform: 'translateX(-2%)'
                    }}
                >
                    <Image src={item} className="resume-item" />
                </FadeTransform>
            ))}
        </Stagger>
    );

    return (
        <Container fluid className="resume">
            <Row className="resume-title">
                <Col className="align-self-center">
                    <h1>Résumé</h1>
                    <Button
                        href="https://drive.google.com/file/d/1x_u5ZAzrkQp09ezAgKQBk4-ArS67H4x7/view?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                        variant="outline-dark"
                        >PDF Version
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col xs={12} lg={8} className="resume-column">
                    <h2 className="my-3">David Henry</h2>
                    <Row className="my-3">
                        <Col>
                            <FontAwesomeIcon icon={faEnvelope} /><a href="mailto: dah06a@acu.edu" > dah06a@acu.edu</a>
                        </Col>
                        <Col>
                            <FontAwesomeIcon icon={faLaptop} /><a href="https://davidhenrydev.com" > DavidHenryDev.com</a>
                        </Col>
                        <Col>
                            <FontAwesomeIcon icon={faCode} /><a href="https://github.com/dah06a" target="_blank" rel="noreferrer"> Github.com</a>
                        </Col>
                        <Col>
                            <FontAwesomeIcon icon={faPhone} /><a href="tel:+1-325-260-5182"> (325) 260 - 5182</a>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>Software developer with a passion for continued learning and collaborating on meaningful projects.</p>
                        </Col>
                    </Row>
                    {resume}
                </Col>
            </Row>
        </Container>
    );
}

export default Resume;
