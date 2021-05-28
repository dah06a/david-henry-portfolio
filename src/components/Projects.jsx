import React from 'react';
import { Container, Row, Col, Card, Carousel, OverlayTrigger, Tooltip } from 'react-bootstrap';
import CafeHome from '../images/game-cafe-home.png';
import CafeGames from '../images/game-cafe-games.png';
import CafeMenu from '../images/game-cafe-menu.png';
import CafeReserve from '../images/game-cafe-reserve.png';
import './Projects.css';

const Slides = (props) => {
    let carouselItems = [];
    for (let i = 0; i < props.carouselItems.length; i++) {
        carouselItems.push(
            <Carousel.Item className="projects-images">
                <img className="d-block w-100" src={props.carouselItems[i]} alt={"Project Slide " + (i+1)} />
            </Carousel.Item>
        );
    }
    const offset = Math.floor(Math.random()*1000) + 2000;
    return (
        <Carousel fade wrap controls={false} indicators={false} interval={offset}>
            {carouselItems}
        </Carousel>
    );
}

const ProjectCard = (props) => {
    return (
        <a href={props.link} className="projects-link">
            <OverlayTrigger
                key={`overlay-${props.title}`}
                placement="auto"
                overlay={
                    <Tooltip id={`tooltip-${props.title}`}>
                        {props.tooltip}
                    </Tooltip>
                }
            >
                <Card className="projects-card">
                    <Card.Header>
                        <Card.Title>{props.title}</Card.Title>
                    </Card.Header>
                    <Card.Body className="p-0">
                        <Slides carouselItems={props.carouselItems} />
                        <Card.Text className="p-2 align-self-center">
                            Focus: <strong>{props.focus}</strong>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </OverlayTrigger>
        </a>
    );
}

function Projects(props) {
    return (
        <Container fluid className="projects">
            <Row className="projects-title">
                <Col className="align-self-center">
                    <h1>Projects</h1>
                </Col>
            </Row>
            <Row>
                <Col md={6} className="m-auto">
                    <h2>Bootcamp Work</h2>
                </Col>
            </Row>
            <Row className="m-5">
                <Col md={4}>
                    <ProjectCard
                        link="https://github.com/dah06a/cafe-project-react-version"
                        title="Tabletop Gaming Cafe"
                        carouselItems={[CafeHome, CafeGames, CafeMenu, CafeReserve]}
                        focus="React, Bootstrap, API Request"
                        tooltip="A website design for a fictitious tabletop gaming cafe! This project demonstrates a sleek,
                        responsive design and creates a list of games for the user to reserve."
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default Projects;
