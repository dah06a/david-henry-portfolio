import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
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
                    transformProps={{
                        enterTransform: 'translateX(100px)',
                        exitTransform: 'translateX(-100px)'
                    }}
                >
                    <Col>
                        <Image src={item} className="resume-item" />
                    </Col>
                </FadeTransform>
            ))}
        </Stagger>
    );

    return (
        <Container fluid>
            <Row className="resume-title">
                <Col className="align-self-center">
                    <h1>Résumé</h1>
                </Col>
            </Row>
            <Row>
                {resume}
            </Row>
        </Container>
    );
}

export default Resume;
