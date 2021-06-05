import React from 'react';
import { Button, Container, Row, Col, Image } from 'react-bootstrap';
import { FadeTransform, Stagger } from 'react-animation-components'

import ResumeTitle from '../images/resume-title.png';
import ResumeExperience from '../images/resume-experience.png';
import ResumeTools from '../images/resume-tools.png';
import ResumeWork from '../images/resume-work.png';
import ResumeEducation from '../images/resume-education.png';

import './Resume.css';

function Resume(props) {

    const resumeItems = [ResumeTitle, ResumeExperience, ResumeTools, ResumeWork, ResumeEducation];
    const resume = (
        <Stagger in delay={300} duration={1000}>
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
                        href="https://drive.google.com/file/d/1h1oLH2BNXZCXkOWw7sKg5dYFkAvRqYF9/view?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                        variant="outline-dark"
                        >PDF Version
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col xs={12} lg={8} className="resume-column">
                    {resume}
                </Col>
            </Row>
        </Container>
    );
}

export default Resume;
